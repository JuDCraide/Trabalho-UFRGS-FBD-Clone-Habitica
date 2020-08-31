import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import styles from './styles';

export default function ItemTarefa({ nome, data = false }) {

    const prazoVencido = true; //data < hoje
    const completo = false;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={completo ? styles.completo : data && prazoVencido ? styles.vencido : styles.ativo}>
                <View style={completo ? styles.checkCompleto : data && prazoVencido ? styles.checkVencido : styles.checkAtivo}>
                    <Icon
                        style={!completo && {display:'none'}}
                        name="done"
                        size={24}
                        color="#878190"
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.atividade}>
                <Text style={styles.titulo}>{nome}</Text>
                <Text style={data ? styles.data : {display:'none'} }>{data}</Text>
            </View>
        </View>
    );
}