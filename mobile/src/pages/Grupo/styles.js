import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    principal: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
    },
    nomeGrupo: {
        fontSize: 20,
        fontWeight:'bold',
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
    subtitulo:{
        fontSize: 18,
        color: '#878190',
        marginBottom: 15
    },
    nomeMissao: {
        height: 50,
        backgroundColor: '#eae9eb',
        borderRadius: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imgMissao: {
        height: 200,
        backgroundColor: '#eae9eb',
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
});