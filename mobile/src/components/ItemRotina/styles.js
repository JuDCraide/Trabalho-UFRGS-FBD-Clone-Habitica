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
    ativado: {
        backgroundColor: "#50b5e9",
        height: "100%",
        width: 50,
        borderRightColor: "#E1E0E3",
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    desativado: {
        backgroundColor: "#c3c0c7",
        height: "100%",
        width: 50,
        borderLeftColor: "#E1E0E3",
        borderLeftWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkAtivo: {
        backgroundColor: "#a9dcf6",
        width: 30,
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkInativo: {
        backgroundColor: "#e3e0e3",
        width: 30,
        height: 30,
        borderRadius: 5,
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
});