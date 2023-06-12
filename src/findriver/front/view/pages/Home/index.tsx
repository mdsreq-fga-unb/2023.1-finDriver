import React, { useEffect, useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Image, Text, StyleSheet, Alert, Pressable, TextInput, StatusBar } from 'react-native';
import RideCard from '../../components/RideCard'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './styles';
import EditRide from '../EditRide';
import ExpenseCard from '../../components/ExpenseCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import dados from '../../../dados';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {

    const [km, setKm] = useState(0);
    const [weekAverageExpense, setweekAverageExpense] = useState(0);
    const [weekAverageProfit, setweekAverageProfit] = useState(0);
    const [dayAverageProfit, setdayAverageProfit] = useState(0);
    const [dayAverageExpense, setdayAverageExpense] = useState(0);
    const [token, setToken] = useState('');

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

    function getDayKm(token) {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            }
        };
        fetch(`${dados.Url}/api/ride/kmRodados`, requestOptions)
        fetch(`${dados.Url}/api/ride/kmRodados`, requestOptions)
            .then(response => response.json())
            .then(data => {
                try {
                    if (data) {
                        const km = data
                        setKm(km.value)
                        //console.log(km.value)
                    }

                } catch (e) {
                    console.log(e)
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    function getExpense(token) {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            }
        };
        fetch(`${dados.Url}/api/expense/mediaDespesa`, requestOptions)
            .then(response => response.json())
            .then(data => {
                try {
                    if (data) {
                        setweekAverageExpense(data.values.averageExpense)
                        setdayAverageExpense(data.values.averageDayExpense)
                    }

                } catch (e) {
                    console.log(e)
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    function getProfit(token) {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            }
        };
        fetch(`${dados.Url}/api/ride/mediaLucro`, requestOptions)
            .then(response => response.json())
            .then(data => {
                try {
                    if (data) {
                        console.log(data.values.averageProfit)
                        console.log(data.values.averageDayProfit)
                        setweekAverageProfit(data.values.averageProfit)
                        setdayAverageProfit(data.values.averageDayProfit)
                    }

                } catch (e) {
                    console.log(e)
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    useEffect(() => {
        getToken();
        getDayKm(token);
        getExpense(token);
        getProfit(token);
    }, [token, km, weekAverageExpense, dayAverageProfit, weekAverageProfit, dayAverageExpense]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F5F5F7" />
            <Header />
            <ScrollView>

                <View style={styles.profitContainer}>
                    <Text style={styles.profitText}>Lucro do dia</Text>
                    <Text style={styles.profitText}>R$ {(dayAverageProfit - dayAverageExpense).toFixed(2)}</Text>
                </View>

                <View style={styles.summaryContainer}>
                    <Text style={styles.title}>Resumo detalhado</Text>

                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryTextTitle}>Hoje</Text>
                        <Text style={styles.summaryText}>⬩Ganhos: {dayAverageProfit} </Text>
                        <Text style={styles.summaryText}>⬩Gastos: {dayAverageExpense} </Text>
                        <Text style={styles.summaryText}>⬩Saldo: {(dayAverageProfit - dayAverageExpense).toFixed(2)} </Text>
                    </View>

                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryTextTitle}>Esta Semana</Text>
                        <Text style={styles.summaryText}>⬩Ganhos:{weekAverageProfit} </Text>
                        <Text style={styles.summaryText}>⬩Gastos: {weekAverageExpense} </Text>
                        <Text style={styles.summaryText}>⬩Saldo: {(weekAverageProfit - weekAverageExpense).toFixed(2)}</Text>
                    </View>
                </View>

                <View style={styles.kmContainer}>
                        <Text style={styles.kmText}>Você rodou </Text>
                        <Text style={[styles.kmText, {fontWeight: '700'}]}>{km} km</Text>
                    </View>
                    <View style={styles.kmContainer}>
                        <Text style={[styles.kmText]}>Sua média de gastos diária é: </Text>
                        <Text style={[styles.kmText, {fontWeight: '700'}]}>R$ </Text>
                    </View>
                                      
                    <View style={{backgroundColor: 'transparent'}}> 
                        {/* <Text style={styles.title}>Corridas</Text>
                        <View style={styles.rideExpenseContainer}>
                            <RideCard/>
                        </View> 
                            
                        <Text style={styles.title}>Despesas</Text>
                        <View style={styles.rideExpenseContainer}>  
                            <ExpenseCard/>
                        </View> */}
                    </View>
                </ScrollView>
            </View>
    
        );
    }
    
    export default Home;