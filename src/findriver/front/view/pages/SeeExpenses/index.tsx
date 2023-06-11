import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';

import ExpenseCard from '../../components/ExpenseCard';
import styles from './styles';

const SeeExpenses = ({ route, navigation }) => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJpZCI6MjQ1fV0sImlhdCI6MTY4NjQ2NDQ3Nn0.RHteRYmWNfjL8hktY89PFJ2rXsykTa29lvxGQstchjM';
    
    const [expense, setExpense] = useState([]);

    const fetchExpense =  async () => {
        try{
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': token,
                },
            };
            fetch('http://192.168.0.25:3000/api/expense/ver', requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.value);
                    setExpense(data.value);
                    console.log(expense);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        } 
    }

    useEffect(() => {
        fetchExpense();
    }, []);

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
                    {expense && expense.length > 0 ? (expense.map((expense) => (
                    <ExpenseCard key={expense.id} expense={expense}/>
                ))) : (
                    <Text style={styles.noExpenseText}>Nenhuma despesa cadastrada!</Text>
                )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SeeExpenses;