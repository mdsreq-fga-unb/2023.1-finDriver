import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';
import { getDefaultLibFilePath } from 'typescript';
import styles from './styles';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>
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
                    autoComplete= "off"
                    autoCorrect={false}
                    cursorColor="#001f36"
                    secureTextEntry={true}
                />
                <Pressable
                    style={styles.button}
                    onPress={() => Alert.alert('Dados de login', [email, password].join('\n'))}
                >
                    <Text style={styles.textButton}>Entrar</Text>
                </Pressable>

                <Pressable onPress={() => Alert.alert('Tá muito esquecidinho em')}
                            style={styles.pressableTextForgotPassword}>
                    <Text style={styles.underlinedText}>Esqueceu a senha?</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Registrar')}
                    style={styles.pressableTextSignUp}>
                    <Text style={[styles.underlinedText , styles.signUp]}>Cadastre-se</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;