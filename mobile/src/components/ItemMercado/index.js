import React, { useState, useEffect } from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';

import styles from './styles';
import moedaImg from '../../assets/gold.png';

export default function ItemMercado({ preco, img, comprar }) {

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagem} source={{ uri: img }} />
            </View>
            <TouchableOpacity style={styles.containerPreco} onPress={() => comprar(preco)}>
                <Text style={styles.text}>
                    <Image style={styles.iconeImagem} source={moedaImg} /> {preco}
                    </Text>
            </TouchableOpacity>
        </View>
    );
}