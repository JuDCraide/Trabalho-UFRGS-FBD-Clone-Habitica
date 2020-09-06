const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

module.exports = {
  
    async do(req, res) {
        const { id_usuario, id_atividade } = req.body;
        let query = `INSERT INTO atividades_realizadas (id_usuario, id_atividade) VALUES (${id_usuario}, ${id_atividade}) `;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(result)
        })
    },
   
}