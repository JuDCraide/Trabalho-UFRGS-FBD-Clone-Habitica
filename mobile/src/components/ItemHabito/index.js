import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

import { getId } from '../../utils/authentication';
import api from '../../utils/api'

export default function ItemHabito({ id, nome, positivo, atualiza, editar, item}) {

    async function realizarAcao() {
        let id_user = await getId()
        try {
            const response = await api.post("/atividade",
                {
                    "id_atividade": id,
                    "id_usuario": id_user,
                    "tipo":"habito",
                    "id":item.id
                });
            atualiza()
        } catch (err) {

            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={positivo ? styles.ativado : styles.desativado} onPress={() => positivo && realizarAcao()}>
                <View style={positivo ? styles.circuloPreenchido : styles.circuloContornado}>
                    <Icon
                        style={positivo ? styles.itemAtivo : styles.itemInativo}
                        name="add"
                        size={24}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.atividade} onPress={()=> editar(id,"Habito",item)}>
                <Text style={styles.titulo}>{nome}</Text>
                { item.repeticao!=0 &&
                    <Text style={styles.repeticoes}>Repetições hoje: {item.repeticao}</Text>
                }
            </TouchableOpacity>

            <TouchableOpacity style={!positivo ? styles.ativado : styles.desativado} onPress={() => !positivo && realizarAcao()}>
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