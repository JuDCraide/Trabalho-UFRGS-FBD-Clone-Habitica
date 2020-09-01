import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';


export default function Item({ nome, poder, valorPoder, imagem }) {
    return (
        <View style={styles.container}>

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
        </View>
    );
}