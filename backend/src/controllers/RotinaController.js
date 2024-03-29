const dbconnection = require('../connection');
const { NULL } = require('mysql2/lib/constants/types');

var connection = dbconnection.dbConnection();

module.exports = {


    async list(req, res) {
        const { id } = req.params;
        //console.log(id)
        let query = `SELECT * FROM atividade_rotina WHERE id_usuario = ${id};`;
        connection.query(query, function (err, result, fields) {
            //console.log(result)
            if (err) return res.status(500).json(err)
            return res.status(200).json(result)
        })
    },

    async view(req, res) {
        const { id } = req.params;

        let query = `SELECT * FROM atividade JOIN rotina ON(rotina.id_atividade = atividade.id) WHERE  rotina.id = ${id};`;

        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(result[0])
        })
    },

    async create(req, res) {
        const { nome, dificuldade, id_recompensa, id_usuario, dias_da_semana } = req.body;

        let query = `INSERT INTO atividade(nome,dificuldade, id_recompensa, id_usuario) VALUES ("${nome}",${dificuldade},${id_recompensa},${id_usuario});`

        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)

            let id_atividade = result.insertId;
            query = `INSERT INTO rotina(id_atividade, dias_da_semana) VALUES (${id_atividade},b'${dias_da_semana}');`;

            connection.query(query, function (err, result, fields) {
                if (err) return res.status(500).json(err)
                return res.status(200).send('Cadastrado com sucesso')
            })

        })
    },


    async remove(req, res) {
        const { id } = req.params;

        let query = `DELETE FROM rotina where id = ${id};`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            //console.log(res);
            return res.status(200).send('Excluído com sucesso')
        })
    },

    async update(req, res) {
        const { nome, dificuldade, dias_da_semana, id_rotina, id_atividade } = req.body;

        let query = `UPDATE atividade SET nome = "${nome}", dificuldade = ${dificuldade} WHERE atividade.id = ${id_atividade};`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            query = `UPDATE rotina SET dias_da_semana = b'${dias_da_semana}' WHERE rotina.id = ${id_rotina};`;
            
            connection.query(query, function (err, result, fields) {
                if (err) return res.status(500).json(err)
                return res.status(200).send('Editado com sucesso')
            })

        })
    },

}