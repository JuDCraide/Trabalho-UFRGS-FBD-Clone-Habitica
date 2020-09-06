import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: "#6132b4",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    cabecalho: {
        width: '100%',
        height: 140,
        backgroundColor: "#6132b4",
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    titulo: {
        color: "#FFF",
        fontSize: 20,
        paddingLeft: 20,
        flex: 1,
        fontWeight: 'bold',
    },
    textoCriar: {
        color: "#FFF",
        fontSize: 14,
        paddingLeft: 10,
    },
    input: {
        height: 60,
        backgroundColor: '#FFFFFF80',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginBottom: 8,
        //paddingHorizontal: 24,
        paddingLeft: 10,
        fontSize: 16,
        width: '100%'
    },
    inputFocado: {
        height: 60,
        backgroundColor: '#FFFFFFBF',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
        borderBottomColor: "#925cf3",
        borderBottomWidth: 2,
        width: '100%'
    },
    principal: {
        flex: 1,
        paddingHorizontal: 15,
    },
    areaSelecao: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //borderColor:'green',
        //borderWidth:2,
    },
    itensSelecao: {
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        //borderColor: 'red',
        //borderWidth: 2,
    },
    dificuldadeImg: {
        width: 55,
        height: 55,
        backgroundColor: '#e1e0e3',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dificuldadeImgAtivo: {
        width: 55,
        height: 55,
        backgroundColor: '#6132b4',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoOpcao: {
        color: "#686274"
    },
    textoOpcaoAtiva: {
        color: "#6132b4"
    },

    //habito e rotina
    circuloPreenchido: {
        backgroundColor: "#6132b4",
        width: 30,
        height: 30,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circuloContornado: {
        width: 30,
        height: 30,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#E1E0E3",
        borderWidth: 1,
    },
    itemAtivo: {
        color: "#FFF",
    },
    itemInativo: {
        color: "#E1E0E3",
    },
    //tarefa
    inputData: {
        height: 60,
        backgroundColor: '#e1e0e3',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
        borderBottomColor: "#c3c0c7",
        borderBottomWidth: 3,
        width: '100%'

    },

    //modal
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
    subtitulo: {
        fontSize: 18,
        color: '#878190',
        marginBottom: 10
    },
    botaoModal: {
        width: 200,
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
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});