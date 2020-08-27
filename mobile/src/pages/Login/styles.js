import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-evenly",
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#4F2A93',
    },
    img: {
        width: 300,
        height: 100,
    },
    input: {
        height: 50,
        //backgroundColor: '#FFF',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#D5C8FF',
        borderBottomWidth: 1
    },
    inputText: {
        flex: 1,
        fontSize: 18,
        color: '#fff',
    },
    button: {
        backgroundColor: '#432879',
        height: 60,
        flexDirection: 'row',
        borderRadius: 50,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
    }
});
