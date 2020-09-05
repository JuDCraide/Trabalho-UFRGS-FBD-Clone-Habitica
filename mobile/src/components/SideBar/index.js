import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import styles from './styles';
import api from '../../utils/api'
import { logout } from '../../utils/authentication';
import { getId } from '../../utils/authentication';

export default SideBar = props => {

    const [login, setLogin] = useState();
    const [nome, setNome] = useState();

    useEffect(() => {
        async function handlePesquisa() {
            let id = await getId();
            try {
                const response = await api.get(`/usuario/${id}`);
                let dados = response.data;
                setLogin(dados.login);
                setNome(dados.nome)
            } catch (err) {

                console.log(err);

            }
        }
        handlePesquisa()
    }, []);

    function copy(o) {
        var out, v, key;
        out = Array.isArray(o) ? [] : {};
        for (key in o) {
            v = o[key];
            out[key] = (typeof v === "object" && v !== null) ? copy(v) : v;
        }
        return out;
    }

    const { state, ...rest } = props;

    const newState1 = copy(state)
    const newState2 = copy(state)
    const newState3 = copy(state)
    newState1.routes = newState1.routes.filter(item => ['Atividades', 'Conquistas'].includes(item.name));
    newState2.routes = newState2.routes.filter(item => ['Mercado', 'Inventário'].includes(item.name));
    newState3.routes = newState3.routes.filter(item => ['Grupo', 'Chat do Grupo'].includes(item.name));

    const [popUpExcluir, setPopUpExcluir] = useState(false);

    return (
        <DrawerContentScrollView style={{ flex: 1, /*borderWidth:5*/ }}>

            <View style={styles.header}>
                <View style={styles.headerLinha}>
                    <View>
                        <Text style={{ color: "#FFF", fontSize: 16 }}>{nome}</Text>
                        <Text style={{ color: "#FFF" }}>@{login}</Text>
                    </View>
                    <TouchableOpacity style={styles.botaoSair} onPress={() => {
                        props.navigation.navigate("Login");
                        logout()
                    }}>
                        <Text style={{ color: "#FFF", fontSize: 16 }}>Sair  </Text>
                        <Icon name="exit-to-app" color="#FFF" size={24} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ margin: 0, padding: 0 }}>
                <DrawerItemList state={newState1} {...rest} />
                <View style={styles.categoria}>
                    <Text style={{ color: "#FFF" }}>Itens</Text>
                </View>
                <DrawerItemList state={newState2} {...rest} />
                <View style={styles.categoria}>
                    <Text style={{ color: "#FFF" }}>Social</Text>
                </View>
                {
                    //<DrawerItemList state={newState3} {...rest} />
                    <DrawerItemList state={state} {...rest} />
                }
            </View>

            <TouchableOpacity style={styles.botaoExcluir} onPress={() => setPopUpExcluir(true)}>
                <Text style={{ color: '#fff', paddingRight: 10 }}>Excluir Conta</Text>
                <Icon name="delete-forever" color="#FFF" size={20} />
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={popUpExcluir}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.botaoFecharModal}
                            onPress={() => setPopUpExcluir(!popUpExcluir)}
                        >
                            <Icon name='close' size={20} style={styles.textStyle} />
                        </TouchableOpacity>

                        <Text style={styles.subtitulo}>Excluir Conta</Text>

                        <TouchableOpacity
                            style={styles.botaoModal}
                            onPress={() => setPopUpExcluir(!popUpExcluir)}
                        >
                            <Text style={styles.textStyle}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </DrawerContentScrollView>
    )
}; 