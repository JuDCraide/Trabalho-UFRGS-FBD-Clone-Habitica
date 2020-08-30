import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function ItemRotina({ nome }) {

    const realizado = true;
    const ativoHoje = true;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={ativoHoje && !realizado ? styles.ativado : styles.desativado}>
                <View style={ativoHoje && !realizado ? styles.checkAtivo : styles.checkInativo}>
                    <Icon
                        style={!realizado && {display:'none'}}
                        name="done"
                        color="#878190"
                        size={24}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.atividade}>
                <Text style={styles.titulo}>{nome}</Text>
            </View>
        </View>
    );
}