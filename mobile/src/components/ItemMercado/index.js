import React, { useState, useEffect } from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';

import styles from './styles';
import moedaImg from '../../assets/gold.png';

export default function ItemMercado({ id,preco, img, comprar }) {

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagem} source={{ uri: "http://192.168.0.2:3333/"+img }} />
            </View>
            <TouchableOpacity style={styles.containerPreco} onPress={() => comprar(preco,id)}>
                <Text style={styles.text}>
                    <Image style={styles.iconeImagem} source={moedaImg} /> {preco}
                    </Text>
            </TouchableOpacity>
        </View>
    );
}