import { View, ScrollView, KeyboardAvoidingView, Image, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';
import React, {useState, useEffect} from "react";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavBar = ({}) => {


    const handleHome = () => {
    //    navigation.navigate('Inicio');
    }
    const handleCar = () => {
    //    navigation.navigate('Ver Corridas');
    }
    
    const handleExpenses = () => {
    //    navigation.navigate();
    }
    
    const handleSettings = () => {
    //    navigation.navigate();
    }
    
    return (
        <View style={styles.container}>
            <Pressable style={styles.clicableArea} onPressIn={() => handleHome()}>
                <Icon.Button name="home" size={28} style={styles.button}></Icon.Button>
                <Text style={styles.text}>Inicio</Text>
            </Pressable>
            <Pressable style={styles.clicableArea} onPressIn={() => handleCar()}>
                <Icon.Button name="car" size={32} style={styles.button}></Icon.Button>
                <Text style={styles.text}>Corrida</Text>
            </Pressable>
            <Pressable style={styles.clicableArea} onPressIn={handleExpenses}>
                <Icon.Button name="shopping-basket" size={30} style={styles.button}></Icon.Button>
                <Text style={styles.text}>Despesa</Text>
            </Pressable>
            <Pressable style={styles.clicableArea} onPress={handleSettings}>
                <Icon.Button name="user-cog" size={25} style={styles.button}></Icon.Button>
                <Text style={styles.text}>Ajustes</Text>
            </Pressable>
        </View>
    )
}

export default NavBar;