import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function ItemMercado({ preco, img }) {

    return (
        <View style={styles.container}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Image style={styles.imagem} source={{ uri: img }} />
            </View>
            <View style={styles.containerPreco}>
                <Text style={styles.text}>O 200</Text>
            </View>
        </View>
    );
}