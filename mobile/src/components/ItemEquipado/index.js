import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { } from 'react-native-gesture-handler';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function ItemTarefa({ imagem = false, desequipar }) {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { imagem &&  desequipar() }}>
            {
                imagem ?
                    <Image style={styles.imagem} source={{ uri: imagem }} />
                    :
                    <View style={styles.vazio}>
                        <Text style={styles.text}>Equipe{"\n"}1 item</Text>
                    </View>
            }
        </TouchableOpacity>
    );
}