const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

module.exports = {

    async listObtidas(req, res) {
        const { id } = req.params;
        //console.log(id)
        let query = `
            SELECT *
            FROM usuario JOIN usuario_conquista ON(usuario_conquista.id_usuario = usuario.id)
                JOIN conquista ON(conquista.id = usuario_conquista.id_conquista)
            WHERE usuario.id = ${id};
        `;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)

            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })
    },

    async listNaoObtidas(req, res) {
        const { id } = req.params;
        let query = `
            SELECT *
            FROM conquista 
            WHERE id NOT IN (
                SELECT conquista.id as id
                FROM usuario JOIN usuario_conquista ON(usuario_conquista.id_usuario = usuario.id)
                    JOIN conquista ON(conquista.id = usuario_conquista.id_conquista)
                WHERE usuario.id = ${id}
            );
        `;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)

            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })
    },

    async conquistasEmComum(req, res) {
        const { id } = req.params;
        let query = `
            SELECT id
            FROM usuario USR
            WHERE id != ${id}
                AND NOT EXISTS (
                    SELECT id_conquista
                    FROM usuario_conquista
                    WHERE usuario_conquista.id_usuario = ${id}
                        AND id_conquista NOT IN (
                            SELECT DISTINCT id_conquista
                            FROM usuario_conquista
                            WHERE usuario_conquista.id_usuario = USR.id
                        )
                )
        `;
        //console.log(query);
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })
    },

}