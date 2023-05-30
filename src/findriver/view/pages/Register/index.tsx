import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';

const Login: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [repeatPassword, setrepeatPassword] = useState('');

    const comparePassword = (password, repeatPassword) => {
        return repeatPassword === password ? 1 : 0;
    }

    return(
        <View style={styles.container}>
            <View style={styles.componentsContainer}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    placeholder="Nome"
                    keyboardType="default"
                    cursorColor="#001f36"
                />
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoComplete="email"
                    cursorColor="#001f36"
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    keyboardType="default"
                    autoComplete= "off"
                    autoCorrect={false}
                    cursorColor="#001f36"
                    secureTextEntry={true}
                />
                
                <Text style={styles.label}>Confirme sua senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    keyboardType="default"
                    autoComplete= "off"
                    autoCorrect={false}
                    cursorColor="#001f36"
                    secureTextEntry={true}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Registrar</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    componentsContainer:{

    },
    label: {
        color: '#1c5560',
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: 13,
    },
    input: {
        width: 290,
        height: 50,
        padding: 10,
        borderColor: '#e0e0e0',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 40,
        fontSize: 15,
    },
    button: {
        backgroundColor: '#001f36',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default Login;