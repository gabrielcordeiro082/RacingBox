import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppToolbar } from '../../components/toolbar';


export interface PagamentoScreenProps {
    meio: Meio
    onEditar?(meio: Meio): void
    onExcluir?(id: string): void
}

export default function PagamentoScreen(props: PagamentoScreenProps) {

    const nav = useNavigation();

    const { meio } = props;

    return (
        <ImageBackground source={require('./../../../assets/imgs/bgCartoes.png')}
            style={styles.background}>
            <AppToolbar />
            <View style={styles.container} />
            <View style={styles.container1}>
                <Text style={styles.text1}>Cartão 1:</Text>
                <Text style={styles.text1}>{meio}Nome:</Text>
                <Text style={styles.text1}>{meio}Número do cartão:</Text>
                <Text style={styles.text1}>{meio}Data de validade:</Text>
                <Text style={styles.text1}>{meio}Código de segurança:</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text1}>Cartão 2:</Text>
                <Text style={styles.text1}>{meio}Nome:</Text>
                <Text style={styles.text1}>{meio}Número do cartão:</Text>
                <Text style={styles.text1}>{meio}Data de validade:</Text>
                <Text style={styles.text1}>{meio}Código de segurança:</Text>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity onPress={() => nav.navigate('home')}>
                    <Button title="Clique para salvar!"
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
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: 'white',
        paddingTop: 70,
    },
    container1: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'flex-start',

        color: 'white',
        paddingTop: 120,
    },
    text1: {
        fontSize: 20,
        left: 10,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    container2: {
        flex: 3,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: 'white',
        paddingTop: 120,

    },
    container3: {
        flex: 3,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'white',
        paddingTop: 120,
    },
    title: {
        color: 'white',
        fontSize: 50,
    }
});
