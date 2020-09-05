import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import Mensagem from '../../components/Mensagem'


import api from '../../utils/api'
import { getId } from '../../utils/authentication';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function ChatDoGrupo(props) {

    const [mensagemAtual, setMensagemAtual] = useState("");
    const [mensagens, setMensagens] = useState([]);
    const [grupoId, setGrupoId] = useState();
    const [id, setId] = useState(0)

    useEffect(() => {

        async function loadIdGrupo() {
            let id = await getId();
            try {
                const response = await api.get(`/usuario/${id}/grupo`);
                setGrupoId(response.data.id_grupo);
                setId(id)
                await loadMensagens(response.data.id_grupo)
            } catch (err) {
                console.log(err);
            }
        }

        async function loadMensagens(idGrupo) {
            try {
                const response = await api.get(`/grupo/${idGrupo}/mensagens`);
                setMensagens(response.data);
            } catch (err) {
                console.log(err);
            }
        }

        loadIdGrupo()

    }, []);


    async function sendMessage() {
        if (mensagemAtual.length > 0) {
            try {
                const response = await api.post(`grupo/${grupoId}/mensagem`, {
                    texto: mensagemAtual,
                    usuario: id,
                    grupo: grupoId
                });
                setMensagemAtual("");
                try {
                    const response = await api.get(`/grupo/${grupoId}/mensagens`);
                    setMensagens(response.data);
                } catch (err) {
                    console.log(err);
                }
            } catch (err) {

                console.log(err);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />

            <ScrollView style={{ flex: 1, backgroundColor: "#edecee" }}>
                {mensagens.map(item => (
                    <Mensagem key={item.id} nome={item.nome ?? "Usuário Excluído"} mensagem={item.texto} datahora={item.data_hora} eu={item.id_usuario == id} login={item.login} />
                ))}

            </ScrollView>

            <View style={styles.mensagem}>
                <TextInput
                    style={styles.input}
                    placeholder='Escreva sua mensagem'
                    value={mensagemAtual}
                    onChangeText={text => setMensagemAtual(text)}
                />
                <TouchableOpacity>
                    <Icon name="send" color={mensagemAtual != "" ? "#6132b4" : "#c3c0c7"} size={28} onPress={sendMessage} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}