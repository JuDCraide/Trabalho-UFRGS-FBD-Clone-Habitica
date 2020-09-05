import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput, Image, Clipboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import IntegranteGrupo from '../../components/IntegranteGrupo'
import ItemMissao from '../../components/ItemMissao'

import semGrupoImg from '../../assets/semGrupo.png';
import xpImg from '../../assets/experience.png';
import moedaImg from '../../assets/gold.png';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';


export default function Grupo(props) {

	const monsterHealth = 100;
	const totalDamage = 45;
	const temGrupo = true;
	const ehLider = true;
	const username = '@Julinha';
	const temMissao = false;

	const [adicionarMembro, setAdicionarMembro] = useState(false);
	const [sairGrupo, setSairGrupo] = useState(false);
	const [criarGrupo, setCriarGrupo] = useState(false);
	const [escolherMissoes, setEscolherMissoes] = useState(false);
	const [escolherMissao, setEscolherMissao] = useState(false);
	const [novoMembro, setNovoMembro] = useState('');
	const [novoGrupo, setNovoGrupo] = useState('');

	const copiarUsername = () => {
		Clipboard.setString(username);
	}

	if (temGrupo) {
		return (
			<SafeAreaView style={styles.container}>

				<Header titulo={props.route.name} {...props} />

				<ScrollView style={{ flex: 1 }}>
					<View style={styles.principal}>
						<Text style={styles.nomeGrupo}>Nome do Grupo</Text>

						<View style={styles.divisor} />
						<Text style={styles.subtitulo}>Missão</Text>
						{temMissao ?
							<>
								<TouchableOpacity style={styles.missao}>
									<View>
										<Text style={styles.nomeMissao}>Nome da missão</Text>
										<Text style={styles.textoSimples}>Detalhes</Text>
									</View>
									<Icon
										style={{ alignSelf: 'center' }}
										name="keyboard-arrow-right"
										size={28}
										color="#c3c0c7"
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
											<Text style={styles.nomeMissao} >Nome do Monstro</Text>
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
							</>
							:
							<TouchableOpacity style={styles.comecarMissao} onPress={() => setEscolherMissoes(true)}>
								<Text style={styles.comecarMissaoTitulo}>Começar nova missão</Text>
							</TouchableOpacity>
						}
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
				</ScrollView>

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

				<Modal
					animationType="fade"
					transparent={true}
					visible={escolherMissoes}
				>
					<View style={{ ...styles.centeredView, minHeight: 450 }}>
						<View style={styles.modalView}>
							<TouchableOpacity
								style={styles.botaoFecharModal}
								onPress={() => setEscolherMissoes(!escolherMissoes)}
							>
								<Icon name='close' size={20} style={styles.textStyle} />
							</TouchableOpacity>

							<ItemMissao nome='Vice Awakens' saude={1000} abrirMissao={() => setEscolherMissao(true)} />
							<ItemMissao nome='Enxame Caveiras da Terra ' saude={300} abrirMissao={() => setEscolherMissao(true)} />
							<ItemMissao finalizada nome='Coelhos de Poeira' saude={100} abrirMissao={() => setEscolherMissao(true)} />

						</View>
					</View>
				</Modal>

				<Modal
					animationType="fade"
					transparent={true}
					visible={escolherMissao}
				>
					<View style={{ ...styles.centeredView, minHeight: 450 }}>
						<View style={styles.modalView}>
							<TouchableOpacity
								style={styles.botaoFecharModal}
								onPress={() => setEscolherMissao(!escolherMissao)}
							>
								<Icon name='close' size={20} style={styles.textStyle} />
							</TouchableOpacity>

							<Text style={styles.subtitulo}>Nome da Missão</Text>
							<View style={{ height: 400,}}>
								<ScrollView>
									<View style={styles.containerSaude}>
										<Text style={{ color: '#fff' }}>Health</Text>
										<Text style={{ color: '#fff', marginLeft: 20 }}>100</Text>
									</View>
									<View style={{ alignItems: 'center'}}>
										<Text style={styles.textoSimples}>Descrição</Text>
										<View style={styles.containerDescricao}>
											<Text style={{...styles.textoSimples, textAlign:'justify'}}>
											Depois de muito esforço, seu grupo descobriu o covil de Vício. O monstro gigantesco olha para o seu grupo com desgosto. Enquanto sombras giram em torno de você, uma voz sussurra em sua cabeça "Mais cidadãos idiotas de Habitica vêm me parar? Fofo. Você teria sido mais sábio em não vir." O assustador titã ergue a cabeça e se prepara para atacar. Essa é sua chance! Dê tudo de si e derrote o Vício de uma vez por todas!
											</Text>
										</View>
									</View>
									<View style={{ alignItems: 'center', marginTop:10 }}>
										<Text style={styles.textoSimples}>Recompensa</Text>
										<View style={styles.containerRecompensa}>
											{/*<Image source={} style={styles.recompensaImg}/>*/}
											<Text style={styles.textoSimples}>Item</Text>
										</View>
										<View style={styles.containerRecompensa}>
											<Image source={xpImg} style={styles.recompensaImg} />
											<Text style={styles.textoSimples}>59 XP</Text>
										</View>
										<View style={styles.containerRecompensa}>
											<Image source={moedaImg} style={styles.recompensaImg} />
											<Text style={styles.textoSimples}>12 Gold</Text>
										</View>
									</View>
								</ScrollView>
							</View>
							<TouchableOpacity
								style={{ ...styles.botaoModal }}
								onPress={() => setSairGrupo(!escolherMissao)}
							>
								<Text style={styles.textStyle}>Iniciar Missão</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>

			<Header titulo={props.route.name} {...props} />

			<Image source={semGrupoImg} style={styles.semGrupoImg} />
			<View style={styles.principalSemGrupo}>
				<Text style={{ ...styles.subtitulo, color: '#4f2a93' }}>
					Jogue Habitica em Grupo
							</Text>
				<Text>
					Participe de missões maravilhosas com amigos ou no seu próprio grupo.
					Lute contra monstros, derrote inimigos e ajude seus amigos a manterem-se motivados.
								</Text>

				<RectButton style={styles.botaoModal}>
					<Text style={styles.textStyle} onPress={() => setCriarGrupo(true)}>
						Crie seu grupo
								</Text>
				</RectButton>

				<Text style={styles.subtitulo}>Deseja entrar em um grupo?</Text>
				<Text>Dê seu username para um amigo que é Líder de um grupo</Text>
				<TouchableOpacity style={styles.botaoCopiar} onPress={copiarUsername}>
					<View style={styles.botaoCopiarLabel}>
						<Text>Seu username é:</Text>
					</View>
					<View style={styles.username}>
						<Text>{username}</Text>
						<Icon name='content-copy' size={20} color="#000" />
					</View>
				</TouchableOpacity>

			</View>

			<Modal
				animationType="fade"
				transparent={true}
				visible={criarGrupo}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>

						<TouchableOpacity
							style={styles.botaoFecharModal}
							onPress={() => setCriarGrupo(!criarGrupo)}
						>
							<Icon name='close' size={20} style={styles.textStyle} />
						</TouchableOpacity>

						<Text style={styles.subtitulo}>Criar Grupo</Text>

						<TextInput
							style={styles.input}
							placeholder='Escreva o nome do grupo'
							value={novoGrupo}
							onChangeText={setNovoGrupo}
						/>

						<TouchableOpacity
							style={{ ...styles.botaoModal }}
							onPress={() => setCriarGrupo(!criarGrupo)}
						>
							<Text style={styles.textStyle}>Criar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

		</SafeAreaView>
	);
}