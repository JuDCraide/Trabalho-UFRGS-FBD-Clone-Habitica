const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

module.exports = {

    async create(req, res) {
        const { nome, id_lider } = req.body;
        let query = `INSERT INTO grupo(nome, id_lider) VALUES ('${nome}' ,${id_lider});`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            let id_grupo = result.insertId;
            query = `INSERT INTO membro_grupo(id_usuario, id_grupo) VALUES (${id_lider} ,${id_grupo});`

            connection.query(query, function (err, result, fields) {
                if (err) return res.status(500).json(err)
                return res.status(200).send('Cadastrado com sucesso')
            })
        })

    },

    async addUser(req, res) {
        const { id } = req.params;
        const { id_usuario } = req.body;

        query = `INSERT INTO membro_grupo(id_usuario, id_grupo) VALUES (${id_usuario} ,${id});`
        console.log(query)
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Cadastrado com sucesso')
        })

    },

    async removeUser(req, res) {
        const { id } = req.params;
        const { id_usuario } = req.body;


        query = `DELETE FROM membro_grupo WHERE id_usuario =${id_usuario} AND id_grupo = ${id});`

        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Cadastrado com sucesso')
        })

    },

    async getGrupoByUserId(req, res) {
        const { id } = req.params;

        let query = `SELECT id_grupo FROM membro_grupo where id_usuario=${id};`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(JSON.parse(JSON.stringify(result))[0])
        })
    },


    async view(req, res) {
        const { id } = req.params;
        let query = `SELECT * FROM grupo where id=${id};`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)

            return res.status(200).json(JSON.parse(JSON.stringify(result))[0])
        })
    },

    async viewMembros(req, res) {
        const { id } = req.params;
        let query = `SELECT usuario.id as id,usuario.nome as nome, usuario.experiencia as xp,  usuario.saude as saude, classe.nome as classe from grupo JOIN membro_grupo ON (grupo.id = membro_grupo.id_grupo) JOIN usuario ON(usuario.id = membro_grupo.id_usuario) JOIN classe ON (classe.id = usuario.id) where grupo.id=${id};`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)

            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })
    },




}