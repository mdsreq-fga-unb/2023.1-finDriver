import React, { useEffect, useState } from 'react';
import { View, Image, Text, Alert, Pressable, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
import { isConstructorDeclaration } from 'typescript';
import { response } from 'express';

const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const comparePassword = () => {
        return repeatPassword === password ? true : false;
    }

    const validateEmail = (email: string) => {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (regex.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    const handleRegister = () => {

        const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

        const emailValidate = validateEmail(email);
        
        if (!name || !email || !password || !repeatPassword) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
        } else if (!comparePassword()) {
            Alert.alert('Erro', 'As senhas não coincidem. Por favor, tente novamente.');
        } else if (password.length < 8){
            Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres')
        } else if (!specialChars.test(password)){
            Alert.alert('Erro', 'A senha deve ter pelo menos 1 caracteres especial($@&*+=_#%)');               
        } else if (!emailValidate) {
            Alert.alert('Erro', 'O email inserido não é válido.')
        } else {
            navigation.navigate('Perguntas',{name: name, email: email, password: password});
        }
    };

    return(
    <ScrollView >
        <KeyboardAvoidingView style={styles.container}>               
            <View>  
                <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>
            </View>

            <View style={styles.componentsContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={name => setName(name)}
                        placeholder="Nome"
                        keyboardType="default"
                        cursorColor="#001f36"
                    />
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={email => setEmail(email)}
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoComplete="email"
                        cursorColor="#001f36"
                    />
                </View>

                <View style={styles.bottomContainer}>
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
                
                    <Text style={styles.label}>Confirme sua senha</Text>
                    <TextInput
                        style={styles.input}
                        value={repeatPassword}
                        onChangeText={repeatPassword => setRepeatPassword(repeatPassword)}
                        placeholder="Confirme sua senha"
                        keyboardType="default"
                        autoComplete= "off"
                        autoCorrect={false}
                        cursorColor="#001f36"
                        secureTextEntry={true}
                    />
                    <Text style={styles.text}>A senha deve conter ao menos 8 caracteres, sendo um deles um caracter especial!</Text>
                </View>
                
                <View style={styles.pressableContainer}>
                    <Pressable 
                        style={styles.button}
                        onPress={() => handleRegister()}>
                        <Text style={styles.textButton}>Continuar</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => navigation.navigate('Entrar')}
                        style={styles.pressableTextGoToLogin}>
                        <Text style={styles.link}>Já possuo conta</Text>
                    </Pressable>
                </View>
            </View>

        </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default Register;