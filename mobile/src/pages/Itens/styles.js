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
});