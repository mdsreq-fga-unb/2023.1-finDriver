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

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {

    const [km, setKm] = useState(0);

    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                return value;
                //onsole.log(value)
            }
        } catch (e) {
            console.log(e)
        }}
        
        const token = getToken()
        console.log(token)
        

        useEffect(() => {
            getDayKm(token);
        }, [])


    function getDayKm(token) {

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            }
        };
        fetch('http://192.168.0.25:300/api/ride/kmRodados', requestOptions)
            .then(response => response.json())
            .then(data => {
                try {
                    if (data) {
                        const km = data
                        setKm(km.value)
                        console.log(data.value)
                    }

                } catch (e) {
                    console.log(e)
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F5F5F7" />
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
                        {/* {rides.length > 0 ? (rides.map((ride) => (
                            <RideCard key={ride.id} ride={ride}/>
                        ))) : (
                            <Text >Nenhuma corrida cadastrada!</Text>
                        )} */}
                        <RideCard key={0} ride={null}/>
                        
                    </View> 
                        

                    <Text style={styles.title}>Despesas</Text>
                    <View style={styles.rideExpenseContainer}>  
                    
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

export default Home;