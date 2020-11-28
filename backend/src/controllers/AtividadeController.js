const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

const { getDano, getXP } = require("../utils/atividadeRealizada");

module.exports = {

    async do(req, res) {
        const { id_usuario, id_atividade, tipo, id } = req.body;
        let query = `INSERT INTO atividades_realizadas (id_usuario, id_atividade) VALUES (${id_usuario}, ${id_atividade}) `;
        connection.query(query, function (err, result, fields) {
            if (err) return res.status(500).json(err)
            //console.log(result);

            let usuario = {};
            query = `SELECT * FROM usuario where id=${id_usuario};`;
            connection.query(query, function (err, result, fields) {
                if (err) return
                usuario = JSON.parse(JSON.stringify(result))[0];


                let classe = {};
                query = `SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id_usuario};`;
                connection.query(query, function (err, result, fields) {
                    if (err) return
                    classe = JSON.parse(JSON.stringify(result))[0];


                    let objetos = [];
                    query = `
                            SELECT * 
                            FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                            WHERE usuario_possui_itens.id_usuario = ${id_usuario} AND usuario_possui_itens.equipado;
                        `;
                    connection.query(query, function (err, result, fields) {
                        if (err) return
                        objetos = JSON.parse(JSON.stringify(result));

                        
                        switch (tipo) {
                            case "habito":
                                let habito = {};
                                let query = `SELECT * FROM atividade JOIN habito ON(habito.id_atividade = atividade.id) WHERE  habito.id = ${id_atividade};`;
                                connection.query(query, function (err, result, fields) {
                                    if (err) return
                                    habito = JSON.parse(JSON.stringify(result))[0];

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
                                        let xp = getXP(habito.inteligencia, inteligenciaObjetos, classe.inteligencia);
                                        usuario.experiencia = xp;
                                    }

                                    query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
                                    connection.query(query, function (err, result, fields) {
                                        console.log(err)
                                        if (err) return
                                        return //res.status(200).send('Editado com sucesso')
                                    })

                                })


                                break;

                            case "rotina":
                                let rotina = {};
                                let query = `SELECT * FROM atividade JOIN rotina ON(rotina.id_atividade = atividade.id) WHERE  rotina.id = ${id_atividade};`;
                                connection.query(query, function (err, result, fields) {
                                    if (err) return
                                    rotina = JSON.parse(JSON.stringify(result))[0];;

                                    let inteligenciaObjetos = 0;
                                    objetos.forEach(objeto => {
                                        inteligenciaObjetos += objeto.inteligencia;
                                    });
                                    let xp = getXP(rotina.inteligencia, inteligenciaObjetos, classe.inteligencia);
                                    usuario.experiencia = xp;
                                    usuario.dinheiro = rotina.dinheiro;

                                    query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
                                    connection.query(query, function (err, result, fields) {
                                        console.log(err)
                                        if (err) return
                                        return
                                    })
                                })

                                break;

                            case "tarefa":
                                let tarefa = {};
                                let query = `SELECT * FROM atividade JOIN tarefa ON(tarefa.id_atividade = atividade.id) WHERE  tarefa.id = ${id_atividade};`;
                                connection.query(query, function (err, result, fields) {
                                    if (err) return
                                    tarefa = JSON.parse(JSON.stringify(result))[0];


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
                                    let xp = getXP(tarefa.inteligencia, inteligenciaObjetos, classe.inteligencia);
                                    usuario.experiencia = xp;
                                    usuario.moedas = tarefa.dinheiro;
                                    query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
                                    connection.query(query, function (err, result, fields) {
                                        console.log(err)
                                        if (err) return
                                        return //res.status(200).send('Editado com sucesso')
                                    })
                                })

                                break;
                        }


                    })
                })
            })


            return res.status(200).json(result)
        })

    },

}

/*

    atividadeRealizadaHabito(id_atividade, id_usuario) {

        let habito = {};
        let query = `SELECT * FROM atividade JOIN habito ON(habito.id_atividade = atividade.id) WHERE  habito.id = ${id_atividade};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            habito = JSON.parse(JSON.stringify(result))[0];
        })

        let usuario = {};
        query = `SELECT * FROM usuario where id=${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            usuario = JSON.parse(JSON.stringify(result))[0];
        })

        let classe = {};
        query = `SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            classe = JSON.parse(JSON.stringify(result))[0];
        })

        let objetos = [];
        query = `
                SELECT *
                FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                WHERE usuario_possui_itens.id_usuario = ${id_usuario} AND usuario_possui_itens.equipado;
            `;
        connection.query(query, function (err, result, fields) {
            if (err) return
            objetos = JSON.parse(JSON.stringify(result));
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
            let xp = getXP(habito.inteligencia, inteligenciaObjetos, classe.inteligencia);
            usuario.experiencia = xp;
        }

        query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
        connection.query(query, function (err, result, fields) {
            console.log(err)
            if (err) return
            return //res.status(200).send('Editado com sucesso')
        })
    },

    atividadeRealizadaRotina(id_atividade, id_usuario) {
        let rotina = {};
        let query = `SELECT * FROM atividade JOIN rotina ON(rotina.id_atividade = atividade.id) WHERE  rotina.id = ${id_atividade};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            rotina = JSON.parse(JSON.stringify(result))[0];;
        })

        let usuario = {};
        query = `SELECT * FROM usuario where id=${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            usuario = JSON.parse(JSON.stringify(result))[0];
        })

        let classe = {};
        query = `SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            classe = JSON.parse(JSON.stringify(result))[0];
        })

        let objetos = [];
        query = `
                SELECT *
                FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                WHERE usuario_possui_itens.id_usuario = ${id_usuario} AND usuario_possui_itens.equipado;
            `;
        connection.query(query, function (err, result, fields) {
            if (err) return
            objetos = JSON.parse(JSON.stringify(result));
        })

        let inteligenciaObjetos = 0;
        objetos.forEach(objeto => {
            inteligenciaObjetos += objeto.inteligencia;
        });
        let xp = getXP(rotina.inteligencia, inteligenciaObjetos, classe.inteligencia);
        usuario.experiencia = xp;
        usuario.dinheiro = rotina.dinheiro;

        query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
        connection.query(query, function (err, result, fields) {
            console.log(err)
            if (err) return
            return
        })
    },

    atividadeRealizadaTarefa(id_atividade, id_usuario) {
        let tarefa = {};
        let query = `SELECT * FROM atividade JOIN tarefa ON(tarefa.id_atividade = atividade.id) WHERE  tarefa.id = ${id_atividade};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            tarefa = JSON.parse(JSON.stringify(result))[0];;
        })

        let usuario = {};
        query = `SELECT * FROM usuario where id=${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            usuario = JSON.parse(JSON.stringify(result))[0];
        })

        let classe = {};
        query = `SELECT classe.nome AS classe FROM usuario JOIN classe ON(classe.id = usuario.id_classe) WHERE usuario.id = ${id_usuario};`;
        connection.query(query, function (err, result, fields) {
            if (err) return
            //console.log(result)
            classe = JSON.parse(JSON.stringify(result))[0];
        })

        let objetos = [];
        query = `
                SELECT *
                FROM item JOIN usuario_possui_itens ON (item.id = usuario_possui_itens.id_item)
                WHERE usuario_possui_itens.id_usuario = ${id_usuario} AND usuario_possui_itens.equipado;
            `;
        connection.query(query, function (err, result, fields) {
            if (err) return
            objetos = JSON.parse(JSON.stringify(result));
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
        let xp = getXP(tarefa.inteligencia, inteligenciaObjetos, classe.inteligencia);
        usuario.experiencia = xp;
        usuario.moedas = tarefa.dinheiro;

        query = `UPDATE usuario SET moedas = ${usuario.moedas}, saude = ${usuario.saude}, experiencia = ${usuario.experiencia} WHERE usuario.id = ${id_usuario}; `
        connection.query(query, function (err, result, fields) {
            console.log(err)
            if (err) return
            return res.status(200).send('Editado com sucesso')
        })
    },
*/