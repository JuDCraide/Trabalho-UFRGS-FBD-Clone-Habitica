import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import { getId } from '../../utils/authentication';
import api from '../../utils/api'

import styles from './styles';

export default function ItemTarefa({ id,nome, data = false }) {

    const prazoVencido = false; //data < hoje
    const completo = false;

    async function realizarAcao() {
        let id_user = await getId()
        try {
            const response = await api.post("/atividade",
                {
                    "id_atividade": id,
                    "id_usuario": id_user
                });
            console.log(response.data)

        } catch (err) {

            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={completo ? styles.completo : data && prazoVencido ? styles.vencido : styles.ativo} onPress={() => !completo && realizarAcao()}>
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