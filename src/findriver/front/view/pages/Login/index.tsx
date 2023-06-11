import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDefaultLibFilePath } from 'typescript';
import styles from './styles';

const Login = ({ navigation }) => {

    const HOST = 'http://192.168.1.5:3000'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForgotPassword = () => {

    }

    const storeToken = async (value) => {
        try {
            await AsyncStorage.setItem('token', value)
        } catch (e) {
            console.log(e)
        }
    }

    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
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
        fetch(`${HOST}/api/user/login`, requestOptions)
            .then(response => response.json())
            .then(data => {
                try {
                    if (data.response.token !== undefined) {
                        var token = data.response.token.headers.Authorization;
                        storeToken(token);
                        getToken();

                        Alert.alert('Usuário logado');

                        return navigation.navigate('Tab');
                    } else {
                        return Alert.alert('E-mail ou senha inválidos');
                    }
                } catch (e) {
                    console.log(e)
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    var confere = function () {
        signIn();
        navigation.navigate('Tab');
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
                    placeholder="Email"
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

                <Pressable onPress={handleForgotPassword}
                            style={styles.pressableTextForgotPassword}>
                    <Text style={styles.underlinedText}>Esqueceu a senha?</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Registrar')} 
                            style={styles.pressableTextSignUp}>
                    <Text style={[styles.underlinedText, styles.signUp]}>Cadastre-se</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;