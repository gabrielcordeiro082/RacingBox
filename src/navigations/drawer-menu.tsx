import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/login/tela.home";
import CarrinhoScreen from "../screens/login/tela.carrinho";
import { MaterialIcons } from '@expo/vector-icons';
import LoginScreen from "../screens/login/tela.login";
import PerfilScreen from "../screens/login/tela.perfil";
import PedidosScreen from "../screens/login/tela.pedidos";
import PagamentoScreen from "../screens/login/tela.pagamento";

const Drawer = createDrawerNavigator();

export function AppNavegacao() {
    return (
       <Drawer.Navigator screenOptions={{headerShown:false}}> 
       
            <Drawer.Screen name='home' component={HomeScreen} options={{
                drawerLabel: 'Loja',
                drawerIcon: () => <MaterialIcons name= "store" size={35}/>
            }}/>
            <Drawer.Screen name='Perfil' component={PerfilScreen} options={{
                drawerLabel: 'Perfil',
                drawerIcon: () => <MaterialIcons name= "account-circle" size={35}/>
            }}/>
            <Drawer.Screen name='pagamento' component={PagamentoScreen} options={{
                drawerLabel: 'Pagamento',
                drawerIcon: () => <MaterialIcons name= "credit-card" size={35}/>
            }}/>
            <Drawer.Screen name='carrinho' component={CarrinhoScreen} options={{
                drawerLabel: 'Carrinho',
                drawerIcon: () => <MaterialIcons name= "shopping-cart" size={35}/>
            }}/>
            <Drawer.Screen name='sair' component={LoginScreen} options={{
                drawerLabel: 'Sair',
                drawerIcon: () => <MaterialIcons name= "logout" size={35}/>
            }}/>
            
        </Drawer.Navigator>
    )



}