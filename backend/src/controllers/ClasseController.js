const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

module.exports = {
  
    async list(req, res) {
        let query = `SELECT * FROM classe;`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(result)
        })
    },

    async view(req, res) {
        const {id} = req.params;
        
        let query = `SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id};`;
        
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            console.log(result)
            return res.status(200).json(JSON.parse(JSON.stringify(result))[0])
        })
    },


}