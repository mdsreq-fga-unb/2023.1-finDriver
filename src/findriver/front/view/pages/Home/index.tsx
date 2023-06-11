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
//import NavBar from '../../components/NavBar';
import EditRide from '../EditRide';
import ExpenseCard from '../../components/ExpenseCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        fetch('http://192.168.1.5:3000/api/ride/kmRodados', requestOptions)
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
            <ScrollView>
                <View>
                    <View style={styles.kmContainer}>
                        <Text style={styles.kmText}>Você rodou 100.000 km</Text>
                    </View>
                    
                    <View style={styles.kmContainer}>
                        <Text style={styles.kmText}>Resumo diário:</Text>
                    </View>

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
                        {/* {km.map(kms =>  */}
                        <Text style={styles.kmText}>Você rodou {km} km</Text>
                    </View>

                    

                    <View style={styles.rideExpenseContainer}>
                        <Text style={styles.white}>Minhas despesas</Text>
                        <RideCard />
                        <ExpenseCard />
                    </View>

                    <View style={styles.rideExpenseContainer}>
                        <Text style={styles.white}>Minhas corridas</Text>
                        <RideCard />
                        <ExpenseCard />
                    </View>
                </View>
            </ScrollView>
            {/* <NavBar /> */}
        </View>

    );
}

export default Home;