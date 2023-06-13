//testar na pr
import React, { useEffect, useState } from 'react';
import { View, Image, Text, Pressable, StyleSheet, Alert, RefreshControl, ScrollView} from 'react-native';

import styles from './styles';
import dados from '../../../dados';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = ({ navigation }) => {

    const [user, setUser] = useState({id:'', name:'', email:''});
    const [token, setToken] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    
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

    const fetchDeleteAccount = () => {
        try{
          const requestOptions = {
            method: 'DELETE',
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: token.toString(),
            },
          };
          fetch(`${dados.Url}/api/user/deletar/${user.id}`, requestOptions)
            .then((response) => {
                console.log(response.status);
                if(response.status == 204){
                    console.log("Conta excluída com sucesso!");
                    Alert.alert("Conta excluída com sucesso!");
                    navigation.navigate('Bem-Vindo');
                } else{
                    Alert.alert("Ocorreu um erro no servidor!");
                }
            })
    
        }catch(error){
          console.log(error)
        }
    }

    const deleteAccount = () => {
        Alert.alert(
          'Confirmação',
          'Tem certeza de que deseja excluir permanentemente sua conta?\nEssa ação não pode ser desfeita e todos os seus dados serão perdidos.',
          [
            { text: 'Apagar',
              onPress: () => fetchDeleteAccount(),
              style: 'destructive' },
            
              { text: 'Cancelar',
              onPress: () => {},
              style: 'cancel' },
          ],
          { cancelable: false }
        );
      };

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

    const handleRefresh = () => {
        setRefreshing(true);
        
        getToken();
        fetchUser();

        setTimeout(() => {
            setRefreshing(false);
    }, 1000);
  };

    useEffect(() => {
        getToken();
        fetchUser();

    }, [token]);

    const handleEditProfile = () => {
        navigation.navigate('Editar Perfil', {user})
    }

    return(
        <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }>
        <View style={styles.container} >
            <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>

            <View>
                <Text style={styles.title}>Perfil</Text>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.text}>{user?.name}</Text>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.text}>{user?.email}</Text>

                <Pressable 
                    style={styles.button}
                    onPress={() => handleEditProfile()}>
                    <Text style={styles.textButton}>Editar</Text>
                </Pressable>

                <Pressable style={[styles.button, { backgroundColor: '#E6332A' }]} onPress={deleteAccount}>
                    <Text style={[styles.textButton, { color: '#F5F5F7' }]}>Apagar conta</Text>
                </Pressable>
            </View>
        </View>
        </ScrollView>
    );
};

export default Profile;