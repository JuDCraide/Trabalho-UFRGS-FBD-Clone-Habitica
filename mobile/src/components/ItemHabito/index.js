import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function ItemHabito({ nome, positivo }) {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={positivo ? styles.ativado : styles.desativado}>
                <View style={positivo ? styles.circuloPreenchido : styles.circuloContornado}>
                    <Icon
                        style={positivo ? styles.itemAtivo : styles.itemInativo}
                        name="add"
                        size={24}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.atividade}>
                <Text style={styles.titulo}>{nome}</Text>
            </View>

            <TouchableOpacity style={!positivo ? styles.ativado : styles.desativado}>
                <View style={!positivo ? styles.circuloPreenchido : styles.circuloContornado}>
                    <Icon
                        style={!positivo ? styles.itemAtivo : styles.itemInativo}
                        name="remove"
                        size={24}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}