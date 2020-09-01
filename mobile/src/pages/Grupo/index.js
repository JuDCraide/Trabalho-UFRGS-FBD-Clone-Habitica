import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import IntegranteGrupo from '../../components/IntegranteGrupo'

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function Grupo(props) {

	const monsterHealth = 100;
	const totalDamage = 45;
	const temGrupo = true;

	return (
		<SafeAreaView style={styles.container}>
			<Header titulo={props.route.name} {...props} />

			<ScrollView style={{ flex: 1 }}>{
				temGrupo ? <>
					<View style={styles.principal}>
						<Text style={styles.nomeGrupo}>Nome do Grupo</Text>

						<View style={styles.divisor} />
						<Text style={styles.subtitulo}>Missão</Text>
						<TouchableOpacity style={styles.nomeMissao}>
							<Text>Nome da missão</Text>
							<Icon
								//style={{alignSelf:'flex-end'}}
								name="keyboard-arrow-right"
								size={24}
								color="#878190"
							/>
						</TouchableOpacity>
						<View style={styles.imgMissao}>

						</View>

						<View style={styles.progressoMissao}>
							<View style={{ flexDirection: 'row' }}>
								<View style={styles.progressoMissãoTopoEsquerdo} />
								<View style={styles.progressoMissãoTopoMeio} />
								<View style={styles.progressoMissãoTopoDireito} />
							</View>
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<View style={styles.progressoMissãoCentroEsquerdo} />

								<View style={styles.progressoMissãoCentroMeio}>
									<Text>Nome do Monstro</Text>
									<View style={styles.porcentagem}>
										<View style={{ ...styles.porcentagem, backgroundColor: "#ff6165", width: `${totalDamage}%` }}></View>
									</View>
									<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
										<Text>{totalDamage}/{monsterHealth}</Text>
										<Text>Dano</Text>
									</View>
								</View>

								<View style={styles.progressoMissãoCentroDireito} />
							</View>
							<View style={{ flexDirection: 'row' }}>
								<View style={styles.progressoMissãoBaixoEsquerdo} />
								<View style={styles.progressoMissãoBaixoMeio} />
								<View style={styles.progressoMissãoBaixoDireito} />
							</View>
						</View>

						<View style={styles.divisor} />
						<Text style={styles.subtitulo}>Membros</Text>
						<IntegranteGrupo lider={true} />
						<IntegranteGrupo lider={false} />

						<View style={styles.divisor} />
						<TouchableOpacity style={styles.botaoSair}>
							<Text style={{ color: "#FFF" }}>Sair do Grupo</Text>
						</TouchableOpacity>
					</View>
				</> : <></>
			}</ScrollView>
		</SafeAreaView>
	);
}