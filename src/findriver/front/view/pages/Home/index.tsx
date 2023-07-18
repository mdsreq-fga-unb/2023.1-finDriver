import React, { useEffect, useState } from 'react';
import { Modal, View, ScrollView, KeyboardAvoidingView, Image, Text, StyleSheet, Alert, Pressable, TextInput, StatusBar, RefreshControl } from 'react-native';
import { Screen } from 'react-native-screens'
import RideCard from '../../components/RideCard'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome5";


import styles from './styles';
import EditRide from '../EditRide';
import ExpenseCard from '../../components/ExpenseCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import dados from '../../../dados';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    const [km, setKm] = useState(0);
    const [weekAverageExpense, setweekAverageExpense] = useState(0);
    const [weekAverageProfit, setweekAverageProfit] = useState(0);
    const [dayAverageProfit, setdayAverageProfit] = useState(0);
    const [dayAverageExpense, setdayAverageExpense] = useState(0);
    const [totalDayProfit, setTotalDayProfit] = useState(0);
    const [token, setToken] = useState('');
    const [rides, setRides] = useState([]);
    const [expense, setExpense] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isGoalRegistered, setIsGoalRegistered] = useState(false)
    const [goal, setGoal] = useState({valueGoal: 0, valueCurrent: 0, deadline: '', description: ''})
    const [modalVisible, setModalVisible] = useState(false);
    const [precoAl, setPrecoAl] = useState(0)
    const [precoGs, setPrecoGs] = useState(0)
    const [message, setMessage] = useState("")


    function calcularCombustivelVantajoso(precoAlcool, precoGasolina) {
        // Calcula o preço relativo do álcool em relação à gasolina
        var relacao = precoAlcool / precoGasolina;

        if (relacao < 0.7) {
            setMessage("Álcool é mais vantajoso.");
        } else if (relacao > 0.7) {
            setMessage("Gasolina é mais vantajosa.");
        } else {
            setMessage("Tanto faz usar álcool ou gasolina.");
        }
      }
  
    const fetchExpense = async () => {
        try{
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': token.toString(),
                },
            };
            fetch(`${dados.Url}/api/expense/ver`, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    setExpense(data.value);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch(error){
            console.log(error);
        }
    }

    const fetchRides = async () => {
        try{
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': token.toString(),
                },
            };
            fetch(`${dados.Url}/api/ride/ver`, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    setRides(data.value);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        } 
    }

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
                        // console.log(data.values.averageProfit)
                        // console.log(data.values.averageDayProfit)
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

    function getDayProfit(token) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            }
        };
        fetch(`${dados.Url}/api/ride/totalLucroDia`, requestOptions)
            .then(response => response.json())
            .then(data => {
                try {
                    if (data) {
                        setTotalDayProfit(data.value.totalDayProfit)
                    }

                } catch (e) {
                    console.log(e)
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }
    
    function getGoal(token) {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": token,
            },
        };
        fetch(`${dados.Url}/api/goal/`, requestOptions)
            // .then((response) => {
            //     console.log(response.status);
            //     if (response.status === 201) {
            //         Alert.alert("Meta cadastrada!", "Sua meta foi cadastrada com sucesso. Fique atento à data final e mantenha o valor alcançado atualizado.");
            //     } else if(response.status === 409){
            //         Alert.alert("Você já possui uma meta!", "Você não pode criar mais de uma meta. Tente alterar ou excluir sua meta atual.");
            //     }else {
            //         Alert.alert("Erro", "Ocorreu um erro ao cadastrar sua meta");
            //     }
            // })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.value[0])
                setGoal(data.value[0])
                console.log(goal)
                
            })
            .catch((error) => {
                console.log(error);
            });            
    }    

    const handleRefresh = () => {
        setRefreshing(true);
        getDayKm(token);
        getExpense(token);
        getProfit(token);
        getGoal(token);
        getToken();

    // Simulando um atraso de 2 segundos antes de concluir a atualização
        setTimeout(() => {
            setRefreshing(false);
    }, 1000);
  };
        
    useEffect(() => {
        getDayKm(token);
        getExpense(token);
        getProfit(token);
        getGoal(token);
        getToken();
    }, [token, rides, expense]);

    
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F5F5F7" />
            <Header />
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
                refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
            }>

                <View style={styles.profitContainer}>
                    <Text style={styles.profitText}>Lucro do dia</Text>
                    <Text style={[styles.profitText, styles.kmText, {fontWeight: '700'}]}>R$ {(dayAverageProfit - dayAverageExpense).toFixed(2)}</Text>
                </View>

                <View style={styles.kmContainer}>
                    <Text style={styles.kmText}>Você rodou </Text>
                    <Text style={[styles.kmText, {fontWeight: '700'}]}>{km} km </Text>
                    <Text style={styles.kmText}>hoje</Text>
                </View>
                <View style={styles.kmContainer}>
                    <Text style={[styles.kmText]}>Média de gastos semanal: </Text>
                    <Text style={[styles.kmText, {fontWeight: '700'}]}>R$ {(weekAverageExpense/7).toFixed(2)}</Text>
                </View>    

                
                <View style={styles.goalContainer}>
                    <Text style={styles.title}>Meta</Text>    
                </View>
                    
                        <View style={styles.goalCard}>
                        {goal ? (
                            <Pressable  onPress={() => navigation.navigate("Meta", { isCreate: false , token: token})}>
                                <Text style={[styles.summaryTextTitle, {marginTop: 5}]}>Seu progresso atual </Text>
                                <ProgressBar progress={((goal.valueCurrent/goal.valueGoal)*100)}/>
                                <Text style={styles.summaryText}>⬩⬩⬩ {goal?.description}</Text>
                                <Text style={styles.summaryText}>⬩Você alcançou: {goal.valueCurrent} </Text>
                                <Text style={styles.summaryText}>⬩Sua meta é: {goal.valueGoal} </Text>
                           </Pressable>
                        ) : (
                            <Pressable  onPress={() => navigation.navigate("Meta", { isCreate: true , token: token})}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={styles.summaryTextTitle} >Cadastre uma meta aqui</Text>
                                    <Icon name="plus" size={25} color={"#f5f5f7"}/>
                                </View>
                            </Pressable>
                        )}
                        </View>
                   
               
                <View >
                    <Text style={styles.title}>Ferramentas de cálculo</Text>
                    <Pressable style={styles.toolsContainer} onPress={() => setModalVisible(true)}>
                        <View style={styles.toolCard}>
                            <Text style={[styles.summaryTextTitle]}>Gasolina ou Álcool?</Text>
                            <Icon name="gas-pump" size={25} color={"#f5f5f7"}/>
                        </View>
                    </Pressable>
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
                        <Text style={styles.summaryText}>⬩Ganhos: {weekAverageProfit} </Text>
                        <Text style={styles.summaryText}>⬩Gastos: {weekAverageExpense} </Text>
                        <Text style={styles.summaryText}>⬩Saldo: {(weekAverageProfit - weekAverageExpense).toFixed(2)}</Text>
                    </View>

                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryTextTitle}>Este Mês</Text>
                        <Text style={styles.summaryText}>⬩Ganhos: {weekAverageProfit} </Text>
                        <Text style={styles.summaryText}>⬩Gastos: {weekAverageExpense} </Text>
                        <Text style={styles.summaryText}>⬩Saldo: {(weekAverageProfit - weekAverageExpense).toFixed(2)}</Text>
                    </View>

                </View>           
            </ScrollView>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{flexDirection: 'row', marginBottom: 15, width: 300}}>
                            <Text style={[styles.modalText, { fontWeight: 'bold'}]}>Qual combustível é mais vantajoso hoje?
                            </Text>
                            <Pressable
                                style={[styles.modalButton, {backgroundColor: '#ed0000', width: 30, height: 30, padding: 0, marginHorizontal: 10}]}
                                onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>x</Text>
                            </Pressable>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={[styles.modalText, {marginBottom: 4}]}>Preço Álcool:</Text>

                            <TextInput
                                style={styles.modalTextInput}
                                value={String(precoAl)}
                                onChangeText={value => setPrecoAl(Number(value))}
                                placeholder="Preço Álcool"
                                keyboardType="numeric"
                                cursorColor="#001f36"
                            />
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={[styles.modalText, {marginBottom: 4}]}>Preço Gasolina:</Text>

                            <TextInput
                                style={styles.modalTextInput}
                                value={String(precoGs)}
                                onChangeText={value => setPrecoGs(Number(value))}
                                placeholder="Preço Gasolina"
                                keyboardType="numeric"
                                cursorColor="#001f36"
                            />
                        </View>
                        {message ? (<Text style={styles.modalText} >{message}</Text>) : ("")}

                        <View style={styles.modalButtonArea}>
                            <Pressable
                                style={styles.modalButton}
                                onPress={() => calcularCombustivelVantajoso(precoAl, precoGs)}>
                                <Text style={styles.modalButtonText}>Calcular</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    
        );
    }
    
    export default Home;