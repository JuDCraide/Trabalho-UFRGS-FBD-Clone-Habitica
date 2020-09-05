import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Mensagem({nome, mensagem, datahora, login, eu}) {
    
    return (
        <View style={eu ? {...styles.container, alignSelf:'flex-end'} : styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.data}>{datahora}</Text>
            </View>
            { !eu &&
                <Text style={styles.data}>{login}</Text>
            }
            <Text style={styles.mensagem}>{mensagem}</Text>
        </View>
    )
}