import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 110,
        minWidth: '22%',
        backgroundColor: '#eae9eb',
        borderRadius: 5,
        marginBottom:10,
    },
    imagem: {
        height:'80%',
        width:'80%',
        //backgroundColor: '#fff',
        borderRadius: 5,
    },
    containerPreco: {
        height: 30,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#e5e4e7'
    },
    text: {
        color: '#ee9109',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});