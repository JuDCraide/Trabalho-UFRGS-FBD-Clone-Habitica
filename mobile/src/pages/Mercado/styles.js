import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        borderColor: '#FFF'
    },
    principal: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
    },
    mercadorImg: {
        width: '100%',
        height: 110,
        resizeMode: 'cover',
    },
    divisor: {
        width: '110%',
        marginLeft: -20,
        height: 1,
        backgroundColor: "#a5a1ac",
        marginVertical:15
    },

    itens: {
        //display grid?
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
        //borderColor: 'red',
        //borderWidth: 1,
    }
});