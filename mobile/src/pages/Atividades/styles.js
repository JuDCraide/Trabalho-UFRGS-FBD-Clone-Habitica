import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    usuario: {
        backgroundColor: "#36205d",
        height: 150,
        paddingHorizontal: 20,
    },
    img: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: '#925cf3'
    },
    linha: {
        flexDirection: 'row',
        //borderColor: 'red',
        //borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 50,
    },
    textos: {
        color: "#D5C8FF",
    },
    estatisticas: {
        height: '100%',
        flex: 1,
        paddingLeft: 20,
        justifyContent: 'space-around',

    },
    dinheiro: {
        color: "#ffbe5d",
    },
    iconeImagem: {
        height: 18,
        width: 18,
        marginRight: 10,
    },
    porcentagem: {
        height: 8,
        backgroundColor: "#271b3d",
        width: '100%',
        borderRadius: 100
    },
    adicionarAtividade: {
        position: 'absolute',
        bottom: 40,
        right: 30,
        backgroundColor: '#925cf2',
        height: 50,
        width: 50,
        borderRadius: 5,
        transform: [{ rotate: "45deg" }],
        alignItems: 'center',
        justifyContent: 'center',
    },
});