import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    header:{
        backgroundColor: "#4f2a93",
        height: 60,
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    headerLinha:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center' 
    },
    botaoSair:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    categoria: {
        backgroundColor: "#432879",
        height: 25,
        paddingLeft: 15,
        justifyContent: 'center'
    },
    botaoExcluir:{
        backgroundColor: "#ff6165",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        bottom:0,
    },

    //modal excluir
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
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});