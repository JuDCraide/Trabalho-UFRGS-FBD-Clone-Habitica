import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import ItemEquipado from '../../components/ItemEquipado';

import styles from './styles';

export default function Itens(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />
            <View  style={styles.containerConteudo}>
                <Text>Equipados</Text>
                <View style={styles.equipados}>
                    <ItemEquipado imagem={true} />
                    <ItemEquipado imagem={false} />
                    <ItemEquipado imagem={false} />
                    <ItemEquipado imagem={false} />
                </View>
                <Text>Arsenal completo</Text>
                <View>
                    { //scroll view
                        //<Item nome={} imagem={} />
                    }
                </View>
            </View>
        </SafeAreaView>
    );
}