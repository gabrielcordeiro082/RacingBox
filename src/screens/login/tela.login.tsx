import * as React from 'react';
import { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { InputRound } from './component';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface LoginScreenProps {
}

export default function LoginScreen (props: LoginScreenProps) {

    const nav = useNavigation();   
    const [erro, setErro] = useState<null|string>(null); 

    const login = async (dados:any) => {
        setErro(null)
        //delay
        await new Promise((resolve, error) => setTimeout(() => resolve(''), 2000))
        console.log(dados)
        if (dados.email == 'gabrielpatricyo@gmail.com' && dados.senha == '123456')
          nav.navigate('Home')
        else
            setErro('Login ou Senha incorreta')
    }

    //const [ esconderSenha, setEsconderSenha] = useState(true);

    return (
        <ImageBackground source = { require('./../../../assets/imgs/bglogin.png')}
                                      style={styles.background}> 
                  <View style={styles.container}>
                        <Text style={styles.title}></Text> 
                  </View>
                  <Formik
                    initialValues={{email:'', senha: ''}}
                    validationSchema={Yup.object({
                    email: Yup.string().required('Atenção! E-mail de acesso obrigatório').email('Coloque o seu E-mail'),
                    senha: Yup.string().required('Atenção! Senha de acesso obrigatória').min(5,'Senha com o minimo de 5 digitos')})}
                    onSubmit={login}>
                    {({ handleChange, touched, handleSubmit, handleBlur, isValid, isSubmitting, errors}) => (
                    
                    <View style={styles.conta}>                        
                    <InputRound onBlur={handleBlur('email')} placeholder="Digite o seu endereço de e-mail" icone="email" onChangeText={handleChange('email')}/>
                    { touched.email && <Text style={styles.erro}>{errors.email}</Text>}

                    <InputRound onBlur={handleBlur('senha')} placeholder="Digite a senha de acesso" icone="lock" senha={true} onChangeText={handleChange('senha')}/>
                    { touched.senha && <Text style={styles.erro}>{errors.senha}</Text>}
                    { erro != null && <Text style={{color: 'yellow', fontSize:20, textAlign: 'center', marginBottom: 20}}>{erro}</Text>}
                    { isSubmitting && <ActivityIndicator style={styles.indicator}  size="large" color="white"/>}
                    { !isSubmitting && <Button title="Logar" onPress={handleSubmit} disabled={!isValid}
                        buttonStyle={{borderRadius: 15, backgroundColor: '#006BAC', marginTop: 10}}>
                    </Button>}
                    
            
                        <TouchableOpacity onPress={() => nav.navigate('Cadastro')}>
                        <Text style={styles.semConta}> Não possui conta? Clique aqui para criar agora!</Text>
                        </TouchableOpacity>

                    </View>)}
                </Formik>
                  
          </ImageBackground>
      
    );
}

const styles = StyleSheet.create({
    background: {
        width:'100%', 
        height:'100%',   
    },
    indicator: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        marginBottom: 50
    },  
    container:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 30,
    },
    erro: {
        color:'yellow',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'right'
        
      },
    title: {
        color: 'white',
        fontSize: 50,
    },
    conta: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 25,
        alignItems: 'stretch',
        color: 'white',
        marginBottom: 150,      
    },  
    semConta: {
        color: 'white',
        fontSize: 15,
        padding: 10,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
});
