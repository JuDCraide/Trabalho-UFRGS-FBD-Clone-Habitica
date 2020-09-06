const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

module.exports = {

    async list(req, res) {
        let query = `SELECT missao.id as id, missao.nome as nome, missao.saude as saude, missao.descricao as descricao, recompensa.valor as moedas, recompensa.xp as xp, item.nome as item FROM missao LEFT JOIN recompensa ON(recompensa.id = missao.id_recompensa) LEFT JOIN item ON(item.id = recompensa.id_item);`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })
    },

    async view(req, res) {
        const {id} = req.params;
        //console.log(id)
        let query = `SELECT * FROM missao where id=${id};`;
        //console.log(query);
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            //console.log(result)
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