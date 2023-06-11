import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import Picker from '@ouroboros/react-native-picker';

import ExpenseCard from '../../components/ExpenseCard';
import RideCard from '../../components/RideCard';
import styles from './styles';

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

export default SeeExpenses;