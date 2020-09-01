import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import naoObtidoImg from '../../assets/achievement-unearned.png';
import conquistaImg from '../../assets/achievement.png';

export default function Conquista({ nome, descricao, conquistada }) {
    return (
        <View style={styles.container}>
            {
                conquistada ?
                    <Image style={styles.imagem} source={conquistaImg} />
                    :
                    <Image style={styles.imagem} source={naoObtidoImg} />
            }

            <View>
                <Text style={styles.titulo}>{nome}</Text>
                <Text style={styles.subtitulo}>{descricao}</Text>
            </View>
        </View>
    );
}