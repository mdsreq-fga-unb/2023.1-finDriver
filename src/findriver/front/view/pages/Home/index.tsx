import React, { useEffect, useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Image, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';
import RideCard from '../../components/RideCard'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SeeRides from '../SeeRide';
import SeeExpenses from '../SeeExpenses';
import Settings from '../Settings';

import styles from './styles';
import EditRide from '../EditRide';
import ExpenseCard from '../../components/ExpenseCard';
import Header from '../../components/Header';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    
    return(
        <View style={styles.container}>
            <Header/>
            <ScrollView>

                <View style={styles.profitContainer}>
                    <Text style={styles.profitText}>Lucro do dia</Text>
                    <Text style={styles.profitText}>R$ 100.000,00</Text>
                </View>

                <View style={styles.summaryContainer}>
                        <Text style={styles.title}>Resumo detalhado</Text>

                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryTextTitle}>Hoje</Text>
                        <Text style={styles.summaryText}>⬩Ganhos: </Text>
                        <Text style={styles.summaryText}>⬩Gastos: </Text>
                        <Text style={styles.summaryText}>⬩Saldo: </Text>
                    </View>

                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryTextTitle}>Esta Semana</Text>
                        <Text style={styles.summaryText}>⬩Ganhos: </Text>
                        <Text style={styles.summaryText}>⬩Gastos: </Text>
                        <Text style={styles.summaryText}>⬩Saldo: </Text>
                    </View>  
                </View>

                <View style={styles.kmContainer}>
                    <Text style={styles.kmText}>Você rodou </Text>
                    <Text style={[styles.kmText, {fontWeight: '700'}]}>100.000 km</Text>

                </View>
                                  
                <View style={{backgroundColor: 'transparent'}}> 
                    <Text style={styles.title}>Corridas</Text>
                    <View style={styles.rideExpenseContainer}>
                        <RideCard/>
                        <RideCard/>
                    </View>

                    <Text style={styles.title}>Despesas</Text>
                    <View style={styles.rideExpenseContainer}>  
                        <ExpenseCard/>
                        <ExpenseCard/>
                    </View>
                </View>
                </ScrollView>
        </View>
        
    );    
}

export default Home;