import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        height: 70,
        backgroundColor: '#34313a',
        marginRight: 15,
        borderRadius: 5,
    },
    vazio: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 5,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#4e4a57',
        borderRadius: 2,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        color:'#878190',
        fontSize: 12,
        textAlign:'center'
    }
});