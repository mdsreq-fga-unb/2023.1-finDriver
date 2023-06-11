import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import Picker from '@ouroboros/react-native-picker';

import ExpenseCard from '../../components/ExpenseCard';
import RideCard from '../../components/RideCard';
import styles from './styles';

const SeeExpenses = ({ route, navigation }) => {

    const handleAddExpenseButton = () => {

    }

    return(
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>Minhas Despesas</Text>
            </View>
            <View style={styles.line}/>

            <Pressable style={styles.addExpenseButton} onPress={handleAddExpenseButton}>
                <Text style={styles.addExpenseText}>Adicionar Despesa</Text>
            </Pressable>


            <View>
                <ExpenseCard/>
            </View>
        </ScrollView>
    );
}

export default SeeExpenses;