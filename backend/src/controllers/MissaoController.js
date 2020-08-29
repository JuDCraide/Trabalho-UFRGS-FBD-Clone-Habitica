const connection = require('../connection')

module.exports = {

    async create(req, res) {
        const { nome, login, id_classe } = req.body;
        let query = `INSERT INTO missao(nome,login id_classe) VALUES (${nome},${login},${id_classe});`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Cadastrado com sucesso')
        })
    },

    async view(req, res) {
        const {id} = req.params;
        console.log(id)
        let query = `SELECT * FROM missao where id=${id};`;
        console.log(query);
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            console.log(result)
            return res.status(200).json(JSON.parse(JSON.stringify(result))[0])
        })
    },

    async remove(req, res) {
        const { id } = req.body;
        let query = `DELETE FROM usuario where id = (${id});`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Excluído com sucesso')
        })
    },

}