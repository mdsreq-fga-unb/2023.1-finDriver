import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import Picker from '@ouroboros/react-native-picker';

import ExpenseCard from '../../components/ExpenseCard';
import RideCard from '../../components/RideCard';

const SeeExpenses = ({ route, navigation }) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Minhas Despesas</Text>
            </View>

            <View>
                <ExpenseCard/>
                <RideCard/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 10,
        backgroundColor: '#1C5560'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        margin: 20,
        fontSize: 30,
    }
});


export default SeeExpenses;