import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import ItemHabito from '../../components/ItemHabito';
import ItemRotina from '../../components/ItemRotina';
import ItemTarefa from '../../components/ItemTarefa';

import avatarImg from '../../assets/avatar.png';
import styles from './styles';

export default function Atividades(props) {

    const health = 45;
    const xp = (570 * 100) / 770;
    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props}/>
            <View style={styles.usuario}>
                <View style={{ ...styles.linha, height: 100 }}>
                    <Image source={avatarImg} style={styles.img} />
                    <View style={styles.estatisticas}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.porcentagem}>
                                <View style={{ ...styles.porcentagem, backgroundColor: "#ff6165", width: `${health}%` }}></View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textos}>45/100</Text>
                                <Text style={styles.textos}>Saúde</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.porcentagem}>
                                <View style={{ ...styles.porcentagem, backgroundColor: "#ffbe5d", width: `${xp}%` }}></View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textos}>570/770</Text>
                                <Text style={styles.textos}>Experiência</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.textos}>Lvl 100 Guerreiro</Text>
                    <Text style={styles.dinheiro}>25 Dinheiro</Text>
                </View>
            </View>
            <View style={styles.container}>
                <ItemHabito nome='Arrumar a cama'/>
                <ItemRotina nome='Banho'/>
                <ItemTarefa nome='Trabalho FDB' data="29/08/2020"/>
            </View>
        </SafeAreaView>
    );
}