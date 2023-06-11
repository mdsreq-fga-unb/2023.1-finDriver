import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import Picker from '@ouroboros/react-native-picker';

import RideCard from '../../components/RideCard'
import styles from './styles';

const SeeRides = ({ route, navigation }) => {

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
                <RideCard/>
                <RideCard/>
                <RideCard/>
                <RideCard/>
                <RideCard/>
                <RideCard/>
                <RideCard/>
                <RideCard/>
                <RideCard/>
                <RideCard/>

            </View>
        </ScrollView>
    );
}

export default SeeRides;