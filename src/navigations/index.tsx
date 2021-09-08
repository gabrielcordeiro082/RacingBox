import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/login/tela.login';
import CadastroScreen from '../screens/login/tela.cadastro';
import HomeScreen from '../screens/login/tela.home';

const Stack= createStackNavigator();    


export function MainNavigation(){

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Cadastro" component={CadastroScreen}/>                
            </Stack.Navigator>
        </NavigationContainer>
    )

}