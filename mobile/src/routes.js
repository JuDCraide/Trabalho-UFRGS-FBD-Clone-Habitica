import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Atividades from './pages/Atividades';
import Conquistas from './pages/Conquistas';
import Grupo from './pages/Grupo';
import Itens from './pages/Itens';
import Mercado from './pages/Mercado';
import Login from './pages/Login';
import SideBar from './SideBar';

const Drawer = createDrawerNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Atividade"
				overlayColor="#00000066"
				drawerContentOptions={{
					activeTintColor: '#432874',
					activeBackgroundColor: '#00000015',
					inactiveTintColor: '#1A181D',
					labelStyle: {
						fontWeight: "bold"
					},
					itemStyle:{
						marginVertical: 0,
						marginHorizontal: 0,
						borderRadius:0,
					}
				}}
				drawerContent={(props) => <SideBar {...props} />}
			>
				<Drawer.Screen name="Atividades" component={Atividades} />
				<Drawer.Screen name="Conquistas" component={Conquistas} />
				<Drawer.Screen name="Mercado" component={Mercado} />
				<Drawer.Screen name="Inventário"  component={Itens} />
				<Drawer.Screen name="Grupo" component={Grupo} />
				<Drawer.Screen name="Login" component={Login} />
			</Drawer.Navigator>
		</NavigationContainer >
	);
} 