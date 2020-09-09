import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import ItemHabito from '../../components/ItemHabito';
import ItemRotina from '../../components/ItemRotina';
import ItemTarefa from '../../components/ItemTarefa';

import avatarImg from '../../assets/avatar.png';
import moedaImg from '../../assets/gold.png';
import saudeImg from '../../assets/health.png';
import xpImg from '../../assets/experience.png';
import styles from './styles';

import api from '../../utils/api'
import { getId } from '../../utils/authentication';
import { calcularNivel, calcularXpProximoNivel } from '../../utils/utils'

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

    const [atualiza, setAtualiza] = useState(false)

    const atualizar = props.route.params.atualiza ?? false; 


    function dataChanged() {
        setAtualiza(!atualiza);
    }

    useEffect(() => {

        async function loadDados() {
            let id = await getId();
            try {
                const response = await api.get(`/usuario/${id}`);
                let dados = response.data;
                setHealth(dados.saude);
                setXp(dados.experiencia)
                setNivel(calcularNivel(dados.experiencia))
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

                const res = await api.get(`/usuario/${id}/habito/count`)
                //console.log(response.data, res.data);
                let habitosResponse = response.data;
                habitosResponse.forEach(habito => {
                    habito.repeticao = 0;
                    res.data.forEach(repeticao => {
                        if (habito.id === repeticao.id) {
                            habito.repeticao = repeticao.repeticoes;
                        }
                    });
                });
                //console.log(habitosResponse);
                setHabitos(habitosResponse);

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
    }, [atualiza, atualizar]);

    function editar(id, tipo, item) {
        props.navigation.navigate("Editar Atividades", {
            id: id,
            tipo: tipo,
            item: item,
        })
    }

    const xpbar = (xp) / calcularXpProximoNivel(xp) * 100;
    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />
            <View style={styles.usuario}>
                <View style={{ ...styles.linha, height: 100 }}>
                    <Image source={avatarImg} style={styles.img} />
                    <View style={styles.estatisticas}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.iconeImagem} source={saudeImg} />
                            <View style={{ flex: 1 }}>
                                <View style={styles.porcentagem}>
                                    <View style={{ ...styles.porcentagem, backgroundColor: "#ff6165", width: `${health}%` }}></View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.textos}>{health}/100</Text>
                                    <Text style={styles.textos}>Saúde</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.iconeImagem} source={xpImg} />
                            <View style={{ flex: 1 }}>
                                <View style={styles.porcentagem}>
                                    <View style={{ ...styles.porcentagem, backgroundColor: "#ffbe5d", width: `${xpbar}%` }}></View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.textos}>{xp}/{calcularXpProximoNivel(xp)}</Text>
                                    <Text style={styles.textos}>Experiência</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.textos}>Lvl {nivel} {classe}</Text>
                    <Text style={styles.dinheiro}>
                        <Image style={styles.iconeImagem} source={moedaImg} />  {moedas}
                    </Text>
                </View>
            </View>
            <ScrollView style={styles.container}>
                {habitos.map((habito) => {
                    return (<ItemHabito item={habito} id={habito.atividade} key={habito.id} nome={habito.nome} positivo={habito.eh_positivo} atualiza={dataChanged} editar={editar} />)

                })}
                {rotinas.map((rotina) => {
                    return (<ItemRotina item={rotina} id={rotina.atividade} key={rotina.id} nome={rotina.nome} realizado={rotina.feita} atualiza={dataChanged} editar={editar} />)
                })}
                {tarefas.map((tarefa) => {
                    return (<ItemTarefa item={tarefa} id={tarefa.atividade} key={tarefa.id} nome={tarefa.nome} data={tarefa.data_entrega} completo={tarefa.feita} atualiza={dataChanged} editar={editar} />)
                })}
            </ScrollView>
            <TouchableOpacity style={styles.adicionarAtividade} onPress={() => props.navigation.navigate("Criar Atividades")}>
                <Icon
                    name="close"
                    size={36}
                    color='#FFF'
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}