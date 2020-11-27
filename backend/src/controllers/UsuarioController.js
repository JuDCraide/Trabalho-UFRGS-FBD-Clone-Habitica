const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();
const { ataqueAoMonstroAindaNaoRealizado,getNivel,getDano, getXp } = require('../utils/atividadeRealizada')

module.exports = {

    async login(req, res) {
        const { login } = req.body;
        let query = `SELECT id FROM usuario WHERE login = "${login}";`;
        //console.log(req.body)
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            if (result.length === 0) {
                return res.status(201).json("Usuário não encontrado")
            }
            return res.status(200).json(result[0])
        })
    },

    async create(req, res) {
        const { nome, login, id_classe } = req.body;

        let query = `INSERT INTO usuario(nome,login, id_classe) VALUES ("${nome}","${login}",${id_classe});`
        connection.query(query, function (err, result, fields) {

            if (err) return res.status(500).json(err)
            let id_atividade = result.insertId;
            return res.status(200).json({ id: id_atividade })
        })
    },

    async view(req, res) {
        const { id } = req.params;
        //console.log(id)
        let query = `SELECT * FROM usuario where id=${id};`;
        connection.query(query, async function (err, result, fields) {
            if (err) return res.status(500).json(err)
            //console.log(result)
            let dados = result[0]
            //console.log(dados);
            let usuario = dados;
            let somaDificuldades = 0;
            query = `
            SELECT SUM(dificuldade) as dano_pendente
            FROM atividades_realizadas
                JOIN atividade ON (atividade.id = atividades_realizadas.id_atividade)
                LEFT JOIN habito ON (habito.id_atividade = atividade.id)
            WHERE (
                    habito.eh_positivo != false
                    or habito.eh_positivo is NULL
                )
                and DAY(atividades_realizadas.data_hora) = DAY(CURRENT_DATE())
                and atividade.id_usuario = ${usuario.id}
            GROUP BY atividades_realizadas.id_usuario;
            `;

            let classe = {};
            let objetos = [];

            connection.query(query, function (err, result, fields) {
                //console.log(err,result)
                if (err) return
                somaDificuldades = result[0].dano_pendente;

                let query2 = `SELECT * FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${usuario.id};`;
                connection.query(query2, function (err, result, fields) {
                    if (err) return
                    classe = JSON.parse(JSON.stringify(result))[0]
                    //console.log("clasee ", classe)

                    let query3 = `
                SELECT * 
                FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                WHERE usuario_possui_itens.id_usuario = ${usuario.id} AND usuario_possui_itens.equipado;`;
                    connection.query(query3, function (err, result, fields) {
                        if (err) return
                        objetos = JSON.parse(JSON.stringify(result));

                        let ataqueObjetos = 0;
                        objetos.forEach(objeto => {
                            ataqueObjetos += objeto.ataque;
                        });

                        //console.log("somaDificuldades ", somaDificuldades);
                        //console.log("ataqueObjetos ", ataqueObjetos);
                        //console.log("classe  ", classe);
                        //console.log("usuario", usuario);
                        //console.log("classe.ataque  ", classe.forca);
                        //console.log("getNivel(usuario.xp) ", getNivel(usuario.experiencia));

                        var a = ataqueAoMonstroAindaNaoRealizado(somaDificuldades, ataqueObjetos, classe.forca, getNivel(usuario.experiencia));
                        dados.pendingDamage = a;
                        console.log(dados)
                        return res.status(200).json(dados)
                    })

                })
            })



           
        })
    },

    async remove(req, res) {
        const { id } = req.params;

        let query = `DELETE FROM usuario where id = ${id};`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Excluído com sucesso')
        })
    },

    async update(req, res) {
        const { moedas, saude, xp, id_usuario } = req.body;

        let query = `UPDATE usuario SET moedas = ${moedas}, saude = ${saude}, experiencia = ${xp} WHERE usuario.id = ${id_usuario}; `
        connection.query(query, function (err, result, fields) {
            console.log(err)
            if (err) return res.status(500).json(err)
            return res.status(200).send('Editado com sucesso')
        })
    },

}