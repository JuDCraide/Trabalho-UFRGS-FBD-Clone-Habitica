import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: "#FFF",
        flexDirection: 'row',
        borderBottomColor: "#E1E0E3",
        borderBottomWidth: 1,
    },
    ativo: {
        backgroundColor: "#ffbe5d",
        height: "100%",
        width: 50,
        borderRightColor: "#E1E0E3",
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    vencido: {
        backgroundColor: "#ff944c",
        height: "100%",
        width: 50,
        borderLeftColor: "#E1E0E3",
        borderLeftWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    completo: {
        backgroundColor: "#c3c0c7",
        height: "100%",
        width: 50,
        borderLeftColor: "#E1E0E3",
        borderLeftWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkAtivo: {
        backgroundColor: "#fedead",
        width: 30,
        height: 30,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkVencido: {
        backgroundColor: "#ffc8a7",
        width: 30,
        height: 30,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkCompleto: {
        backgroundColor: "#e3e0e3",
        width: 30,
        height: 30,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    atividade: {
        flex: 1,
        paddingLeft: 15,
        justifyContent: 'center',
    },
    titulo:{
        fontSize: 16,
        color: '#4e4a57',
    },
    data:{
        fontSize: 14,
        color: '#c3c0c7',
    }
});