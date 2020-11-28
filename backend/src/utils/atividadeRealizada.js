const dbconnection = require('../connection')

var connection = dbconnection.dbConnection();

module.exports = {

    //dano quando feita um habito ruim
    getDano(dificuldade, defesaObjetos, defesaClasse) {
        let defesa = (defesaClasse + defesaObjetos) / 2;
        let danoBase = (5 - dificuldade) * 5;
        return danoBase * (100 - defesa) / 100;
    },

    //dano feito pelo monstro quando alguém do grupo não faz atividade
    getDanoFeitoPeloMonstro(somaDificuldades, quantidadeAtividades, defesaObjetos, defesaClasse) {
        let defesa = (defesaClasse + defesaObjetos) / 2;
        let danoBase = (quantidadeAtividades * 5 - somaDificuldades) * 8;
        return danoBase * (100 - defesa) / 100;
    },

    atacarOMonstro(dificuldade, ataqueObjetos, ataqueClasse, nivel) {
        let ataque = (ataqueClasse + ataqueObjetos) / 2;
        let ataqueBase = dificuldade * 2;
        return ataqueBase * nivel / 10 * (100 + ataque) / 100;
    },

    ataqueAoMonstroAindaNaoRealizado(somaDificuldades, ataqueObjetos, ataqueClasse, nivel) {
        let ataque = (ataqueClasse + ataqueObjetos) / 2;
        let ataqueBase = somaDificuldades * 2;
        return ataqueBase * (nivel / 1000 + 100 + ataque) / 100;
    },

    //aumenta xp quando realiza atividade
    getXP(xp_recompensa, inteligenciaObjetos, inteligenciaClasse) {
        let inteligencia = inteligenciaClasse + inteligenciaObjetos;
        return xp_recompensa * (100 + inteligencia) / 100;
    },

    getNivel(xp) {
        return Math.floor(xp / 100) + 1;
    },

}