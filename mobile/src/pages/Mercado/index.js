import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import ItemMercado from '../../components/ItemMercado';

import mercadoImg from '../../assets/mercado.jpeg';

import styles from './styles';

export default function Mercado(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />
            <Image source={mercadoImg} style={styles.mercadorImg} />
            <View style={styles.principal}>
                
                <Text>Bem-vindo ao Mercado! Compre itens fantasticos e equipamentos poderosos. Vejas nosso estoque </Text>
                <View style={styles.divisor} />
                
                <View style={styles.itens}>
                    <ItemMercado preco={22} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <ItemMercado preco={22} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <ItemMercado preco={22} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <ItemMercado preco={22} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <ItemMercado preco={22} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <ItemMercado preco={22} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <ItemMercado preco={22} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                    <ItemMercado preco={22} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                </View>
            </View>
        </SafeAreaView>
    );
}