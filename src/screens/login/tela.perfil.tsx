import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppToolbar } from '../../components/toolbar';


export interface PerfilScreenProps {
}

export default function PerfilScreen(props: PerfilScreenProps) {

    const nav = useNavigation();

    return (
        <ImageBackground source={require('./../../../assets/imgs/bgPerfil.png')}
            style={styles.background}>
            <AppToolbar />
            <View style={styles.container}>
                <Text style={styles.text1}></Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text2}>Nome: Gabriel Cordeiro</Text>
                <Text style={styles.text2}>E-mail: gabrielpatricyo@gmail.com</Text>
                <Text style={styles.text2}>Senha: ********</Text>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity onPress={() => nav.navigate('Perfil')}>
                    <Button title="Clique para salvar!"
                        buttonStyle={{ borderRadius: 15, backgroundColor: '#006BAC', marginTop: 10 }}>
                    </Button>
                </TouchableOpacity>
                <View style={styles.container4}>
                </View>
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
    container2: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingTop: 40,
    },
    container3: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingTop: 30,
        color: 'white',
        fontSize: 15,
        padding: 50,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    container4: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingTop: 30,
    },
    title: {
        color: 'white',
        fontSize: 25,
        flex: 0,
        flexDirection: 'row',
        height: 50,
        padding: 2,

    },
    text1: {
        flex: 2,
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
    text2: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        color: 'white',
    },
});
