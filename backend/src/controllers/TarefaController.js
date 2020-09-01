const dbconnection = require('../connection');
const { NULL } = require('mysql2/lib/constants/types');

var connection = dbconnection.dbConnection();

module.exports = {


    async list(req, res) {
        const { id } = req.body;
        let query = `SELECT * FROM atividade JOIN tarefa ON(tarefa.id_atividade = atividade.id) WHERE atividade.id_usuario = ${id};`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(result)
        })
    },

    async view(req, res) {
        const { id } = req.params;

        let query = `SELECT * FROM atividade JOIN tarefa ON(tarefa.id_atividade = atividade.id) WHERE  tarefa.id = ${id};`;
        
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(result[0])
        })
    },

    async create(req, res) {
        const { nome, dificuldade, id_recompensa, id_usuario, data_entrega } = req.body;
        if (!id_recompensa) {
            id_recompensa = NULL;
        }
        let query = `INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ("${nome}",${dificuldade},${id_recompensa},${id_usuario});`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)

            let id_atividade = result.insertId;
            query = `INSERT INTO habito(id_atividade, data_entrega) VALUES (${id_atividade},"${data_entrega}");`;
            connection.query(query, function (err, result, fields) {
                if (err) return res.status(500).json(err)
                return res.status(200).send('Cadastrado com sucesso')
            })

        })
    },


    async remove(req, res) {
        const { id } = req.params;

        let query = `DELETE FROM tarefa where id = ${id};`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            console.log(res);
            return res.status(200).send('Excluído com sucesso')
        })
    },

}