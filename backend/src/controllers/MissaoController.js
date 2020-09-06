const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

module.exports = {

    async list(req, res) {
        const {id} = req.params;
        let query = `SELECT missao.id as id, missao.nome as nome, missao.saude as saude, missao.imagem as imagem, missao.descricao as descricao, missao.id_recompensa as id_recompensa,missaoFeita(id, ${id})as feita FROM missao;`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })
    },

    async viewAtual(req, res) {
        const {id} = req.params;
        //console.log(id)
        let query = `SELECT * FROM missao_atual JOIN missao ON(missao.id = missao_atual.id_missao) where id_grupo =${id};`;
        
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            if(result.length == 0){
                return  res.status(404).json("Missão Não Encontrada")
            }
            return res.status(200).json(JSON.parse(JSON.stringify(result))[0])
        })
    },

    async comecar(req, res) {
        const {id} = req.params;
        const {id_missao} = req.body;

        
        let query = `INSERT INTO missao_atual(id_grupo, id_missao) VALUES (${id}, ${id_missao});`;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            //console.log(result)
            return res.status(200).json(JSON.parse(JSON.stringify(result))[0])
        })
    },


    //INSERT INTO missao_atual(id_grupo, id_missao) VALUES (${id_grupo}, ${id_missao});
    async dano(req, res) {
        //dar dano
        const { id } = req.body;
        let query = `DELETE FROM usuario where id = (${id});`
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).send('Excluído com sucesso')
        })
    },

}