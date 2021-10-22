import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppToolbar } from '../../components/toolbar';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

export interface PerfilScreenProps {
}

export default function PerfilScreen(props: PerfilScreenProps) {

    const nav = useNavigation();

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraPermissionsAsync();
                if (status !== 'granted') {
                    alert('Permissão necessária!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <ImageBackground source={require('./../../../assets/imgs/bgPerfil.png')}
            style={styles.background}>
            <AppToolbar />
            <View style={styles.container}>
                {image && <Avatar source={{ uri: image }} rounded icon={{ name: 'user', type: 'font-awesome' }} onPress={pickImage} size="xlarge" />}
                <Button title="Tirar foto" onPress={pickImage} />
            </View>
            <View style={styles.container2}>
                <Text style={styles.text2}>Nome: Administrador</Text>
                <Text style={styles.text2}>E-mail: administrador@gmail.com</Text>
                <Text style={styles.text2}>Senha: ********</Text>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity onPress={() => nav.navigate('home')}>
                    <Button title="Clique para voltar a Loja!"
                        buttonStyle={{ borderRadius: 15, backgroundColor: '#006BAC', marginTop: 10 }}>
                    </Button>
                </TouchableOpacity>
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
        flex: 10,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 220
        
    },
    container2: {
        flex: 10,
        flexDirection: 'column',
        paddingTop: 2
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
    
    text2: {
        textAlign: 'center',
        fontSize: 18,
        padding: 1,
        color: 'white',
    },
});
