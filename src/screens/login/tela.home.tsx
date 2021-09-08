import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export interface HomeScreenProps {
}

export default function HomeScreen (props: HomeScreenProps) {

    const nav = useNavigation();  

    return (
        <ImageBackground source = { require('./../../../assets/imgs/bghome.png')}
                                      style={styles.background}> 
                  <View style={styles.container}>
                      <Text style={styles.title}>Bem Vindo!</Text> 
                  </View> 
          </ImageBackground>
      
    );
}

const styles = StyleSheet.create({
    background: {
        width:'100%', 
        height:'100%',
        
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 40,
    },
    title: {
        color: 'white',
        fontSize: 50,
    }
});
