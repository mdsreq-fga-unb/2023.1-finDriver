import React, { useEffect, useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Image, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';

const Home = ({ navigation }) => {

    function signIn(id) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
/*                 email: email,
                password: password, */
            })
        };
        fetch('http://192.168.1.5:3000/api/user/login', requestOptions)
            .then(response => response.json())
            .then(data => {
            })
            .catch((e) => {
                console.log(e);
            });
    }
    return (
        <KeyboardAvoidingView>
            <ScrollView>

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

                <View style={styles.raceContainer}>
                    <Text style={styles.white}>Minhas corridas</Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.white}>casa</Text>
                    <Text style={styles.white}>mais</Text>
                    <Text style={styles.white}>config</Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    profitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1C5560',
        padding: 10,
        marginHorizontal: 25,
        marginTop: 35,
        borderRadius: 50,

    },
    weeklyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 25,
        padding: 15,
    },
    earnExpenseContainer: {
        backgroundColor: '#1C5560',
        alignContent: 'space-between',
        width: 150,
        height: 75,
        borderRadius: 5,
    },
    white: {
        color: 'white',
        padding: 3,
        marginHorizontal: 10,
    },
    value: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 22,
    },
    kmText: {
        fontSize: 20,
        fontFamily: '',
        fontWeight: '500',
        color: '#001F36',
    },
    kmContainer: {
        alignSelf: 'center',
        padding: 10
    },
    raceContainer: {
        backgroundColor: '#1C5560',
        marginHorizontal: 25,
        height: 150,
        marginBottom: 40,
        borderRadius: 10,

    },
    footer: {
        flexDirection: 'row',
        // position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#1C5560',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
export default Home;