import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import Picker from '@ouroboros/react-native-picker';

import Header from '../../components/Header';
import ExpenseCard from '../../components/ExpenseCard';
import RideCard from '../../components/RideCard';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dados from '../../../dados';

const SeeExpenses = ({ route, navigation }) => {

    const [expense, setExpense] = useState([]);
    const [token, setToken] = useState('');

    const fetchExpense = async () => {
        try{
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': token.toString(),
                },
            };
            fetch(`${dados.Url}/api/expense/ver`, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    setExpense(data.value);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        const getToken = async () => {
            try {
                const value = await AsyncStorage.getItem('token')
                if (value !== null) {
                    //console.log(token)
                    setToken(value)
                }
            } catch (e) {
                console.log(e)
            }
        } 

        getToken();
        fetchExpense();
       
    }, [token, expense]);

    const handleAddExpenseButton = () => {
        navigation.navigate("Cadastrar Despesa")

    }

    return(
        <View style={styles.container}>
            <ScrollView >
                <View>
                    <Text style={styles.title}>Minhas Despesas</Text>
                    <View style={styles.line}/>

                    <Pressable style={styles.addExpenseButton} onPress={handleAddExpenseButton}>
                        <Text style={styles.addExpenseText}>Adicionar Despesa</Text>
                    </Pressable>

                    <View>
                        {expense && expense.length > 0 ? (expense.map((expense) => (<ExpenseCard key={expense.id} expense={expense} />
                        ))) : (
                            <Text style={styles.noExpensesText}>Nenhuma despesa cadastrada!</Text>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SeeExpenses;