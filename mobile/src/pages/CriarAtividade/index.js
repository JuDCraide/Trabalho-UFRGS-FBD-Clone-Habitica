import React, { useState, useEffect } from 'react';
import { View, Text, Picker, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

export default function CriarAtividades({ criacao = false }) {

	function retornar() {
	}
	function criar() {

	}
	function editar() {

	}
	function excluir() {

	}
	const [focus, setFocus] = useState(false);
	//const [focus2, setFocus2] = useState(false);

	const [dificuldade, setDificuldade] = useState(4)

	const [atividade, setAtividade] = useState('Hábito');
	const [nomeAtividade, setNomeAtividade] = useState('');
	const [popUpDeletar, setPopUpDeletar] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={retornar}>
					<Icon name="arrow-back" color="#FFF" size={24} />
				</TouchableOpacity>
				<Text style={styles.titulo}>
					{ criacao ? 'Criar ': 'Editar '}
					 {atividade
				}</Text>
				{criacao ?
					<TouchableOpacity onPress={criar}>
						<Text style={styles.textoCriar}>CRIAR</Text>
					</TouchableOpacity>
					: <>
						<TouchableOpacity onPress={excluir} onPress={() => setPopUpDeletar(true)}>
							<Text style={styles.textoCriar}>DELETAR</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={editar}>
							<Text style={styles.textoCriar}>SALVAR</Text>
						</TouchableOpacity>
					</>
				}
			</View>
			<View style={styles.cabecalho}>
				{/*<TextInput
                    style={focus2 ? styles.inputFocado : styles.input}
                    onFocus={() => setFocus2(true)}
                    onBlur={() => setFocus2(false)}
                    placeholder='Atividade'
                    value={atividade}
                    onChangeText={setAtividade}
                    placeholderTextColor="#4e4a57"
                />*/}
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
					<Picker.Item label="Hábito" value="Hábito" />
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
						<View style={dificuldade == 1 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}></View>
						<Text style={dificuldade == 1 ? styles.textoOpcaoAtiva : styles.textoOpcao}>Trivial</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.itensSelecao} onPress={() => setDificuldade(2)}>
						<View style={dificuldade == 2 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}></View>
						<Text style={dificuldade == 2 ? styles.textoOpcaoAtiva : styles.textoOpcao}>Fácil</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.itensSelecao} onPress={() => setDificuldade(3)}>
						<View style={dificuldade == 3 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}></View>
						<Text style={dificuldade == 3 ? styles.textoOpcaoAtiva : styles.textoOpcao}>Médio</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.itensSelecao} onPress={() => setDificuldade(4)}>
						<View style={dificuldade == 4 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}></View>
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
									placeholderTextColor="#4e4a57"
									style={styles.inputData}
								/>
							</View>

						</>
					) : atividade === 'Rotina' ? (
						<>
							<Text style={styles.subtitulo}>Repetição</Text>
							<View style={{ ...styles.areaSelecao, height: 50 }}>
								<TouchableOpacity style={styles.itensSelecao}>
									<View style={1 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={1 ? styles.itemAtivo : styles.itemInativo}>S</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao}>
									<View style={1 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={1 ? styles.itemAtivo : styles.itemInativo}>T</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao}>
									<View style={1 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={1 ? styles.itemAtivo : styles.itemInativo}>Q</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao}>
									<View style={1 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={1 ? styles.itemAtivo : styles.itemInativo}>Q</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao}>
									<View style={1 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={1 ? styles.itemAtivo : styles.itemInativo}>S</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao}>
									<View style={1 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={1 ? styles.itemAtivo : styles.itemInativo}>S</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao}>
									<View style={1 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Text style={1 ? styles.itemAtivo : styles.itemInativo}>D</Text>
									</View>
								</TouchableOpacity>

							</View>
						</>
					) : atividade === 'Hábito' && (
						<>
							<Text style={styles.subtitulo}>Valor</Text>
							<View style={{ ...styles.areaSelecao, justifyContent: 'space-evenly' }}>
								<TouchableOpacity style={styles.itensSelecao}>
									<View style={1 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Icon
											style={1 ? styles.itemAtivo : styles.itemInativo}
											name="add"
											size={24}
										/>
									</View>
									<Text style={1 ? styles.textoOpcaoAtiva : styles.textoOpcao}>Positivo</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.itensSelecao}>
									<View style={!1 ? styles.circuloPreenchido : styles.circuloContornado}>
										<Icon
											style={!1 ? styles.itemAtivo : styles.itemInativo}
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