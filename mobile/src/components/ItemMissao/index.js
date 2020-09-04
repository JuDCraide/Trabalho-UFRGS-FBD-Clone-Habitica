import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

import naoObtidoImg from '../../assets/achievement-unearned.png';
import conquistaImg from '../../assets/achievement.png';

export default function Conquista({ nome, saude, abrirMissao, finalizada }) {
    if (!finalizada) {
        return (
            <TouchableOpacity style={styles.container} onPress={() => abrirMissao()}>
                <Text style={styles.titulo}>{nome}</Text>
                <Text style={styles.subtitulo}>Saúde do monstro: {saude}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity style={styles.container} /*onPress={() => abrirMissao()}*/>
            <Text style={styles.finalizada}>FINALIZADA: 
                 <Text style={styles.tituloF}> {nome}</Text>
            </Text>

            <Text style={styles.subtituloF}>Saúde do monstro: {saude}</Text>
        </TouchableOpacity>
    );
}