import React, { useState, useEffect } from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';

import styles from './styles';

export default function ItemMercado({ preco, img }) {

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagem} source={{ uri: img }} />
            </View>
            <TouchableOpacity style={styles.containerPreco}>
                <Text style={styles.text}>O {preco}</Text>
            </TouchableOpacity>
        </View>
    );
}