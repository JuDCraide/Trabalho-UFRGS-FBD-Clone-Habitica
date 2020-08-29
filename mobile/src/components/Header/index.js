import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';
import styles from './styles';

export default function Header({ titulo, navigation }) {

    console.log(navigation);
    function openMenu(){
        navigation.openDrawer()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openMenu}>
                <Icon name="menu" color="#FFF" size={24} />
            </TouchableOpacity>
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    );
}