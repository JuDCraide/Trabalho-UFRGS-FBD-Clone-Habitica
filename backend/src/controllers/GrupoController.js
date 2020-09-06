const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

module.exports = {

    async create(req, res) {
        const { nome, id_lider } = req.body;
        let query = `INSERT INTO grupo(nome, id_lider) VALUES (${nome},${id_lider});`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Cadastrado com sucesso')
        })
    },

    async getGrupoByUserId(req, res) {
        const {id} = req.params;
        
        let query = `SELECT id_grupo FROM membro_grupo where id_usuario=${id};`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(JSON.parse(JSON.stringify(result))[0])
        })
    },


    async view(req, res) {
        const {id} = req.params;
        
        let query = `SELECT * FROM grupo where id=${id};`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            
            return res.status(200).json(JSON.parse(JSON.stringify(result))[0])
        })
    },

    async remove(req, res) {
        const { id } = req.body;
        let query = `DELETE FROM grupo where id = (${id});`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Excluído com sucesso')
        })
    },

}