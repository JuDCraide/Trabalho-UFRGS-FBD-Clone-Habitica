import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';

import api from '../../utils/api'
import { salvarId, getId } from '../../utils/authentication'
import styles from './styles';


export default function Login({ navigation }) {

	const [login, setLogin] = useState('')

	useEffect(() => {

		if (getId() !== null) {
			navigation.navigate('Home');
		}
	}, []);


	async function handleLogin() {
		try {
			const response = await api.post("/login",
				{
					"login": login
				});
			salvarId(response.data.id.toString());
			console.log(response.data);
			navigation.navigate('Home');

		} catch (err) {

			console.log(err);
		}

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
			<View style={styles.input}>
				<TextInput
					style={styles.inputText}
					placeholder='Login'
					value={login}
					onChangeText={text => setLogin(text)}
					autoCorrect={false}
					placeholderTextColor='#D5C8FF'
				/>
				<View >
					<Icon name="person" color="#D5C8FF" size={24} />
				</View>
			</View>

			<RectButton style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>
					ENTRAR
            	</Text>
			</RectButton>
			<TouchableOpacity onPress={handleRegister}>
				<Text style={styles.buttonText}>
					Criar conta
            	</Text>
			</TouchableOpacity>

		</SafeAreaView>
	);
}