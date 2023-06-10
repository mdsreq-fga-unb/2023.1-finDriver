import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import Picker from '@ouroboros/react-native-picker';

const SecurityQuestion = ({ route }) => {
    const [questionOne, setQuestionOne] = useState('');
    const [answerOne, setAnswerOne] = useState('');
    const [questionTwo, setQuestionTwo] = useState('');
    const [answerTwo, setAnswerTwo] = useState('');

    const { name, email, password } = route.params;

    const handleCreateUser = () => {
        if (!questionOne || !answerOne || !questionTwo || !answerTwo) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
        } else {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    answerOne: answerOne,
                    answerTwo: answerTwo,
                    questionOne: questionOne,
                    questionTwo: questionTwo
                })

            };
            fetch('http://192.168.0.25:19000/api/user/cadastro', requestOptions)
                .then((response) => {
                    console.log(response.status)
                    if (response.status == 201) {
                        Alert.alert('Usuário cadastrado com sucesso!');
                        navigation.navigate('Entrar'); 
                    }

                    else {
                        Alert.alert('E-mail ou senha inválidos');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
                //navigation.navigate('Inicio'); 
            }
        }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
            <View>
                <Image source={require('../../assets/logoCarro.png')} style={styles.logo} />
            </View>
            <View>
                <Text style={styles.text}>Escolha duas perguntas para serem utilizadas em caso da necessidade de redefinição de senha.</Text>
            </View>
            <View style={styles.componentsContainer}>
                <View style={styles.questionOneContainer}>
                    <Text style={styles.label}>Pergunta 1</Text>
                    <Picker
                        onChanged={setQuestionOne}
                        options={[
                            {value: '', text: ''},
                            {value: 'food', text: 'Qual sua comida favorita?'},
                            {value: 'pet', text: 'Qual o nome do seu primeiro Pet?'},
                            {value: 'fear', text: 'Qual o seu maior medo?'},
                            {value: 'city', text: 'Qual a sua cidade natal?'},
                        ]}
                        style={styles.picker}
                        value={questionOne}
                    />
                    <Text style={styles.label}>Resposta </Text>
                    <TextInput
                        style={styles.input}
                        value={answerOne}
                        onChangeText={answerOne => setAnswerOne(answerOne)}
                        placeholder="Resposta"
                        cursorColor="#001f36"
                    />
                </View>
                <View style={styles.questionTwoContainer}>
                    <Text style={styles.label}>Pergunta 2</Text>
                    <Picker
                        onChanged={setQuestionTwo}
                        options={[
                            {value: '', text: ''},
                            {value: 'food', text: 'Qual sua comida favorita?'},
                            {value: 'pet', text: 'Qual o nome do seu primeiro Pet?'},
                            {value: 'fear', text: 'Qual o seu maior medo?'},
                            {value: 'city', text: 'Qual a sua cidade natal?'},
                        ]}
                        style={styles.picker}
                        value={questionTwo}
                    />
                    <Text style={styles.label}>Resposta</Text>
                    <TextInput
                        style={styles.input}
                        value={answerTwo}
                        onChangeText={answerTwo => setAnswerTwo(answerTwo)}
                        placeholder="Resposta"
                        cursorColor="#001f36"
                    />
                </View>


                <Pressable
                    style={styles.button}
                    onPress={() => handleCreateUser()}>
                    <Text style={styles.textButton}>Registrar</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: -20,
        marginBottom: 0,
        width: 250,
        height: 250,
    },
    text: {
        fontSize: 15,
        color: '#696969',
        textAlign: 'justify',
        marginHorizontal: 40,
        marginBottom: 35,
    },
    componentsContainer: {
    },
    questionOneContainer: {
        marginBottom: 15,
    },
    questionTwoContainer: {
        marginBottom: 25,
    },
    label: {
        color: '#1c5560',
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: 13,
    },
    picker: {
        borderColor: '#e0e0e0',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 5,
        padding: 7,
    },
    input: {
        width: 290,
        height: 50,
        padding: 7,
        borderColor: '#e0e0e0',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 15,
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

export default SecurityQuestion;