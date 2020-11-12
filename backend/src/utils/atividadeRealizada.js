const HabitoController = require("../controllers/HabitoController");
const ClasseController = require("../controllers/ClasseController");
const ItemController = require("../controllers/ItemController");
const UsuarioController = require("../controllers/UsuarioController");

function getDano(dificuldade, defesaObjetos, defesaClasse) {
    let defesa = (defesaClasse + defesaObjetos) / 2;
    let danoBase = (5 - dificuldade) * 5;
    return danoBase * (100 - defesa) / 100;
}

function getDanoFeitoPeloMonstro(somaDificuldades, quantidadeAtividades, defesaObjetos, defesaClasse){
    let defesa = (defesaClasse + defesaObjetos) / 2;
    let danoBase = ( quantidadeAtividades * 5 - somaDificuldades) * 8;
    return danoBase * (100 - defesa) / 100;
}

function atacarAoMonstro(dificuldade, ataqueObjetos, ataqueClasse, nivel) {
    let ataque = (ataqueClasse + ataqueObjetos) / 2;
    let ataqueBase = dificuldade * 2;
    return ataqueBase * nivel / 10 * (100 + ataque) / 100;
}

function ataqueAoMonstroNaoRealizado(somaDificuldades, ataqueObjetos, ataqueClasse, nivel) {
    let ataque = (ataqueClasse + ataqueObjetos) / 2;
    let ataqueBase = somaDificuldades * 2;
    return ataqueBase * nivel / 10 * (100 + ataque) / 100;
}

function getXP(xp_recompensa, inteligenciaObjetos, inteligenciaClasse) {
    let inteligencia = inteligenciaClasse + inteligenciaObjetos;
    return xp_recompensa * (100 + inteligencia) / 100;
}

function getNivel(xp) {
    return Math.floor(xp / 100);
}

function atividadeRealizadaHabito(id_atividade, id_usuario) {

    let habito = HabitoController.view();
    let usuario = UsuarioController.view();
    if (!atividade.eh_positivo) {
        let classe = ClasseController.view();
        let objetos = ItemController.listEquipados();
        let defesaObjetos = 0;
        objetos.forEach(objeto => {
            defesaObjetos += objeto.defesa;
        })
        let dano = getDano(habito.dificuldade, defesaObjetos, classe.defesa);
        if(usuario.saude > dano ) usuario.saude -= dano;
        else usuario.xp -= 100;
        UsuarioController.update(usuario);
        return;
    }
    

}

function atividadeRealizadaRotina(id_atividade, id_usuario) {

}

function atividadeRealizadaTarefa(id_atividade, id_usuario) {

}