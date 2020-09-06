const dbconnection = require('../connection');
const { NULL } = require('mysql2/lib/constants/types');

var connection = dbconnection.dbConnection();

module.exports = {


    async list(req, res) {
        const { id } = req.params;
        let query = `SELECT * FROM atividade JOIN habito ON(habito.id_atividade = atividade.id) WHERE atividade.id_usuario = ${id};`;
        //console.log(req.body)
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(result)
        })
    },

    async view(req, res) {
        const { id } = req.params;

        let query = `SELECT * FROM atividade JOIN habito ON(habito.id_atividade = atividade.id) WHERE  habito.id = ${id};`;

        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(result[0])
        })
    },

    async create(req, res) {
        const { nome, dificuldade, id_recompensa, id_usuario, eh_positivo } = req.body;

        let query = `INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ("${nome}",${dificuldade},${id_recompensa},${id_usuario});`

        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)

            let id_atividade = result.insertId;
            query = `INSERT INTO habito(id_atividade, eh_positivo) VALUES (${id_atividade},${eh_positivo});`;
            connection.query(query, function (err, result, fields) {
                if (err) return res.status(500).json(err)
                return res.status(200).send('Cadastrado com sucesso')
            })

        })
    },


    async remove(req, res) {
        const { id } = req.params;

        let query = `DELETE FROM habito where id = ${id};`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            //console.log(res);
            return res.status(200).send('Excluído com sucesso')
        })
    },

}