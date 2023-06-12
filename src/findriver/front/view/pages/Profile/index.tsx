import React, { useEffect, useState } from 'react';
import { View, Image, Text, Pressable, StyleSheet, Alert} from 'react-native';

import styles from './styles';
import dados from '../../../dados';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = ({ navigation }) => {

    const [user, setUser] = useState();
    const [token, setToken] = useState('');
    
    const fetchUser = async () => {
        try{
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': token.toString(),
                },
            };
            fetch(`${dados.Url}/api/user/`, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.value[0])
                    setUser(data.value[0])
                })
                .catch((err) => console.log(err));
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
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
    
        getToken();
        fetchUser();

    }, []);

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>
            <View>
                <Text style={styles.title}>Perfil</Text>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.text}>{user?.name}</Text>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.text}>{user?.email}</Text>

                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate('Editar Perfil')}>
                    <Text style={styles.textButton}>Editar</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Profile;