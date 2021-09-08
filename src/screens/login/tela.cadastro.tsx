import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface CadastroScreenProps {
}

export default function CadastroScreen (props: CadastroScreenProps) {

    const nav = useNavigation();

    //const [ esconderSenha, setEsconderSenha] = useState(true);

    return (
        <ImageBackground source = { require('./../../../assets/imgs/bgcadastro.png')}
                                      style={styles.background}> 
                  <View style={styles.container}>
                        <Text style={styles.title}></Text> 
                  </View>
                  
                    <View style={styles.conta}>

                    <Text style= {styles.title}></Text>

                        <Input placeholder='Digite o seu nome'
                            leftIcon={{name:'person', color: 'black'}}
                            placeholderTextColor="dimgray"
                            keyboardType='email-address'
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={{color: 'black'}} />

                        <Input placeholder='Digite o seu melhor Email'
                            leftIcon={{name:'email', color: 'black'}}
                            placeholderTextColor="dimgray"
                            keyboardType='email-address'
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={{color: 'black'}} />

                        <Input placeholder='Digite uma senha'
                            leftIcon={{name:'lock', color: 'black' 
                            /*onPress:() => {setEsconderSenha(!esconderSenha)}*/ }}
                            placeholderTextColor="dimgray" 
                            secureTextEntry/*={/*esconderSenha}*/
                            inputStyle={{color: 'black'}} 
                            inputContainerStyle={styles.inputContainer}
                            />
                            
                    <TouchableOpacity onPress={() => nav.navigate('Login')}>
                    <Button title="Cadastrar" 
                        buttonStyle={{borderRadius: 15, backgroundColor: '#006BAC', marginTop: 15}}>
                    
                        </Button>
                    </TouchableOpacity>
                        <TouchableOpacity onPress={() => nav.navigate('Login')}>
                        <Text style={styles.comConta}> Já possui conta? Clique aqui para fazer login!</Text>
                        </TouchableOpacity>

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
        paddingTop: 1,
    },
    title: {
        color: 'white',
        fontSize: 28,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 50,
    },
    titleCadastro:{
        color: 'white',
        fontSize: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        
    },
    conta: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 30,
        alignItems: 'stretch',
        color: 'white',
        marginBottom: 150,    
    },
    inputContainer: { 
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 5,
        marginBottom: -20,
        borderRadius: 15,  
      },
    comConta: {
        color: 'white',
        fontSize: 15,
        padding: 10,
        textAlign: 'center',
        textDecorationLine: 'underline',
        paddingTop: 20,
    },
});
