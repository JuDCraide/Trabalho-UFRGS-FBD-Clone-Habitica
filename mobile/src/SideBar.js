import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

export default SideBar = props => {
    //const { itens, ...rest } = props
    console.log( props.state.routeNames);
    const routeNames = JSON.parse(JSON.stringify(props.state.routeNames))
    const routes = JSON.parse(JSON.stringify(props.state.routes))
    const  p1 = {...props}
    const  p2 = {...props}
    p2.state.routeNames = routeNames;
    p2.state.routes = routes;
    return (
        <DrawerContentScrollView style={{ flex: 1 }}>
            <View style={{ backgroundColor: "#432879", height: 80 }}>
                <Text style={{ color: "#FFF" }}>Username</Text>
                <Text style={{ color: "#FFF" }}>@Login</Text>
            </View>

            <View style={{ margin: 0, padding: 0 }}>
                
                {/*
                    itens.map(item => {
                        <DrawerItem {...item}/>
                    })*/
                }
                <View style={{ backgroundColor: "#432879", height: 30 }}>
                    <Text style={{ color: "#FFF" }}>Itens</Text>
                </View>
                <DrawerItemList {...p1} />
                <View style={{ backgroundColor: "#432879", height: 30 }}>
                    <Text style={{ color: "#FFF" }}>Social</Text>
                </View>
                <DrawerItemList {...p2} />
            </View>
        </DrawerContentScrollView>
    )
}; 