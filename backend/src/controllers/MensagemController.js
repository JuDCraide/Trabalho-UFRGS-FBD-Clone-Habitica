const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

module.exports = {

    async create(req, res) {
        const { texto, usuario, grupo } = req.body;
        let query = `INSERT INTO mensagem(texto, id_usuario,id_grupo) VALUES ('${texto}',${usuario},${grupo});`

        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Cadastrado com sucesso')
        })
    },

    async view(req, res) {
        const { id } = req.params;
        let query = `SELECT mensagem.id as id, usuario.id as id_usuario, texto, data_hora, nome, login FROM mensagem LEFT JOIN usuario ON(mensagem.id_usuario = usuario.id) where id_grupo = ${id};`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })
    },

}