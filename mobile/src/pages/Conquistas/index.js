import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import Header from '../../components/Header';
import Conquista from '../../components/Conquista';

import styles from './styles';


export default function Conquistas(props) {

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />
            <ScrollView style={{ flex: 1 }}>
                <Text style={styles.subtitulo}>Conquistadas</Text>
                <Conquista nome='Conquista' descricao=' Descrição Descrição Descrição' conquistada />
                <Conquista nome='Conquista' descricao=' Descrição Descrição Descrição' conquistada />
                <Conquista nome='Conquista' descricao=' Descrição Descrição Descrição' conquistada />

                <View style={styles.divisor} />
                <Text style={styles.subtitulo}>Não obtidas</Text>
                <Conquista nome='Conquista' descricao=' Descrição Descrição Descrição' />
                <Conquista nome='Conquista' descricao=' Descrição Descrição Descrição' />
                <Conquista nome='Conquista' descricao=' Descrição Descrição Descrição' />
                <Conquista nome='Conquista' descricao=' Descrição Descrição Descrição' />
                <Conquista nome='Conquista' descricao=' Descrição Descrição Descrição' />
                <Conquista nome='Conquista' descricao=' Descrição Descrição Descrição' />
            </ScrollView>
        </SafeAreaView>
    );
}