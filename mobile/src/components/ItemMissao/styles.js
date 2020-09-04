import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        maxWidth:220,
        minWidth:220,
        minHeight: 60,
        width: '100%',
        justifyContent:'space-evenly',
        paddingVertical: 5,
        borderBottomColor: '#c3c0c7',
        borderBottomWidth:1,
    },
    titulo: {
        fontSize: 14,
        color: '#686274',
        fontWeight: 'bold',
        textTransform:'capitalize',
    },
    subtitulo: {
        fontSize: 13,
        color: '#686274',
    },
    finalizada:{
        fontSize: 14,
        color: '#ff6165',
        fontWeight: 'bold',
        textTransform:'uppercase',
    },
    tituloF: {
        fontSize: 14,
        color: '#a5a1ac',
        fontWeight: 'bold',
        textTransform:'capitalize',
    },
    subtituloF: {
        fontSize: 13,
        color: '#a5a1ac',
    },
});