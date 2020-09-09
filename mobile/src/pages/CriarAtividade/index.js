import React, { useState, useEffect } from 'react';
import { View, Text, Picker, TouchableOpacity, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import triviaImgWhite from '../../assets/difficulty-trivial-white.png';
import normalImgWhite from '../../assets/difficulty-normal-white.png';
import mediumImgWhite from '../../assets/difficulty-medium-white.png';
import hardImgWhite from '../../assets/difficulty-hard-white.png';
import triviaImgGrey from '../../assets/difficulty-trivial-grey.png';
import normalImgGrey from '../../assets/difficulty-normal-grey.png';
import mediumImgGrey from '../../assets/difficulty-medium-grey.png';
import hardImgGrey from '../../assets/difficulty-hard-grey.png';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

import api from '../../utils/api'
import { getId } from '../../utils/authentication';

export default function CriarAtividades(props) {

	const [dificuldade, setDificuldade] = useState(4)

	const [atividade, setAtividade] = useState('Habito');
	const [nomeAtividade, setNomeAtividade] = useState('');
	const [popUpDeletar, setPopUpDeletar] = useState(false);
	const [dia1, setDia1] = useState(true);
	const [dia2, setDia2] = useState(true);
	const [dia3, setDia3] = useState(true);
	const [dia4, setDia4] = useState(true);
	const [dia5, setDia5] = useState(true);
	const [dia6, setDia6] = useState(true);
	const [dia7, setDia7] = useState(true);
	const [positivo, setPositivo] = useState(true);


	function retornar() {
		props.navigation.navigate("Atividades", {atualiza: true});
	}

	async function criar() {
		let id = await getId();
		switch (atividade) {
			case "Habito":
				try {
					const response = await api.post("/habito",
						{
							nome: nomeAtividade,
							dificuldade: dificuldade,
							id_recompensa: null,
							id_usuario: id,
							eh_positivo: positivo,
						});

				} catch (err) {

					console.log(err);
				}
				break;
			case "Rotina":
				let dias = (Number(dia1) + "" + Number(dia2) + "" + Number(dia3) + "" + Number(dia4) + "" + Number(dia5) + "" + Number(dia6) + "" + Number(dia7))
				try {
					const response = await api.post("/rotina",
						{
							nome: nomeAtividade,
							dificuldade: dificuldade,
							id_recompensa: null,
							id_usuario: id,
							dias_da_semana: dias,
						});

				} catch (err) {

					console.log(err);
				}
				break;
			case "Tarefa":
				try {
					const response = await api.post("/tarefa",
						{
							nome: nomeAtividade,
							dificuldade: dificuldade,
							id_recompensa: null,
							id_usuario: id,
							data_entrega: data,
						});

				} catch (err) {

					console.log(err);
				}
				break;
		}
		retornar();
	}

	const [focus, setFocus] = useState(false);

	const [data, setData] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={retornar}>
					<Icon name="arrow-back" color="#FFF" size={24} />
				</TouchableOpacity>
				<Text style={styles.titulo}>
					Criar {atividade}
				</Text>

				<TouchableOpacity onPress={criar}>
					<Text style={styles.textoCriar}>CRIAR</Text>
				</TouchableOpacity>

			</View>
			<View style={styles.cabecalho}>
				<Picker
					selectedValue={atividade}
					//placeholder='Atividade'
					//placeholderTextColor="#4e4a57"
					style={{
						height: 60,
						backgroundColor: '#FFFFFF80',
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
						marginBottom: 8,
						paddingHorizontal: 24,
						fontSize: 16,
						width: '100%'
					}}
					onValueChange={(itemValue, itemIndex) => setAtividade(itemValue)}
				>
					<Picker.Item label="Hábito" value="Habito" />
					<Picker.Item label="Rotina" value="Rotina" />
					<Picker.Item label="Tarefa" value="Tarefa" />
				</Picker>

				<TextInput
					style={focus ? styles.inputFocado : styles.input}
					onFocus={() => setFocus(true)}
					onEndEditing={() => setFocus(false)}
					placeholder='Nome Atividade'
					value={nomeAtividade}
					onChangeText={setNomeAtividade}
					placeholderTextColor="#4e4a57"
				/>
			</View>
			<View style={styles.principal}>
				<Text style={styles.subtitulo}>Dificuldade</Text>
				<View style={styles.areaSelecao}>
					<TouchableOpacity style={styles.itensSelecao} onPress={() => setDificuldade(1)}>
						<View style={dificuldade == 1 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}>
							<Image source={dificuldade == 1 ? triviaImgWhite : triviaImgGrey} />
						</View>
						<Text style={dificuldade == 1 ? styles.textoOpcaoAtiva : styles.textoOpcao}>Trivial</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.itensSelecao} onPress={() => setDificuldade(2)}>
						<View style={dificuldade == 2 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}>
							<Image source={dificuldade == 2 ? normalImgWhite : normalImgGrey} />
						</View>
						<Text style={dificuldade == 2 ? styles.textoOpcaoAtiva : styles.textoOpcao}>Fácil</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.itensSelecao} onPress={() => setDificuldade(3)}>
						<View style={dificuldade == 3 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}>
							<Image source={dificuldade == 3 ? mediumImgWhite : mediumImgGrey} />
						</View>
						<Text style={dificuldade == 3 ? styles.textoOpcaoAtiva : styles.textoOpcao}>Médio</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.itensSelecao} onPress={() => setDificuldade(4)}>
						<View style={dificuldade == 4 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}>
							<Image source={dificuldade == 4 ? hardImgWhite : hardImgGrey} />
						</View>
						<Text style={dificuldade == 4 ? styles.textoOpcaoAtiva : styles.textoOpcao}>Difícil</Text>
					</TouchableOpacity>
				</View>
				{
					atividade === 'Tarefa' ? (
						<>
							<Text style={styles.subtitulo}>Conclusão</Text>
							<View style={{ ...styles.areaSelecao, justifyContent: 'space-evenly' }}>
								<TextInput // date picker
									//style={focus ? styles.inputFocado : styles.input}
									//onFocus={() => setFocus(true)}
									//onEndEditing={() => setFocus(false)}
									//value={nomeAtividade}
									//onChangeText={setNomeAtividade}
									placeholder='Data de conclusão'
									onChangeText={text => setData(text)}
									placeholderTextColor="#4e4a57"
									style={styles.inputData}
								/>
							</View>

						</>
					) : atividade === 'Rotina' ? (
						<>
							<Text style={styles.subtitulo}>Repetição</Text>
							<View style={{ ...styles.areaSelecao, height: 50 }}>
								<TouchableOpacity style={styles.itensSelecao} onPress={() => setDia1(!dia1)}>
									<View style={dia1 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={dia1 ? styles.itemAtivo : styles.itemInativo}>S</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao} onPress={() => setDia2(!dia2)}>
									<View style={dia2 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={dia2 ? styles.itemAtivo : styles.itemInativo}>T</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao} onPress={() => setDia3(!dia3)}>
									<View style={dia3 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={dia3 ? styles.itemAtivo : styles.itemInativo}>Q</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao} onPress={() => setDia4(!dia4)}>
									<View style={dia4 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={dia4 ? styles.itemAtivo : styles.itemInativo}>Q</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao} onPress={() => setDia5(!dia5)}>
									<View style={dia5 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={dia4 ? styles.itemAtivo : styles.itemInativo}>S</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao} onPress={() => setDia6(!dia6)}>
									<View style={dia6 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={dia6 ? styles.itemAtivo : styles.itemInativo}>S</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao} onPress={() => setDia7(!dia7)}>
									<View style={dia7 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={dia7 ? styles.itemAtivo : styles.itemInativo}>D</Text>
									</View>
								</TouchableOpacity>

							</View>
						</>
					) : atividade === 'Habito' && (
						<>
							<Text style={styles.subtitulo}>Valor</Text>
							<View style={{ ...styles.areaSelecao, justifyContent: 'space-evenly' }}>
								<TouchableOpacity style={styles.itensSelecao} onPress={() => !positivo && setPositivo(!positivo)}>
									<View style={positivo ? styles.circuloPreenchido : styles.circuloContornado}>
										<Icon
											style={positivo ? styles.itemAtivo : styles.itemInativo}
											name="add"
											size={24}
										/>
									</View>
									<Text style={positivo ? styles.textoOpcaoAtiva : styles.textoOpcao}>Positivo</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao} onPress={() => positivo && setPositivo(!positivo)}>
									<View style={!positivo ? styles.circuloPreenchido : styles.circuloContornado}>
										<Icon
											style={!positivo ? styles.itemAtivo : styles.itemInativo}
											name="remove"
											size={24}
										/>
									</View>
									<Text style={!1 ? styles.textoOpcaoAtiva : styles.textoOpcao}>Negativo</Text>
								</TouchableOpacity>
							</View>
						</>
					)
				}
			</View>

			<Modal
				animationType="fade"
				transparent={true}
				visible={popUpDeletar}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<TouchableOpacity
							style={styles.botaoFecharModal}
							onPress={() => setPopUpDeletar(!popUpDeletar)}
						>
							<Icon name='close' size={20} style={styles.textStyle} />
						</TouchableOpacity>

						<Text style={styles.subtitulo}>Deletar Atividade</Text>

						<TouchableOpacity
							style={styles.botaoModal}
							onPress={() => setPopUpDeletar(!popUpDeletar)}
						>
							<Text style={styles.textStyle}>Deletar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

		</SafeAreaView >
	)
}