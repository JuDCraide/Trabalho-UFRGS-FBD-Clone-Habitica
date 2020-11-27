const HabitoController = require("../controllers/HabitoController");
const ClasseController = require("../controllers/ClasseController");
const ItemController = require("../controllers/ItemController");
const UsuarioController = require("../controllers/UsuarioController");

//dano quando feita um habito ruim
function getDano(dificuldade, defesaObjetos, defesaClasse) {
    let defesa = (defesaClasse + defesaObjetos) / 2;
    let danoBase = (5 - dificuldade) * 5;
    return danoBase * (100 - defesa) / 100;
}

//dano feito pelo monstro quando alguém do grupo não faz atividade
function getDanoFeitoPeloMonstro(somaDificuldades, quantidadeAtividades, defesaObjetos, defesaClasse) {
    let defesa = (defesaClasse + defesaObjetos) / 2;
    let danoBase = (quantidadeAtividades * 5 - somaDificuldades) * 8;
    return danoBase * (100 - defesa) / 100;
}

function atacarAoMonstro(dificuldade, ataqueObjetos, ataqueClasse, nivel) {
    let ataque = (ataqueClasse + ataqueObjetos) / 2;
    let ataqueBase = dificuldade * 2;
    return ataqueBase * nivel / 10 * (100 + ataque) / 100;
}

function ataqueAoMonstroAindaNaoRealizado(somaDificuldades, ataqueObjetos, ataqueClasse, nivel) {
    let ataque = (ataqueClasse + ataqueObjetos) / 2;
    let ataqueBase = somaDificuldades * 2;
    return ataqueBase * nivel / 10 * (100 + ataque) / 100;
}

//aumenta xp quando realiza atividade
function getXP(xp_recompensa, inteligenciaObjetos, inteligenciaClasse) {
    let inteligencia = inteligenciaClasse + inteligenciaObjetos;
    return xp_recompensa * (100 + inteligencia) / 100;
}

function getNivel(xp) {
    return Math.floor(xp / 100);
}

module.exports = {

    atividadeRealizadaHabito(id, id_usuario) {

        let habito = {};
        let query = `SELECT * FROM atividade JOIN habito ON(habito.id_atividade = atividade.id) WHERE  habito.id = ${id_atividade};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            habito = result[0];
        })

        let usuario = {};
        query = `SELECT * FROM usuario where id=${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            usuario = result[0]
        })

        let classe = {};
        query = `SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            classe = result[0]
        })

        let objetos = {};
        query = `
                SELECT * 
                FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                WHERE usuario_possui_itens.id_usuario = ${id_usuario} AND usuario_possui_itens.equipado;
            `;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })

        if (!habito.eh_positivo) {
            let defesaObjetos = 0;
            objetos.forEach(objeto => {
                defesaObjetos += objeto.defesa;
            });
            let dano = getDano(habito.dificuldade, defesaObjetos, classe.defesa);
            if (usuario.saude > dano) usuario.saude -= dano;
            else usuario.experiencia -= 100;

        } else {
            let inteligenciaObjetos = 0;
            objetos.forEach(objeto => {
                inteligenciaObjetos += objeto.inteligencia;
            });
            let xp = getDano(habito.inteligencia, inteligenciaObjetos, classe.inteligencia);
            usuario.experiencia = xp;
        }

        query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
        connection.query(query, function (err, result, fields) {
            console.log(err)
            if (err) return res.status(500).json(err)
            return res.status(200).send('Editado com sucesso')
        })
    },

    atividadeRealizadaRotina(id, id_usuario) {
        let rotina = {};
        let query = `SELECT * FROM atividade JOIN rotina ON(rotina.id_atividade = atividade.id) WHERE  rotina.id = ${id_atividade};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            rotina = result[0];
        })

        let usuario = {};
        query = `SELECT * FROM usuario where id=${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            usuario = result[0]
        })

        let classe = {};
        query = `SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            classe = result[0]
        })

        let objetos = {};
        query = `
                SELECT * 
                FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                WHERE usuario_possui_itens.id_usuario = ${id_usuario} AND usuario_possui_itens.equipado;
            `;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })

        let inteligenciaObjetos = 0;
        objetos.forEach(objeto => {
            inteligenciaObjetos += objeto.inteligencia;
        });
        let xp = getDano(rotina.inteligencia, inteligenciaObjetos, classe.inteligencia);
        usuario.experiencia = xp;
        usuario.dinheiro = rotina.dinheiro;

        query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
        connection.query(query, function (err, result, fields) {
            console.log(err)
            if (err) return res.status(500).json(err)
            return res.status(200).send('Editado com sucesso')
        })
    },

    atividadeRealizadaTarefa(id, id_usuario) {
        let tarefa = {};
        let query = `SELECT * FROM atividade JOIN tarefa ON(tarefa.id_atividade = atividade.id) WHERE  tarefa.id = ${id_atividade};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            tarefa = result[0];
        })

        let usuario = {};
        query = `SELECT * FROM usuario where id=${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            usuario = result[0]
        })

        let classe = {};
        query = `SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            classe = result[0]
        })

        let objetos = {};
        query = `
                SELECT * 
                FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                WHERE usuario_possui_itens.id_usuario = ${id_usuario} AND usuario_possui_itens.equipado;
            `;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            return res.status(200).json(JSON.parse(JSON.stringify(result)))
        })

        if (new Date(tarefa.data_entrega) < Date.now()) {
            let defesaObjetos = 0;
            objetos.forEach(objeto => {
                defesaObjetos += objeto.defesa;
            });
            let dano = getDano(tarefa.dificuldade, defesaObjetos, classe.defesa);
            if (usuario.saude > dano) usuario.saude -= dano;
            else usuario.experiencia -= 100;
        }


        let inteligenciaObjetos = 0;
        objetos.forEach(objeto => {
            inteligenciaObjetos += objeto.inteligencia;
        });
        let xp = getDano(tarefa.inteligencia, inteligenciaObjetos, classe.inteligencia);
        usuario.experiencia = xp;
        usuario.moedas = tarefa.dinheiro;

        query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
        connection.query(query, function (err, result, fields) {
            console.log(err)
            if (err) return res.status(500).json(err)
            return res.status(200).send('Editado com sucesso')
        })
    },
}