import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import Conquista from '../../components/Conquista';

import styles from './styles';
import api from '../../utils/api';
import { getId } from '../../utils/authentication';

export default function Conquistas(props) {

    const [consquistas, setConsquistas] = useState([]);
    const [consquistasRestantes, setConsquistasRestantes] = useState([]);

    useEffect(() => {
        async function loadConquistasRestantes() {
            let id = await getId();

            try {
                const response = await api.get(`/usuario/${id}/conquistas-restantes`);
                setConsquistasRestantes(response.data);
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }

        async function loadConquistas() {
            let id = await getId();

            try {
                const response = await api.get(`/usuario/${id}/conquistas`);
                setConsquistas(response.data);
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        loadConquistas();
        loadConquistasRestantes();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />
            <ScrollView style={{ flex: 1 }}>
                <Text style={styles.subtitulo}>Conquistadas</Text>
                {
                    consquistas.map(conquista => (
                        <Conquista nome={conquista.nome} descricao={conquista.descricao} conquistada />    
                    ))
                }
                <View style={styles.divisor} />
                <Text style={styles.subtitulo}>Não obtidas</Text>
                {
                    consquistasRestantes.map(conquista => (
                        <Conquista nome={conquista.nome} descricao={conquista.descricao} />    
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}