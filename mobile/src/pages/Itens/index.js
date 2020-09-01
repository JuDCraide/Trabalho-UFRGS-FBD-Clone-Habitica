import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import ItemEquipado from '../../components/ItemEquipado';
import Item from '../../components/Item';

import styles from './styles';

export default function Itens(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />
            
            <ScrollView style={styles.containerConteudo}>
                <Text style={styles.subtitulo}>Equipados</Text>
                <View style={styles.equipados}>
                    <ItemEquipado imagem={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <ItemEquipado />
                    <ItemEquipado />
                    <ItemEquipado />
                </View>
                <View style={styles.divisor} />
                <Text style={styles.subtitulo}>Arsenal completo</Text>
                <View>
                    <Item nome='Super Mega Item' poder={1} valorPoder={47} imagem={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <Item nome='Super Mega Item' poder={1} valorPoder={47} imagem={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <Item nome='Super Mega Item' poder={1} valorPoder={47} imagem={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}