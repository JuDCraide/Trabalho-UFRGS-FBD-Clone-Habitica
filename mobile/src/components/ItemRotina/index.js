import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

import { getId } from '../../utils/authentication';
import api from '../../utils/api'

export default function ItemRotina({id, nome, realizado = false, ativoHoje = true ,atualiza, item, editar}) {

    async function realizarAcao() {
        let id_user = await getId()
        try {
            const response = await api.post("/atividade",
                {
                    "id_atividade": id,
                    "id_usuario": id_user,
                    "tipo":"rotina",
                    "id":item.id,
                });
                atualiza()
        } catch (err) {

            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={ativoHoje && !realizado ? styles.ativado : styles.desativado} onPress={() => ativoHoje && !realizado && realizarAcao()} >
                <View style={ativoHoje && !realizado ? styles.checkAtivo : styles.checkInativo}>
                    <Icon
                        style={!realizado && { display: 'none' }}
                        name="done"
                        color="#878190"
                        size={24}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.atividade}  onPress={()=> editar(id,"Rotina",item)}>
                <Text style={styles.titulo}>{nome}</Text>
            </TouchableOpacity>
        </View>
    );
}