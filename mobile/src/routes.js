import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'

import SideBar from './components/SideBar';

import Atividades from './pages/Atividades';
import Conquistas from './pages/Conquistas';
import Grupo from './pages/Grupo';
import ChatDoGrupo from './pages/ChatDoGrupo';
import Itens from './pages/Itens';
import Mercado from './pages/Mercado';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CriarAtividades from './pages/CriarAtividade';
import EditarAtividades from './pages/EditarAtividade';

const Drawer = createDrawerNavigator();

const StackApp = createStackNavigator();
const Stack = createStackNavigator();

const navOptionHandler = () => ({
	headerShown: false
})


export default function Routes() {

	return (
		<NavigationContainer>
			<StackApp.Navigator initialRouteName="Login">
				<StackApp.Screen name="Home" component={Menu} options={navOptionHandler} />
				<StackApp.Screen name="Login" component={Login} options={navOptionHandler} />
				<StackApp.Screen name="Cadastro" component={Cadastro} options={navOptionHandler} />
			</StackApp.Navigator>
		</NavigationContainer>
	);
}

export function Menu() {
	return (
		<Drawer.Navigator
			initialRouteName="Atividades"
			overlayColor="#00000066"
			drawerContentOptions={{
				activeTintColor: '#432874',
				activeBackgroundColor: '#00000015',
				inactiveTintColor: '#1A181D',
				labelStyle: {
					fontWeight: "bold"
				},
				itemStyle: {
					marginVertical: 0,
					marginHorizontal: 0,
					borderRadius: 0,
					paddingLeft: 10
				}
			}}
			drawerContent={(props) => <SideBar {...props} />}
		>
			<Drawer.Screen name="Atividades" component={StackAtividades} />
			<Drawer.Screen name="Conquistas" component={Conquistas} />
			<Drawer.Screen name="Mercado" component={Mercado} />
			<Drawer.Screen name="Inventário" component={Itens} />
			<Drawer.Screen name="Grupo" component={Grupo} />
			<Drawer.Screen name="Chat do Grupo" component={ChatDoGrupo} />
		</Drawer.Navigator>
	);
}

function StackAtividades() {

	return (
		<Stack.Navigator initialRouteName="Atividades">
			<Stack.Screen name="Atividades" component={Atividades} options={navOptionHandler} initialParams={{atualiza: false}}/>
			<Stack.Screen name="Criar Atividades" component={CriarAtividades} options={navOptionHandler} />
			<Stack.Screen name="Editar Atividades" component={EditarAtividades} options={navOptionHandler} />

		</Stack.Navigator>
	);
}