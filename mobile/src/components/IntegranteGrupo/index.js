import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Grupo({ lider = false, nome, classe,health = 10 }) {

    
    const xp = (20 * 100) / 770;

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.textos}>{nome} {lider && "- Líder"}</Text>
                <Text style={styles.textos}>Lvl 100 {classe}</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.porcentagem}>
                    <View style={{ ...styles.porcentagem, backgroundColor: "#ff6165", width: `${health}%` }}></View>
                </View>

                <Text style={styles.textos}>45/100</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.porcentagem}>
                    <View style={{ ...styles.porcentagem, backgroundColor: "#ffbe5d", width: `${xp}%` }}></View>
                </View>

                <Text style={styles.textos}>570/770</Text>
            </View>
        </View>
    )
}