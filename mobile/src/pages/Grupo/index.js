import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import IntegranteGrupo from '../../components/IntegranteGrupo'

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function Grupo(props) {

	const monsterHealth = 100;
	const totalDamage = 45;
	const temGrupo = true;
	const ehLider = true;

	const [adicionarMembro, setAdicionarMembro] = useState(false);
	const [sairGrupo, setSairGrupo] = useState(false);
	const [novoMembro, setNovoMembro] = useState(false);

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
						<View style={styles.adicionarMembro}>
							<Text style={styles.subtitulo}>Membros</Text>
							{
								ehLider &&
								<TouchableOpacity onPress={() => setAdicionarMembro(true)}>
									<Icon
										style={{ marginBottom: 15 }}
										name="person-add"
										size={24}
										color="#a5a1ac"
									/>
								</TouchableOpacity>
							}
						</View>
						<IntegranteGrupo lider={true} />
						<IntegranteGrupo lider={false} />

						<View style={styles.divisor} />
						<TouchableOpacity style={styles.botaoSair} onPress={() => setSairGrupo(true)}>
							<Text style={{ color: "#FFF" }}>Sair do Grupo</Text>
						</TouchableOpacity>
					</View>
				</> : <></>
			}</ScrollView>

			<Modal
				animationType="fade"
				transparent={true}
				visible={adicionarMembro}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>

						<TouchableOpacity
							style={styles.botaoFecharModal}
							onPress={() => setAdicionarMembro(!adicionarMembro)}
						>
							<Icon name='close' size={20} style={styles.textStyle} />
						</TouchableOpacity>

						<Text style={styles.subtitulo}>Adicionar Membro</Text>

						<TextInput
							style={styles.input}
							placeholder='Escreva o nome do usuario'
							value={novoMembro}
							onChangeText={setNovoMembro}
						/>

						<TouchableOpacity
							style={{ ...styles.botaoModal }}
							onPress={() => setAdicionarMembro(!adicionarMembro)}
						>
							<Text style={styles.textStyle}>Adicionar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			<Modal
				animationType="fade"
				transparent={true}
				visible={sairGrupo}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>

						<TouchableOpacity
							style={styles.botaoFecharModal}
							onPress={() => setSairGrupo(!sairGrupo)}
						>
							<Icon name='close' size={20} style={styles.textStyle} />
						</TouchableOpacity>

						<Text style={styles.subtitulo}>Sair do Grupo</Text>

						<TouchableOpacity
							style={{ ...styles.botaoModal }}
							onPress={() => setSairGrupo(!sairGrupo)}
						>
							<Text style={styles.textStyle}>Sair</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

		</SafeAreaView>
	);
}