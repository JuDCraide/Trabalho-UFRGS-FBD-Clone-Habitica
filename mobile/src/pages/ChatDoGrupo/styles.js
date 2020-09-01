import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    mensagem: {
        height: 60,
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        justifyContent:'space-between'
    },
    input: {
        //width: '85%',
        flex:1,
        backgroundColor: '#fff',
        borderColor: '#c3c0c7',
        borderWidth: 1,
        borderRadius: 5,
        color: '#1a181d',
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 12,
        marginRight:10,
    },
});