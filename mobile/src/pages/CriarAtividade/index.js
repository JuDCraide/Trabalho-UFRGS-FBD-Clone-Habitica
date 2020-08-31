import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

export default function CriarAtividades() {

    function retornar() {
    }
    function criar() {

    }
    const [focus, setFocus] = useState(false);
    const [focus2, setFocus2] = useState(false);

    const [dificuldade, setDificuldade] = useState(4)

    const [atividade, setAtividade] = useState('');
    const [nomeAtividade, setNomeAtividade] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={retornar}>
                    <Icon name="arrow-back" color="#FFF" size={24} />
                </TouchableOpacity>
                <Text style={styles.titulo}>Criar {atividade}</Text>
                <TouchableOpacity onPress={criar}>
                    <Text style={styles.textoCriar}>CRIAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cabecalho}>
                <TextInput
                    style={focus2 ? styles.inputFocado : styles.input}
                    onFocus={() => setFocus2(true)}
                    onBlur={() => setFocus2(false)}
                    placeholder='Atividade'
                    value={atividade}
                    onChangeText={setAtividade}
                    placeholderTextColor="#4e4a57"
                />
                <TextInput
                    style={focus ? styles.inputFocado : styles.input}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    placeholder='Nome Atividade'
                    value={nomeAtividade}
                    onChangeText={setNomeAtividade}
                    placeholderTextColor="#4e4a57"
                />
            </View>
            <View style={styles.principal}>
                <Text>Dificuldade</Text>
                <View style={styles.dificuldades}>
                    <TouchableOpacity style={styles.dificuldade} onPress={() => setDificuldade(1)}>
                        <View style={dificuldade == 1 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}></View>
                        <Text style={dificuldade == 1 ? styles.dificuldadeTextoAtivo : styles.dificuldadeTexto}>Trivial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dificuldade} onPress={() => setDificuldade(2)}>
                        <View style={dificuldade == 2 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}></View>
                        <Text style={dificuldade == 2 ? styles.dificuldadeTextoAtivo : styles.dificuldadeTexto}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dificuldade} onPress={() => setDificuldade(3)}>
                        <View style={dificuldade == 3 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}></View>
                        <Text style={dificuldade == 3 ? styles.dificuldadeTextoAtivo : styles.dificuldadeTexto}>Médio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dificuldade} onPress={() => setDificuldade(4)}>
                        <View style={dificuldade == 4 ? styles.dificuldadeImgAtivo : styles.dificuldadeImg}></View>
                        <Text style={dificuldade == 4 ? styles.dificuldadeTextoAtivo : styles.dificuldadeTexto}>Difícil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}