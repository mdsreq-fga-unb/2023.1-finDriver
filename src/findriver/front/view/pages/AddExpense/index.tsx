import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';
import Picker from '@ouroboros/react-native-picker';

const AddExpense = ({ navigation, route }) => {
    //const { name, email, password } = route.params

    const [cause, setCause] = useState('');
    const [value, setValue] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [type, setType] = useState('');



    const handleAddExpense = () => {
        if(!cause || !value || !selectedDate || !type){
            Alert.alert('Erro','Por favor, preencha todos os campos');
        } else {
            
        }
    };

    return(
        <View style={styles.container}>
           
            <View>
                <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>
            </View>

            <View>
                <Text style={styles.title}>Cadastro de despeza</Text>
            </View>

            <View style={styles.componentsContainer}>
                <View style={styles.nameEmailContainer}>
                    <Text style={styles.label}>Causa</Text>
                    <TextInput
                        style={styles.input}
                        value={cause}
                        onChangeText={cause => setCause(cause)}
                        placeholder="Name"
                        keyboardType="default"
                        cursorColor="#001f36"
                    />

                    <Text style={styles.label}>Valor</Text>
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={value => setValue(value)}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoComplete="email"
                        cursorColor="#001f36"
                    />
                </View>

                <View style={styles.passwordContainer}>
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
                        onChanged={setType}
                        options={[
                            {value: '', text: ''},
                            {value: 'GAS', text: 'Gasolina'},
                            {value: 'FOOD', text: 'Comida'},
                            {value: 'TOLL', text: 'Pedágio'},
                            {value: 'RENT', text: 'Aluguel de veículo'},
                        ]}
                        style={styles.picker}
                        value={type}
                    />
                </View>

                <Pressable 
                    style={styles.button}
                    onPress={() => handleAddExpense()}>
                    <Text style={styles.textButton}>Adicionar</Text>
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
    logo: {
        marginTop: -30,
        width: 250,
        height: 250,
    },
    componentsContainer:{
    },
    title:{
        color: '#1c5560',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
    },
    nameEmailContainer: {
        marginBottom: 30,

    },
    passwordContainer: {
        marginBottom: 25,
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
    link: {
        alignSelf: 'flex-end',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#001f36',
        textDecorationLine: 'underline',
        textDecorationColor: '#001f36',
    },
    picker: {
        borderColor: '#e0e0e0',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 5,
        padding: 7,
    },
});

export default AddExpense;