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
        height:'100%',
        flex:1,
        paddingLeft: 20,
        justifyContent: 'space-around',
        
    },
    dinheiro: {
        color: "#ffbe5d",
    },
    porcentagem: {
        height: 8,
        backgroundColor: "#1a181d88",
        width: '100%',
        borderRadius: 100
    }
});