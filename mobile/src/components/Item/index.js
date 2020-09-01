import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';


export default function Item({ nome, poder, valorPoder, imagem, equipar }) {
    return (
        <TouchableOpacity style={styles.container} onPress={equipar}>

            <Image style={styles.imagem} source={{ uri: imagem }} />

            <View>
                <Text style={styles.titulo}>{nome}</Text>
                <Text style={styles.subtitulo}>
                    {valorPoder} 
                    {poder === 1 && ' Força'}
                    {poder === 2 && ' Defesa'}
                    {poder === 3 && ' Inteligência'}
                </Text>
            </View>
        </TouchableOpacity>
    );
}