//testar na pr
import React, { useEffect, useState } from 'react';
import { Modal, View, Image, Text, Pressable, StyleSheet, Alert, RefreshControl, ScrollView, TextInput} from 'react-native';

import styles from './styles';
import dados from '../../../dados';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';

const Profile = ({ navigation }) => {

    const [user, setUser] = useState({id:'', name:'', email:''});
    const [token, setToken] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);

    const [password, setPassword] = useState('');
    
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
                    console.log("entra, amor"); //that's what she said 
                    console.log(data.value[0])
                    setUser(data.value[0])
                    // console.log({user})
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
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token.toString(),
            },
            body: JSON.stringify({ password: password }),
          };
          fetch(`${dados.Url}/api/user/deletar/${user.id}`, requestOptions)
          .then(response => response.json())
            .then((response) => {
                if(response.status == 200 || response.message == "Usuário excluido com sucesso!"){
                    console.log("Conta excluída com sucesso!");
                    Alert.alert("Muito obrigada por usar nosso aplicativo!","Sua conta foi excluída com sucesso!");
                    navigation.navigate('Bem-Vindo');
                } else if(response.message == "Senha incorreta!"){
                    Alert.alert("Senha incorreta!","Sua senha está incorreta, tente novamente.");
                } else{
                    Alert.alert("Ocorreu um erro no servidor!");
                }
            })
    
        }catch(error){
          console.log(error)
        }
    }

    const deleteAccount = () => {
        fetchDeleteAccount()
        setDeleteVisible(!deleteVisible)
        // Alert.alert(
        //   'Confirmação',
        //   'Tem certeza de que deseja excluir permanentemente sua conta?\nEssa ação não pode ser desfeita e todos os seus dados serão perdidos!',
        //   [
        //     { text: 'Apagar',
        //       onPress: () => fetchDeleteAccount(),
        //       style: 'destructive' },
            
        //       { text: 'Cancelar',
        //       onPress: () => {},
        //       style: 'cancel' },
        //   ],
        //   { cancelable: false }
        // );
        
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
          } style={styles.body}>
            <Header/>
            <View style={styles.container} >
            {/* <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/> */}
                
                <Text style={styles.title}>Perfil</Text>
                <View style={styles.textArea}>
                    <Text style={styles.label}>Nome:</Text>
                    <Text style={styles.text}>{user?.name}</Text>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.text}>{user?.email}</Text>
                </View>
                <View style={styles.buttonArea}>
                    <Pressable 
                        style={styles.button}
                        onPress={() => handleEditProfile()}>
                        <Text style={styles.textButton}>Editar</Text>
                    </Pressable>

                    <Pressable style={[styles.button, { backgroundColor: '#E6332A' }]} onPress={() => setDeleteVisible(!deleteVisible)}>
                        <Text style={[styles.textButton, { color: '#F5F5F7' }]}>Apagar conta</Text>
                    </Pressable>
                </View>                

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={deleteVisible}
                    onRequestClose={() => {
                        setDeleteVisible(!deleteVisible);
                    }}>
                    
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={[styles.modalText, {marginBottom: 15}]}>Deseja excluir 
                                <Text style={{ fontWeight: 'bold' }} > permanentemente </Text> 
                                sua conta? 
                            </Text>
                            <Text style={styles.modalText}>Digite sua senha para confirmar</Text>

                            <TextInput
                                style={styles.modalTextInput}
                                value={password}
                                onChangeText={password => setPassword(password)}
                                placeholder="Senha"
                                keyboardType="default"
                                autoComplete="off"
                                autoCorrect={false}
                                cursorColor="#001f36"
                                secureTextEntry={true}
                            />
                            <Text style={styles.modalText}>* Essa ação não pode ser desfeita e todos os seus dados serão perdidos!</Text>

                            <View style={styles.modalButtonArea}>
                                <Pressable
                                    style={styles.modalButton}
                                    onPress={() => setDeleteVisible(!deleteVisible)}>
                                    <Text style={styles.modalButtonText}>Cancelar</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.modalButton, {backgroundColor: '#ed0000'}]}
                                    onPress={() => deleteAccount()}>
                                    <Text style={styles.modalButtonText}>Apagar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

export default Profile;