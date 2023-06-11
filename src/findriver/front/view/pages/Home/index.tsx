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
import NavBar from '../../components/NavBar';
import EditRide from '../EditRide';
import ExpenseCard from '../../components/ExpenseCard';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    
    return(
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.profitContainer}>
                        <Text style={styles.white}>Lucro do dia</Text>
                        <Text style={styles.white}>R$ 100.000,00</Text>
                    </View>

                    <View style={styles.weeklyContainer}>
                        <View >
                            <Pressable style={styles.earnExpenseContainer}>
                                <Text style={styles.white}>Ganho semanal</Text>
                                <Text style={[styles.white, styles.value]}>R$ 150.000,00</Text>
                            </Pressable>
                        </View>

                        <View >
                            <Pressable style={styles.earnExpenseContainer}>
                                <Text style={styles.white}>Gasto semanal</Text>
                                <Text style={[styles.white, styles.value]}>R$ 50.000,00</Text>
                            </Pressable>
                        </View>
                    </View>
                    
                    <View style={styles.kmContainer}>
                        <Text style={styles.kmText}>Você rodou 100.000 km</Text>
                    </View>

                    <View style={styles.rideExpenseContainer}>
                        <Text style={styles.white}>Minhas despesas</Text>
                        <RideCard/>
                        <ExpenseCard/>
                    </View>

                    <View style={styles.rideExpenseContainer}>
                        <Text style={styles.white}>Minhas corridas</Text>
                        <RideCard/>
                        <ExpenseCard/>
                    </View>
                </View>
                </ScrollView>
                {/* <NavBar /> */}
        </View>
        
    );    
}

export default Home;