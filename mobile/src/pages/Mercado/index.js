import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import ItemMercado from '../../components/ItemMercado';

import mercadoImg from '../../assets/mercado.jpeg';

import styles from './styles';

export default function Mercado(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props} />
            <ScrollView style={{ flex: 1 }}>
                <Image source={mercadoImg} style={styles.mercadorImg} />
                <View style={styles.principal}>

                    <Text>Bem-vindo ao Mercado! Compre itens fantasticos e equipamentos poderosos. Vejas nosso estoque </Text>
                    <View style={styles.divisor} />

                    <View style={styles.itens}>
                        <ItemMercado preco={200} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={200} img={'https://avatars3.githubusercontent.com/u/47929434?s=460&u=1a37672c81408f7857c45a36cdcc3c57c00a827c&v=4'} />
                        <ItemMercado preco={0} img={'https://scontent.fcxj11-1.fna.fbcdn.net/v/t1.0-9/31944315_2032828603413598_3681826792844296192_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=7p-oNH_rp7gAX_-fAd4&_nc_ht=scontent.fcxj11-1.fna&oh=8b9bf84af22d23a58ec3370198872ec4&oe=5F72E32F'} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}