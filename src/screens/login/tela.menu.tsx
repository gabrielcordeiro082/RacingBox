import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface MenuScreenProps {
}

export default function MenuScreen(props: MenuScreenProps) {

    const nav = useNavigation();

    return (
        <ImageBackground source={require('./../../../assets/imgs/bgMenu.png')}
            style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>....</Text>
            </View>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',

    },
    container: {
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
