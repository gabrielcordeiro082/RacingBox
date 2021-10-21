import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/login/tela.login';
import CadastroScreen from '../screens/login/tela.cadastro';
import HomeScreen from '../screens/login/tela.home';
import MenuScreen from '../screens/login/tela.menu';
import CarrinhoScreen from '../screens/login/tela.carrinho';
import { AppNavegacao } from './drawer-menu';
import PerfilScreen from '../screens/login/tela.perfil';
import PedidosScreen from '../screens/login/tela.pedidos';
import PagamentoScreen from '../screens/login/tela.pagamento';


const Stack= createStackNavigator();    


export function MainNavigation(){

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Home" component={AppNavegacao}/>
                <Stack.Screen name="Cadastro" component={CadastroScreen}/>
                <Stack.Screen name="Menu" component={MenuScreen}/>
                <Stack.Screen name="Perfil" component={PerfilScreen}/>
                <Stack.Screen name="Carrinho" component={CarrinhoScreen}/>
                <Stack.Screen name="Pedidos" component={PedidosScreen}/>
                <Stack.Screen name="Pagamento" component={PagamentoScreen}/>                
            </Stack.Navigator>
        </NavigationContainer>
    )

}