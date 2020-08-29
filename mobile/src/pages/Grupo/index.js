import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header  from '../../components/Header';

import styles from './styles';

export default function Grupo(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header titulo={props.route.name} {...props}/>
            <Text>Grupo</Text>
        </SafeAreaView>
    );
}