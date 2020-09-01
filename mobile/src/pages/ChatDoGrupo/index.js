import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import Mensagem from '../../components/Mensagem'

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function ChatDoGrupo(props) {

    const [mensagemAtual, setMensagemAtual] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />

            <ScrollView style={{ flex: 1, backgroundColor:"#edecee" }}>
                <Mensagem nome='jú' mensagem='oi léo S2' datahora='31/8/2020 15:34' eu/>
                <Mensagem nome='léo' mensagem='oii jú te amoo' datahora='31/8/2020 16:59' login='@lrgobatto'/>
                <Mensagem nome='jú' mensagem='oi léo S2' datahora='31/8/2020 15:34' eu/>
                <Mensagem nome='léo' mensagem='oii jú te amoo' datahora='31/8/2020 16:59' login='@lrgobatto'/>
                <Mensagem nome='jú' mensagem='oi léo S2' datahora='31/8/2020 15:34' eu/>
                <Mensagem nome='léo' mensagem='oii jú te amoo' datahora='31/8/2020 16:59' login='@lrgobatto'/>
                <Mensagem nome='jú' mensagem='oi léo S2' datahora='31/8/2020 15:34' eu/>
                <Mensagem nome='léo' mensagem='oii jú te amoo' datahora='31/8/2020 16:59' login='@lrgobatto'/>
                <Mensagem nome='jú' mensagem='oi léo S2' datahora='31/8/2020 15:34' eu/>
                <Mensagem nome='léo' mensagem='oii jú te amoo' datahora='31/8/2020 16:59' login='@lrgobatto'/>
                <Mensagem nome='jú' mensagem='oi léo S2' datahora='31/8/2020 15:34' eu/>
                <Mensagem nome='léo' mensagem='oii jú te amoo' datahora='31/8/2020 16:59' login='@lrgobatto'/>
                <Mensagem nome='jú' mensagem='oi léo S2' datahora='31/8/2020 15:34' eu/>
                <Mensagem nome='léo' mensagem='oii jú te amoo' datahora='31/8/2020 16:59' login='@lrgobatto'/>
            </ScrollView>

            <View style={styles.mensagem}>
                <TextInput
                    style={styles.input}
                    placeholder='Escreva sua mensagem'
                    value={mensagemAtual}
                    onChangeText={setMensagemAtual}
                />
                <TouchableOpacity>
                    <Icon name="send" color={mensagemAtual ? "#6132b4" :"#c3c0c7"} size={28} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}