import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView} from 'react-native';
import Picker from '@ouroboros/react-native-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import dados from "../../../dados";

const AddExpense = ({ navigation, route }) => {
    const [cause, setCause] = useState('');
    const [value, setValue] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [type, setType] = useState('');
    const [token, setToken] = useState('');

    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                setToken(value)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleAddExpense = () => {
        if(!cause || !value || !selectedDate || !type){
            Alert.alert('Erro','Por favor, preencha todos os campos');
        } else {
            const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: token.toString(),
            },
            body: JSON.stringify({
                value: value,
                type: type,
                description: cause,
                date: selectedDate
            }),
          };
          fetch(`${dados.Url}/api/expense/adicionar`, requestOptions)
            .then((response) => {
              console.log(response.status);
              if (response.status === 201) {
                Alert.alert("Despesa cadastrada com sucesso");
                navigation.goBack();
              } else {
                Alert.alert("Erro", "Ocorreu um erro ao cadastrar a despesa");
              }
            })
            .catch((error) => {
              console.log(error);
            });
            
        }
    };

    useEffect(() => {
        getToken();  
    }, [token]);

    return(
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>

            <View style={styles.container}>
            
                <View>
                    <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>
                </View>

                <View>
                    <Text style={styles.title}>Cadastro de despesa</Text>
                </View>

                <View style={styles.componentsContainer}>
                    <View style={styles.causeValueContainer}>
                        <Text style={styles.label}>Causa</Text>
                        <TextInput
                            style={styles.input}
                            value={cause}
                            onChangeText={cause => setCause(cause)}
                            placeholder="Causa"
                            keyboardType="default"
                            cursorColor="#001f36"
                        />

                        <Text style={styles.label}>Valor</Text>
                        <TextInput
                            style={styles.input}
                            value={value}
                            onChangeText={value => setValue(value)}
                            placeholder="00.00"
                            cursorColor="#001f36"
                        />
                    </View>

                    <View style={styles.dataTypeContainer}>
                        <Text style={styles.label}>Data</Text>
                        <TextInput
                            style={styles.input}
                            value={selectedDate}
                            onChangeText={selectedDate => setSelectedDate(selectedDate)}
                            placeholder="YYYY/MM/DD"
                            keyboardType="numbers-and-punctuation"
                            cursorColor="#001f36"
                        />
                    
                        <Text style={styles.label}>Tipo</Text>
                        <Picker
                            value={type}
                            onChanged={setType}
                            options={[
                                {value: '', text: ''},
                                {value: 'GAS', text: 'Gasolina'},
                                {value: 'FOOD', text: 'Comida'},
                                {value: 'TOLL', text: 'Pedágio'},
                                {value: 'RENT', text: 'Aluguel de veículo'},
                            ]}
                            style={styles.picker}
                        />
                    </View>

                    <Pressable 
                        style={styles.button}
                        onPress={() => handleAddExpense()}>
                        <Text style={styles.textButton}>Adicionar</Text>
                    </Pressable>

                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default AddExpense;