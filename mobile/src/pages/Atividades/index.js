import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import ItemHabito from '../../components/ItemHabito';
import ItemRotina from '../../components/ItemRotina';
import ItemTarefa from '../../components/ItemTarefa';

import avatarImg from '../../assets/avatar.png';
import styles from './styles';

import api from '../../utils/api'
import { getId } from '../../utils/authentication';

import { MaterialIcons as Icon } from '@expo/vector-icons';

export default function Atividades(props) {

    const [health, setHealth] = useState(0)
    const [xp, setXp] = useState(0)
    const [nivel, setNivel] = useState(0)
    const [moedas, setMoedas] = useState(0)
    const [classe, setClasse] = useState('');

    const [habitos, setHabitos] = useState([]);
    const [rotinas, setRotinas] = useState([]);
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {

        async function loadDados() {
            let id = await getId();
            try {
                const response = await api.get(`/usuario/${id}`);
                let dados = response.data;
                setHealth(dados.saude);
                setXp(dados.experiencia)
                setNivel(dados.experiencia / 100)
                setMoedas(dados.moedas)
            } catch (err) {
                console.log(err);
            }
        }

        async function loadClasse() {
            let id = await getId();
            try {
                const response = await api.get(`/usuario/${id}/classe`);
                let dados = response.data;
                setClasse(response.data.classe)
            } catch (err) {
                console.log(err);
            }
        }

        async function loadHabitos() {

            let id = await getId();

            try {
                const response = await api.get(`/usuario/${id}/habito`);
                setHabitos(response.data);

            } catch (err) {
                console.log(err);
            }
        }
        
        async function loadRotinas() {

            let id = await getId();

            try {
                const response = await api.get(`/usuario/${id}/rotina`);
                setRotinas(response.data);
            } catch (err) {
                console.log(err);
            }
        }

        async function loadTarefas() {
            let id = await getId();
            try {
                const response = await api.get(`/usuario/${id}/tarefa`);
                setTarefas(response.data);

            } catch (err) {
                console.log(err);
            }
        }

        loadClasse()
        loadDados()
        loadHabitos()
        loadRotinas()
        loadTarefas()
        console.log(habitos,rotinas,tarefas);
    }, []);


    const xpbar = (xp) / 770 * 100;
    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />
            <View style={styles.usuario}>
                <View style={{ ...styles.linha, height: 100 }}>
                    <Image source={avatarImg} style={styles.img} />
                    <View style={styles.estatisticas}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.porcentagem}>
                                <View style={{ ...styles.porcentagem, backgroundColor: "#ff6165", width: `${health}%` }}></View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textos}>{health}/100</Text>
                                <Text style={styles.textos}>Saúde</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.porcentagem}>
                                <View style={{ ...styles.porcentagem, backgroundColor: "#ffbe5d", width: `${xpbar}%` }}></View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textos}>{xp}/770</Text>
                                <Text style={styles.textos}>Experiência</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.textos}>Lvl {nivel} {classe}</Text>
                    <Text style={styles.dinheiro}>{moedas} Dinheiro</Text>
                </View>
            </View>
            <View style={styles.container}>
                {habitos.map((habito) => {
                    return (<ItemHabito key={habito.id} nome={habito.nome} positivo={habito.eh_positivo} />)

                })}
                {rotinas.map((rotina) => {
                    return (<ItemRotina key={rotina.id} nome={rotina.nome} />)
                })}
                {tarefas.map((tarefa) => {
                    return (<ItemTarefa key={tarefa.id} nome={tarefa.nome} data={tarefa.data_entrega} />)
                })}
            </View>
            <TouchableOpacity style={styles.adicionarAtividade}>
                <Icon
                    name="close"
                    size={36}
                    color='#FFF'
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}