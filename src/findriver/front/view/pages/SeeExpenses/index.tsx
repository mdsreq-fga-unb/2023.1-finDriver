import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import Picker from '@ouroboros/react-native-picker';

import Header from '../../components/Header';
import ExpenseCard from '../../components/ExpenseCard';
import RideCard from '../../components/RideCard';
import styles from './styles';

const SeeExpenses = ({ route, navigation }) => {

    const handleAddExpenseButton = () => {

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
                        <ExpenseCard/>
                        <ExpenseCard/>
                        <ExpenseCard/>
                        <ExpenseCard/>
                        <ExpenseCard/>
                        <ExpenseCard/>
                        <ExpenseCard/>
                        <ExpenseCard/>
                        <ExpenseCard/>
                        <ExpenseCard/>
                        <ExpenseCard/>
                        <ExpenseCard/>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SeeExpenses;