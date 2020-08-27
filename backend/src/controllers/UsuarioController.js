const connection = require('../connection')

module.exports = {

    async list(req, res) {    
        let query = "SELECT * FROM usuario"
        connection.query(query, function(err, result,fields){
            if (err) return res.status(500).json(err)
            return res.status(200).json(res)
        }) 
    },
    async create(req, res) {    
        const { nome } = req.body;
        let query = `INSERT INTO visitantes(nome) VALUES(${nome})`
        connection.query(query, function(err, result, fields){
            if (err) return res.status(500).json(err)
            return res.status(200).send('Enviado com sucesso')
        }) 
    },

}