const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();
const {danoPendente} = require('../utils/atividadeRealizada')

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
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            //console.log(result)
            let dados = JSON.parse(JSON.stringify(result))[0]
            dados.pendingDamage=danoPendente(dados);
            //console.log(dados);
            return res.status(200).json(dados)
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