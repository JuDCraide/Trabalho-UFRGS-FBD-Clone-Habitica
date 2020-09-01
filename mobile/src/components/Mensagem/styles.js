import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        maxWidth: '80%',
        minWidth: '60%',
        backgroundColor: "#FFF",
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    cabecalho: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nome: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#4e4a57',
    },
    data: {
        fontSize: 13,
        color: '#878190',
    },
    mensagem: {
        fontSize: 16,
        color: '#1a181d',
        paddingVertical: 10,
    },
});