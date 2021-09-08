import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainNavigation } from './src/navigations';
import LoginScreen from './src/screens/login/tela.login';
import CadastroScreen from './src/screens/login/tela.cadastro'

export default function App() {
  return (<MainNavigation/>);
}


