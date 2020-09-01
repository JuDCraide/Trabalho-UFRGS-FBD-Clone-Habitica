import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    containerConteudo: {
        flex: 1,
        paddingHorizontal: 10,
    },
    equipados: {
        backgroundColor: '#4e4a57',
        borderRadius: 5,
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
    },
    subtitulo: {
        fontSize: 18,
        color: '#4e4a57',
        marginVertical: 15
    },
    divisor: {
        width: '110%',
        marginLeft: -20,
        height: 1,
        backgroundColor: "#c3c0c7",
        marginVertical: 15
    },

    //Modal
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
    openButton: {
        width: 200,
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 15,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    botaoModal: {
        width: 220,
        backgroundColor: '#4f2a93',
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginTop: 15,
    },
    botaoFecharModal:{
        height:25,
        width: 25,
        backgroundColor: '#4f2a93',
        borderRadius: 100,
        elevation: 2,
        position:'absolute',
        top: 15,
        right:15,
        alignItems:'center',
        justifyContent:'center'
    },
});