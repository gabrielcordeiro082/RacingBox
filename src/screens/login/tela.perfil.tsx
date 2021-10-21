import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppToolbar } from '../../components/toolbar';


export interface PerfilScreenProps {
}

export default function PerfilScreen (props: PerfilScreenProps) {

    const nav = useNavigation();  

    return (
        <ImageBackground source = { require('./../../../assets/imgs/bg.png')}
                                      style={styles.background}> 
        <AppToolbar /> 
                  <View style={styles.container}>
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
        fontSize: 25,
        flex: 0,
        flexDirection: 'row',
        height: 50,
        padding: 2,

    }
});
