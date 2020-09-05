const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

module.exports = {

    async login(req, res) {
        const { login } = req.body;
        let query = `SELECT id FROM usuario WHERE login = "${login}";`;
        //console.log(req.body)
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
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
            return res.status(200).json(JSON.parse(JSON.stringify(result))[0])
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

}