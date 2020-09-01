import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Login({ navigation }) {

    const [login, setLogin] = useState();
    const [nome, setNome] = useState();
    const [classe, setClasse] = useState();

    function handleLogin() {
        Drawer.openDrawer();
    }

    function handleRegister() {
        navigation.navigate('Cadastro');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.img}
                source={logoImg}
            />
            <TextInput
                style={styles.input}
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
                autoCorrect={false}
                placeholderTextColor='#D5C8FF'
            />
            <TextInput
                style={styles.input}
                placeholder='Login'
                value={login}
                onChangeText={setLogin}
                autoCorrect={false}
                placeholderTextColor='#D5C8FF'
            />
            {/* ?????? */}
             <TextInput
                style={styles.input}
                placeholder='Classe'
                value={classe}
                onChangeText={setClasse}
                autoCorrect={false}
                placeholderTextColor='#D5C8FF'
            />

            <RectButton style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>
                    CADASTRAR
            	</Text>
            </RectButton>

        </SafeAreaView>
    );
}