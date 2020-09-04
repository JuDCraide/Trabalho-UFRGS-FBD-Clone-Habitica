import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    principal: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
    },
    nomeGrupo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4e4a57',
        marginTop: 15,
        textAlign: 'center',
    },
    divisor: {
        width: '110%',
        marginLeft: -20,
        height: 1,
        backgroundColor: "#c3c0c7",
        marginVertical: 15
    },
    subtitulo: {
        fontSize: 18,
        color: '#878190',
        marginBottom: 15
    },
    missao: {
        height: 90,
        backgroundColor: '#edecee',
        borderRadius: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nomeMissao: {
        fontSize: 16,
        color: '#4e4a57',
    },
    textoSimples: {
        fontSize: 14,
        color: "#868274",
    },
    imgMissao: {
        height: 200,
        backgroundColor: '#edecee',
        borderRadius: 5,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    porcentagem: {
        height: 8,
        backgroundColor: "#e1e0e3",
        width: '100%',
        borderRadius: 100
    },
    botaoSair: {
        backgroundColor: "#ff6165",
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    adicionarMembro: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //borderWidth:2,
    },
    comecarMissao: {
        height: 40,
        backgroundColor: '#eae9eb',
        borderRadius: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    comecarMissaoTitulo: {
        color: '#6132b4',
    },

    //progressoMissao
    progressoMissao: {
        height: 90,
        borderWidth: 2,
        borderColor: '#c3c0c7',
    },
    progressoMissãoTopoEsquerdo: {
        height: 8,
        width: 8,
        borderWidth: 2,
        borderColor: '#e1e0e3',
    },
    progressoMissãoTopoMeio: {
        height: 8,
        flex: 1,
        borderWidth: 2,
        borderBottomWidth: 0,
        borderLeftColor: '#c3c0c7',
        borderRightColor: '#c3c0c7',
        borderTopColor: '#e1e0e3',
    },
    progressoMissãoTopoDireito: {
        height: 8,
        width: 8,
        borderWidth: 2,
        borderColor: '#e1e0e3',
    },
    progressoMissãoCentroEsquerdo: {
        flex: 1,
        maxWidth: 10,
        borderWidth: 2,
        borderRightWidth: 0,
        borderTopColor: '#c3c0c7',
        borderBottomColor: '#c3c0c7',
        borderLeftColor: '#e1e0e3',
    },
    progressoMissãoCentroMeio: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    progressoMissãoCentroDireito: {
        flex: 1,
        maxWidth: 10,
        borderWidth: 2,
        borderLeftWidth: 0,
        borderTopColor: '#c3c0c7',
        borderBottomColor: '#c3c0c7',
        borderRightColor: '#e1e0e3',
    },
    progressoMissãoBaixoEsquerdo: {
        height: 8,
        width: 8,
        borderWidth: 2,
        borderColor: '#e1e0e3',
    },
    progressoMissãoBaixoMeio: {
        height: 8,
        flex: 1,
        borderWidth: 2,
        borderTopWidth: 0,
        borderLeftColor: '#c3c0c7',
        borderRightColor: '#c3c0c7',
        borderBottomColor: '#e1e0e3',
    },
    progressoMissãoBaixoDireito: {
        height: 8,
        width: 8,
        borderWidth: 2,
        borderColor: '#e1e0e3',
    },

    //sem grupo
    principalSemGrupo: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: 30
    },
    semGrupoImg: {
        width: '100%',
        height: 170,
        resizeMode: 'cover',
    },
    botaoCopiar: {
        flex: 1,
        maxHeight: 40,
        borderColor: '#c3c0c7',
        borderWidth: 1,
        borderRadius: 5,
        color: '#1a181d',
        fontSize: 16,
        alignItems: 'center',
        flexDirection: 'row'
    },
    botaoCopiarLabel: {
        height: '100%',
        maxWidth: '40%',
        backgroundColor: '#e1e0e3',
        borderColor: '#c3c0c7',
        borderRightWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    username: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },

    //modal adicionar membro
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: '#00000044'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        width: 220,
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#c3c0c7',
        borderWidth: 1,
        borderRadius: 5,
        color: '#1a181d',
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    botaoModal: {
        width: 220,
        backgroundColor: '#4f2a93',
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginTop: 15,
    },
    botaoFecharModal: {
        height: 25,
        width: 25,
        backgroundColor: '#4f2a93',
        borderRadius: 100,
        elevation: 2,
        position: 'absolute',
        top: 15,
        right: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    //modal missao
    containerSaude: {
        backgroundColor: "#ff6165",
        borderRadius: 5,
        height: 40,
        width: 250,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    containerRecompensa: {
        height: 60,
        width: 250,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#eae9eb',
        borderRadius: 5,
        marginVertical:2,
        flexDirection:'row',
        alignItems:'center',
    },
    recompensaImg:{
        height:40,
        width:40,
        marginRight:15,
    },
});