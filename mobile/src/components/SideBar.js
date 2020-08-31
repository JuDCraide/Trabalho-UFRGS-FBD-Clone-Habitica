import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

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
    newState3.routes = newState3.routes.filter(item => ['Grupo'].includes(item.name));

    return (
        <DrawerContentScrollView style={{ flex: 1 }}>
            <View style={{ backgroundColor: "#432879", height: 80 }}>
                <Text style={{ color: "#FFF" }}>Username</Text>
                <Text style={{ color: "#FFF" }}>@Login</Text>
            </View>

            <View style={{ margin: 0, padding: 0 }}>
                <DrawerItemList state={newState1} {...rest} />
                <View style={{ backgroundColor: "#432879", height: 30 }}>
                    <Text style={{ color: "#FFF" }}>Itens</Text>
                </View>
                <DrawerItemList state={newState2} {...rest} />
                <View style={{ backgroundColor: "#432879", height: 30 }}>
                    <Text style={{ color: "#FFF" }}>Social</Text>
                </View>
                {//<DrawerItemList state={newState3} {...rest} />
                }
                <DrawerItemList state={state} {...rest} />
            </View>
        </DrawerContentScrollView>
    )
}; 