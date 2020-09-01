const connection = require('../connection')

module.exports = {

    

    async view(req, res) {
        const {id} = req.params;
        console.log(id)
        let query = `SELECT * FROM item where id=${id};`;
        console.log(query);
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            console.log(result)
            return res.status(200).json(JSON.parse(JSON.stringify(result))[0])
        })
    },

    async remove(req, res) {
        const { id } = req.body;
        let query = `DELETE FROM item where id = (${id});`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Excluído com sucesso')
        })
    },

}