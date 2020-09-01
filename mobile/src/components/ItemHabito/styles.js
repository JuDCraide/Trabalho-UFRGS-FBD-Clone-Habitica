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
        backgroundColor: "#ffbe5d",
        height: "100%",
        width: 50,
        borderRightColor: "#E1E0E3",
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    desativado: {
        backgroundColor: "#f9f9f9",
        height: "100%",
        width: 50,
        borderLeftColor: "#E1E0E3",
        borderLeftWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circuloPreenchido: {
        backgroundColor: "#ffa624",
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
    atividade: {
        flex: 1,
        paddingLeft: 15,
        justifyContent: 'center',
    },
    itemAtivo: {
        color: "#FFF",
    },
    itemInativo: {
        color: "#E1E0E3",
    },
    titulo:{
        fontSize: 16,
        color: '#4e4a57',
    },
});