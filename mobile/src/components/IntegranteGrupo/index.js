import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import {calcularNivel,calcularXpProximoNivel} from '../../utils/utils'

export default function Grupo({ lider = false, nome, classe,health = 10,exp=75 }) {

    
    const xp = (exp * 100) / calcularXpProximoNivel(exp);

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.textos}>{nome} {lider && "- Líder"}</Text>
                <Text style={styles.textos}>Lvl {calcularNivel(exp)} {classe}</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.porcentagem}>
                    <View style={{ ...styles.porcentagem, backgroundColor: "#ff6165", width: `${health}%` }}></View>
                </View>

                <Text style={styles.textos}>{health}/100</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.porcentagem}>
                    <View style={{ ...styles.porcentagem, backgroundColor: "#ffbe5d", width: `${xp}%` }}></View>
                </View>

                <Text style={styles.textos}>{exp}/{calcularXpProximoNivel(exp)}</Text>
            </View>
        </View>
    )
}