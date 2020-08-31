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
    },
    titulo: {
        color: "#FFF",
        fontSize: 20,
        paddingLeft: 30,
        flex: 1,
        fontWeight: 'bold',
    },
    textoCriar: {
        color: "#FFF",
        fontSize: 14,
    },
    input: {
        height: 60,
        backgroundColor: '#FFFFFF80',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
        width: '100%'
    },
    inputFocado: {
        height: 60,
        backgroundColor: '#FFFFFFBF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
    dificuldades: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',

    },
    dificuldade: {
        height: '90%',
        alignItems:'center'
    },
    dificuldadeImg: {
        width:55,
        height: 55,
        backgroundColor: '#e1e0e3',
        borderRadius: 5,
    },
    dificuldadeImgAtivo:{
        width:55,
        height: 55,
        backgroundColor: '#6132b4',
        borderRadius: 5,
    },
    dificuldadeTexto: {
        color:"#686274"
    },
    dificuldadeTextoAtivo: {
        color:"#6132b4"
    },
});