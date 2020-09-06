const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

module.exports = {

    async view(req, res) {
        const { id } = req.params;
        //console.log(id)
        let query = `SELECT * FROM item where id=${id};`;
        //console.log(query);
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            //console.log(result)
            return res.status(200).json(JSON.parse(JSON.stringify(result))[0])
        })
    },

    async listUsuario(req, res) {
        const { id } = req.params;
        let query = `
            SELECT * 
            FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
            WHERE usuario_possui_itens.id_usuario = ${id};
        `;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })
    },

    async listEquipados(req, res) {
        const { id } = req.params;
        let query = `
            SELECT * 
            FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
            WHERE usuario_possui_itens.id_usuario = ${id} AND usuario_possui_itens.equipado;
        `;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })
    },

    async list8(req, res) {
        let query = `SELECT * FROM item where id<8;`;
        //console.log(query);
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            //console.log(result)
            return res.status(200).json(JSON.parse(JSON.stringify(result)))
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


    async equipar(req, res) {
        const { id_item, id_usuario } = req.body;
        let query = `UPDATE usuario_possui_itens SET equipado = '1' WHERE id_usuario = ${id_usuario} AND id_item = ${id_item};`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Excluído com sucesso')
        })
    },

    async desequipar(req, res) {
        const { id_item, id_usuario } = req.body;
        let query = `UPDATE usuario_possui_itens SET equipado = '0' WHERE id_usuario = ${id_usuario} AND id_item = ${id_item};`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Excluído com sucesso')
        })
    },

    async comprar(req, res) {
        const { id_item, id_usuario, novaMoeda } = req.body;

        let query = `INSERT INTO usuario_possui_itens(id_usuario,id_item,equipado) VALUES(${id_usuario},${id_item},'0');`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            let query1 = `UPDATE usuario SET moedas = ${novaMoeda} WHERE id = ${id_usuario};`;

            connection.query(query1, function (err, result, fields) {
                if (err) return res.status(500).json(err)

            })
            return res.status(200).send('Excluído com sucesso')
        })
    },


}