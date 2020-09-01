import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 5,
    },
    imagem: {
        marginRight: 20,
        width: 60,
        height: 60,
        borderRadius:5,
    },
    titulo: {
        fontSize: 14,
        color: '#686274',
        fontWeight: 'bold',
    },
    subtitulo: {
        fontSize: 13,
        color: '#686274',
    },
});