const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

//dano quando feita um habito ruim
function getDano(dificuldade, defesaObjetos, defesaClasse) {
    let defesa = (defesaClasse + defesaObjetos) / 2;
    let danoBase = (5 - dificuldade) * 5;
    return danoBase * (100 - defesa) / 100;
}

//dano feito pelo monstro quando alguém do grupo não faz atividade
function getDanoFeitoPeloMonstro(somaDificuldades, quantidadeAtividades, defesaObjetos, defesaClasse) {
    let defesa = (defesaClasse + defesaObjetos) / 2;
    let danoBase = (quantidadeAtividades * 5 - somaDificuldades) * 8;
    return danoBase * (100 - defesa) / 100;
}

function atacarOMonstro(dificuldade, ataqueObjetos, ataqueClasse, nivel) {
    let ataque = (ataqueClasse + ataqueObjetos) / 2;
    let ataqueBase = dificuldade * 2;
    return ataqueBase * nivel / 10 * (100 + ataque) / 100;
}

function ataqueAoMonstroAindaNaoRealizado(somaDificuldades, ataqueObjetos, ataqueClasse, nivel) {
    let ataque = (ataqueClasse + ataqueObjetos) / 2;
    let ataqueBase = somaDificuldades * 2;
    return ataqueBase * (nivel / 1000 + 100 + ataque) / 100;
}

//aumenta xp quando realiza atividade
function getXP(xp_recompensa, inteligenciaObjetos, inteligenciaClasse) {
    let inteligencia = inteligenciaClasse + inteligenciaObjetos;
    return xp_recompensa * (100 + inteligencia) / 100;
}

function getNivel(xp) {
    return Math.floor(xp / 100) + 1;
}

module.exports = {
    danoPendente(usuario) {

        let somaDificuldades = 0;
        let query = `
            SELECT SUM(dificuldade) as dano_pendente
            FROM atividades_realizadas
                JOIN atividade ON (atividade.id = atividades_realizadas.id_atividade)
                LEFT JOIN habito ON (habito.id_atividade = atividade.id)
            WHERE (
                    habito.eh_positivo != false
                    or habito.eh_positivo is NULL
                )
                and DAY(atividades_realizadas.data_hora) = DAY(CURRENT_DATE())
                and id_usuario = ${usuario.id}
            GROUP BY atividades_realizadas.id_usuario;
            `;
        connection.query(query, function (err, result, fields) {
            if (err) return
            somaDificuldades = JSON.parse(JSON.stringify(result))[0];
        })

        let classe = {};
        query = `SELECT * FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${usuario.id};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            classe = JSON.parse(JSON.stringify(result))[0]
            console.log("clasee ", classe)
        })

        let objetos = [];
        query = `
                SELECT * 
                FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                WHERE usuario_possui_itens.id_usuario = ${usuario.id} AND usuario_possui_itens.equipado;
            `;
        connection.query(query, function (err, result, fields) {
            if (err) return
            objetos = JSON.parse(JSON.stringify(result));
        })

        let ataqueObjetos = 0;
        objetos.forEach(objeto => {
            ataqueObjetos += objeto.ataque;
        });

        console.log("somaDificuldades ", somaDificuldades);
        console.log("ataqueObjetos ", ataqueObjetos);
        console.log("classe  ", classe);
        console.log("usuario", usuario);
        console.log("classe.ataque  ", classe.ataque);
        console.log("getNivel(usuario.xp) ", getNivel(usuario.experiencia));

        return ataqueAoMonstroAindaNaoRealizado(somaDificuldades, ataqueObjetos, classe.ataque, getNivel(usuario.experiencia));
    },

    atividadeRealizadaHabito(id_atividade, id_usuario) {

        let habito = {};
        let query = `SELECT * FROM atividade JOIN habito ON(habito.id_atividade = atividade.id) WHERE  habito.id = ${id_atividade};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            habito = JSON.parse(JSON.stringify(result))[0];
        })

        let usuario = {};
        query = `SELECT * FROM usuario where id=${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            usuario = JSON.parse(JSON.stringify(result))[0];
        })

        let classe = {};
        query = `SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            classe = JSON.parse(JSON.stringify(result))[0];
        })

        let objetos = [];
        query = `
                SELECT * 
                FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                WHERE usuario_possui_itens.id_usuario = ${id_usuario} AND usuario_possui_itens.equipado;
            `;
        connection.query(query, function (err, result, fields) {
            if (err) return
            objetos = JSON.parse(JSON.stringify(result));
        })

        if (!habito.eh_positivo) {
            let defesaObjetos = 0;
            objetos.forEach(objeto => {
                defesaObjetos += objeto.defesa;
            });
            let dano = getDano(habito.dificuldade, defesaObjetos, classe.defesa);
            if (usuario.saude > dano) usuario.saude -= dano;
            else usuario.experiencia -= 100;

        } else {
            let inteligenciaObjetos = 0;
            objetos.forEach(objeto => {
                inteligenciaObjetos += objeto.inteligencia;
            });
            let xp = getXP(habito.inteligencia, inteligenciaObjetos, classe.inteligencia);
            usuario.experiencia = xp;
        }

        query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
        connection.query(query, function (err, result, fields) {
            console.log(err)
            if (err) return
            return //res.status(200).send('Editado com sucesso')
        })
    },

    atividadeRealizadaRotina(id_atividade, id_usuario) {
        let rotina = {};
        let query = `SELECT * FROM atividade JOIN rotina ON(rotina.id_atividade = atividade.id) WHERE  rotina.id = ${id_atividade};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            rotina = JSON.parse(JSON.stringify(result))[0];;
        })

        let usuario = {};
        query = `SELECT * FROM usuario where id=${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            usuario = JSON.parse(JSON.stringify(result))[0];
        })

        let classe = {};
        query = `SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            classe = JSON.parse(JSON.stringify(result))[0];
        })

        let objetos = [];
        query = `
                SELECT * 
                FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                WHERE usuario_possui_itens.id_usuario = ${id_usuario} AND usuario_possui_itens.equipado;
            `;
        connection.query(query, function (err, result, fields) {
            if (err) return
            objetos = JSON.parse(JSON.stringify(result));
        })

        let inteligenciaObjetos = 0;
        objetos.forEach(objeto => {
            inteligenciaObjetos += objeto.inteligencia;
        });
        let xp = getXP(rotina.inteligencia, inteligenciaObjetos, classe.inteligencia);
        usuario.experiencia = xp;
        usuario.dinheiro = rotina.dinheiro;

        query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
        connection.query(query, function (err, result, fields) {
            console.log(err)
            if (err) return
            return
        })
    },

    atividadeRealizadaTarefa(id_atividade, id_usuario) {
        let tarefa = {};
        let query = `SELECT * FROM atividade JOIN tarefa ON(tarefa.id_atividade = atividade.id) WHERE  tarefa.id = ${id_atividade};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            tarefa = JSON.parse(JSON.stringify(result))[0];;
        })

        let usuario = {};
        query = `SELECT * FROM usuario where id=${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            usuario = JSON.parse(JSON.stringify(result))[0];
        })

        let classe = {};
        query = `SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            classe = JSON.parse(JSON.stringify(result))[0];
        })

        let objetos = [];
        query = `
                SELECT * 
                FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                WHERE usuario_possui_itens.id_usuario = ${id_usuario} AND usuario_possui_itens.equipado;
            `;
        connection.query(query, function (err, result, fields) {
            if (err) return
            objetos = JSON.parse(JSON.stringify(result));
        })

        if (new Date(tarefa.data_entrega) < Date.now()) {
            let defesaObjetos = 0;
            objetos.forEach(objeto => {
                defesaObjetos += objeto.defesa;
            });
            let dano = getDano(tarefa.dificuldade, defesaObjetos, classe.defesa);
            if (usuario.saude > dano) usuario.saude -= dano;
            else usuario.experiencia -= 100;
        }


        let inteligenciaObjetos = 0;
        objetos.forEach(objeto => {
            inteligenciaObjetos += objeto.inteligencia;
        });
        let xp = getXP(tarefa.inteligencia, inteligenciaObjetos, classe.inteligencia);
        usuario.experiencia = xp;
        usuario.moedas = tarefa.dinheiro;

        query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
        connection.query(query, function (err, result, fields) {
            console.log(err)
            if (err) return
            return res.status(200).send('Editado com sucesso')
        })
    },
}