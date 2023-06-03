import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';
import { getDefaultLibFilePath } from 'typescript';

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

                <Pressable onPress={() => Alert.alert('Tá muito esquecidinho em')}>
                    <Text style={styles.underlinedText}>Esqueceu a senha?</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={[styles.underlinedText , styles.signUp]}>Cadastre-se</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: -10,
        width: 300,
        height: 300,
    },
    label: {
        color: '#1c5560',
        textAlign: 'left',
        fontSize: 13,
    },
    input: {
        width: 290,
        height: 50,
        padding: 10,
        borderColor: '#e0e0e0',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 15,
    },
    button: {
        backgroundColor: '#001f36',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 120,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    underlinedText: {
        fontSize: 15,
        color: '#1C5560',
        textAlign: 'center',
        marginTop: 20,
        textDecorationLine: 'underline',
        textDecorationColor: '#1C5560',
    },
    signUp: {
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'right',
        marginTop: 80,
    },
});

export default Login;