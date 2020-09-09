import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        borderColor: '#FFF'
    },
    principal: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        //borderWidth:2
    },
    mercadorImg: {
        width: '100%',
        height: 110,
        resizeMode: 'cover',
    },
    texto: {
        color: '#686274',
        marginTop: 10,
        lineHeight: 22,
    },
    divisor: {
        width: '110%',
        marginLeft: -20,
        height: 1,
        backgroundColor: "#c3c0c7",
        marginVertical: 15
    },
    itens: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        //borderColor: 'red',
        //borderWidth: 1,
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