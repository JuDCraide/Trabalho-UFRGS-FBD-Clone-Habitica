import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { MaterialIcons as Icon } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png'

import styles from './styles';

export default function Login() {

	const [login, setLogin] = useState()

	function handleLogin(){
		Drawer.openDrawer();
	}

	return (
		<View style={styles.container}>
			<Image
				style={styles.img}
				source={logoImg}
			/>
			<View style={styles.input}>
				<TextInput
					style={styles.inputText}
					placeholder='Login'
					value={login}
					onChangeText={setLogin}
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

		</View>
	);
}