import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { Input } from 'react-native-elements/dist/input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppToolbar } from '../../components/toolbar';


export interface HomeScreenProps {
}

export default function HomeScreen(props: HomeScreenProps) {

    const nav = useNavigation();

    return (
        <ImageBackground source={require('./../../../assets/imgs/bgHomeBusca1.png')}
            style={styles.background}>

            <AppToolbar />
            
            <View style={styles.container}>        
                    <Input placeholder="Pesquise um produto"
                        leftIcon={{ name: "search", color: "black" }}
                        rightIcon={{ name: "mic", color: "black" }}
                        placeholderTextColor="grey"
                        inputContainerStyle={styles.inputContainer}
                        inputStyle={{ color: 'black' }}
                    />
            </View>

            <View style={styles.container2}>
                <TouchableOpacity>
                    <Image source={require('./../../../assets/imgs/capacete.png')}/>                            
                </TouchableOpacity>
                <Text style={styles.text1}>Capacetes</Text>
                <Text style={styles.text2}>Aqui você encontra os melhores modelos do mundo!</Text>                    
            </View>
            <View style={styles.container3}>
                <TouchableOpacity>
                    <Image source={require('./../../../assets/imgs/camisa.png')}/>                            
                </TouchableOpacity>
                <Text style={styles.text1}>Camisetas</Text>
                <Text style={styles.text2}>Aqui você encontra as melhores peças do mundo!</Text>                       
            </View>
            

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',

    },
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 230,
    },
    container2:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 30,
               
    },

    text1:{
        fontSize:20,
        left:10,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white'
    },

    text2:{
        fontSize:12,
        left:-80,
        top: 30,
        fontStyle: 'italic',
        color: 'white'
    },
    
    container3:{
        flex:5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 30,

    },
   
   title: {
        color: 'white',
        fontSize: 50,
    },
    inputContainer: {
        backgroundColor: '#F1F5F4',
        padding: 5,
        marginBottom: -20,
        borderRadius: 15,
    }
});
