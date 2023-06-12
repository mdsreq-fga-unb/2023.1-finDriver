import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import Picker from '@ouroboros/react-native-picker';
import dados from "../../../dados";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

const EditExpense = ({ navigation, route }) => {
    //pegar parametros da despesa a ser editada
    const { id } = route.params

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

    const handleEditExpense = () => {
        if(!cause || !value || !selectedDate || !type){
            Alert.alert('Erro','Por favor, preencha todos os campos');
        } else {
            const requestOptions = {
                method: "PUT",
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
              fetch(`${dados.Url}/api/expense/editar/${id}`, requestOptions)
                .then((response) => {
                  console.log(response.status);
                  if (response.status === 200) {
                    Alert.alert("Despesa atualizada com sucesso");
                    navigation.goBack();
                  } else {
                    Alert.alert("Erro", "Ocorreu um erro ao atualizar a despesa");
                    navigation.goBack();
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
                    <Text style={styles.title}>Edição de despesa</Text>
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
                            placeholder="00,00"
                            cursorColor="#001f36"
                        />
                    </View>

                    <View style={styles.dataTypeContainer}>
                        <Text style={styles.label}>Data</Text>
                        <TextInput
                            style={styles.input}
                            value={selectedDate}
                            onChangeText={selectedDate => setSelectedDate(selectedDate)}
                            placeholder="YYY/MM/DD"
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
                        onPress={() => handleEditExpense()}>
                        <Text style={styles.textButton}>Confirmar</Text>
                    </Pressable>

                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default EditExpense;