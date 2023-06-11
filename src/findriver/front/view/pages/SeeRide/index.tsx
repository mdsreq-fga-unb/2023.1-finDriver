import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import Picker from '@ouroboros/react-native-picker';

import RideCard from '../../components/RideCard'
import styles from './styles';

const SeeRides = ({ route, navigation }) => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJpZCI6MjQ1fV0sImlhdCI6MTY4NjQ2NDQ3Nn0.RHteRYmWNfjL8hktY89PFJ2rXsykTa29lvxGQstchjM';

    const [rides, setRides] = useState([]);

    const fetchRides = async () => {
        try{
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': token,
                },
            };
            fetch('http://192.168.1.185:3000/api/ride/ver', requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    setRides(data.value);
                    //console.log('dados: \n');
                    //console.log(data);

                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        } 
    }
    fetchRides();

    const handleAddRideButton = () => {
        navigation.navigate("Cadastrar Corrida")
    }

    return(
        <ScrollView style={styles.container}>
                <Text style={styles.title}>Minhas Corridas</Text>
                <View style={styles.line}/>
                
                <Pressable style={styles.addRideButton} onPress={handleAddRideButton}>
                    <Text style={styles.addRideText}>Adicionar Corrida</Text>
                </Pressable>
            <View>
                {rides && rides.length > 0 ? (rides.map((ride) => (
                    <RideCard key={ride.id} ride={ride} />
                ))) : (
                    <Text style={styles.noRidesText}>Nenhuma corrida cadastrada!</Text>
                )}
            </View>
        </ScrollView>
    );
}

export default SeeRides;