import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function ItemTarefa({ imagem = false }) {

    return (
        <View style={styles.container}>
            {
                imagem ?
                    <Image  style={styles.imagem} source={{ uri: imagem}} />
                    :
                    <View style={styles.vazio}>
                        <Text style={styles.text}>Equipe{"\n"}1 item</Text>
                    </View>
            }
        </View>
    );
}