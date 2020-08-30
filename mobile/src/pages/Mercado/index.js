import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';

import mercadoImg from '../../assets/mercado.jpeg';

import styles from './styles';

export default function Mercado(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />
            <Image source={mercadoImg} style={styles.mercadorImg} />
            <Text>Bem-vindo ao Mercado! Compre itens fantasticos e equipamentos poderosos. Venha ver nosso estoque </Text>
            <View style={{ width: '100%', height: 1, backgroundColor: "#878190" }}></View>
            <View style={styles.itens}>
                {
                    //<ItemMercado preco={} img={}/>
                }
            </View>
        </SafeAreaView>
    );
}