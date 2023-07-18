import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';
import Picker from '@ouroboros/react-native-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import dados from "../../../dados";

const AddExpense = ({ navigation, route }) => {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [type, setType] = useState('');
    const [token, setToken] = useState('');
    
    // const selectedStartDate = new Date();
    // const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    
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
        if(!description || !value || !type){
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
                description: description,
                date: selectedDate,
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
    <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
            
            <View style={styles.container}>
            
                <View>
                    <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>
                </View>

                <View>
                    <Text style={styles.title}>Cadastro de despesa</Text>
                </View>

                <View style={styles.componentsContainer}>
                        <Text style={styles.label}>Valor</Text>
                        <TextInput
                            style={styles.input}
                            value={value}
                            onChangeText={value => setValue(value)}
                            placeholder="00.00"
                            keyboardType='numeric'
                            cursorColor="#001f36"
                        />
                        <Text style={styles.label}>Data</Text>
                        {/* <CalendarPicker value={selectedDate}
                        startFromMonday={true}
                        minDate={20/12/1900}
                        maxDate={20/12/2035}
                        todayBackgroundColor="#f2e6ff"
                        enableDateChange={true}
                        selectedDayColor="#7300e6"
                        selectedDayTextColor="#FFFFFF"
                         onDateChange={(selectedDate) => setSelectedDate(selectedDate)} /> */}
                        {/* <TextInput
                            style={styles.input}
                            value={selectedDate}
                            onChangeText={selectedDate => setSelectedDate(selectedDate)}
                            placeholder="YYYY/MM/DD"
                            keyboardType="phone-pad"
                            cursorColor="#001f36"
                        /> */}
                                
                        <Text style={styles.label}>Tipo</Text>
                        <Picker
                            value={type}
                            onChanged={setType}
                            options={[
                                {value: '', text: ''},
                                {value: 'Gasolina', text: 'Gasolina'},
                                {value: 'Comida', text: 'Comida'},
                                {value: 'Pedágio', text: 'Pedágio'},
                                {value: 'Aluguel de veículo', text: 'Aluguel de veículo'},
                                {value: 'Outros', text: 'Outros'}
                            ]}
                            style={styles.picker}
                        />

                        <Text style={styles.label}>Descrição</Text>
                        <TextInput
                            style={styles.input}
                            value={description}
                            onChangeText={description => setDescription(description)}
                            placeholder="Causa"
                            keyboardType="default"
                            cursorColor="#001f36"
                        />
                    <Pressable 
                        style={styles.button}
                        onPress={() => handleAddExpense()}>
                        <Text style={styles.textButton}>Adicionar</Text>
                    </Pressable>

                </View>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default AddExpense;