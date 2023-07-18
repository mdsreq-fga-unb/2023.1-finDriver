import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDefaultLibFilePath } from 'typescript';
import styles from './styles';
import dados from '../../../dados';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleForgotPassword = () => {}

    const storeToken = async (value) => {
        try {
            console.log(value)
            await AsyncStorage.setItem('token', value)
        } catch (e) {
            console.log(e)
        }
    }

    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            console.log(value)
            if (value !== null) {
                console.log(value)
            }
        } catch (e) {
            console.log(e)
        }}

    function signIn() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        };
        fetch(`${dados.Url}/api/user/login`, requestOptions)
            .then(response => {
                if(response.status == 401){
                    return Alert.alert('Erro', 'E-mail ou senha inválidos');
                }
                return response.json()
            })
            .then(data => {
                try {
                    if (data.response.token !== undefined) {
                        var token = data.response.token.headers.Authorization;
                        storeToken(token);

                        return navigation.navigate('Tab');
                    } 
                } catch (e) {
                    console.log(e)
                    return Alert.alert('Erro', 'E-mail ou senha inválidos');
                }
            })
            .catch((e) => {
                console.log(e);
                return Alert.alert('Erro', 'Ocorreu um erro no servidor!');
            });
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logoCarro.png')} style={styles.logo} />
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={email => setEmail(email)}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoComplete="email"
                    cursorColor="#001f36"
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={password => setPassword(password)}
                    placeholder="Senha"
                    keyboardType="default"
                    autoComplete="off"
                    autoCorrect={false}
                    cursorColor="#001f36"
                    secureTextEntry={true}
                />
                <Pressable
                    style={styles.button}
                    onPress={(() => signIn())}>
                    <Text style={styles.textButton}>Entrar</Text>
                </Pressable>

                {/* <Pressable onPress={handleForgotPassword}
                            style={styles.pressableTextForgotPassword}>
                    <Text style={styles.underlinedText}>Esqueceu a senha?</Text>
                </Pressable> */}
                
                <Pressable onPress={() => navigation.navigate('Registrar')} style={styles.pressableTextSignUp}>
                    <Text style={[styles.underlinedText, styles.signUp]}>Cadastre-se</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;