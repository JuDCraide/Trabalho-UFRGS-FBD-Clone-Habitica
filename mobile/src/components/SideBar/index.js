import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import styles from './styles';

export default SideBar = props => {

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

    const [popUpoExcluir, setPopUpoExcluir] = useState(false);

    return (
        <DrawerContentScrollView style={{ flex: 1 }}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={popUpoExcluir}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.subtitulo}>Excluir Conta</Text>

                        <TouchableOpacity
                            style={{ ...styles.openButton }}
                            onPress={() => setPopUpoExcluir(!popUpoExcluir)}
                        >
                            <Text style={styles.textStyle}>Excluir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ ...styles.openButton }}
                            onPress={() => setPopUpoExcluir(!popUpoExcluir)}
                        >
                            <Text style={styles.textStyle}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={styles.header}>
                <View style={styles.headerLinha}>
                    <View>
                        <Text style={{ color: "#FFF" }}>Username</Text>
                        <Text style={{ color: "#FFF" }}>@Login</Text>
                    </View>
                    <TouchableOpacity style={styles.botaoSair } >
                        <Text style={{ color: "#FFF", fontSize: 18 }}>Sair  </Text>
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
                {//<DrawerItemList state={newState3} {...rest} />
                }
                <DrawerItemList state={state} {...rest} />
            </View>

            <TouchableOpacity style={styles.botaoExcluir} onPress={()=> setPopUpoExcluir(true)}>
                <Text style={{ color: '#fff', paddingRight: 10 }}>Excluir Conta</Text>
                <Icon name="delete-forever" color="#FFF" size={20} />
            </TouchableOpacity>
        </DrawerContentScrollView>
    )
}; 