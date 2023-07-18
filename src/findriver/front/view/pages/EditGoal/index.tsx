import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, View, Image, Text, Pressable, Alert, RefreshControl, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome5";

import styles from './styles';
import dados from '../../../dados';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';

const Goal = ({ navigation, route }) => {
    const [refreshing, setRefreshing] = useState(false);
    const { isCreate, goal, token} = route.params;
    console.log(isCreate)

    const [total, setTotal] = useState(String(goal.valueGoal));
    const [currentMoney, setCurrentMoney] = useState(String(goal.valueCurrent));
    const [deadline, setDeadline] = useState(goal.deadline);
    const [description, setDescription] = useState(goal.description);
   
    const handleCancelPress = () => {
        navigation.goBack();
    }

    const handleSavePress = () => {
       /*Enviar os dados pro banco*/ 
       console.log(isCreate)

       if(isCreate){
            if(!total || !currentMoney || !deadline){
                Alert.alert("Erro", "Por favor, preencha todos os campos");
            } else {
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": token,
                    },
                    body: JSON.stringify({
                        valueCurrent: currentMoney,
                        valueGoal: total,
                        deadline: deadline,
                        description: description,
                    }),
                };
                fetch(`${dados.Url}/api/goal/adicionar`, requestOptions)
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 201) {
                            Alert.alert("Meta cadastrada!", "Sua meta foi cadastrada com sucesso. Fique atento à data final e mantenha o valor alcançado atualizado.");
                        } else if(response.status === 409){
                            Alert.alert("Você já possui uma meta!", "Você não pode criar mais de uma meta. Tente alterar ou excluir sua meta atual.");
                        }else {
                            Alert.alert("Erro", "Ocorreu um erro ao cadastrar sua meta");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            console.log(isCreate)
        } else{
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": token,
                },
                body: JSON.stringify({
                    valueCurrent: currentMoney,
                    valueGoal: total,
                    deadline: deadline,
                    description: description,
                }),
            };
            fetch(`${dados.Url}/api/goal/editar`, requestOptions)
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        Alert.alert("Meta Alterada!", "Sua meta foi editada com sucesso. Fique atento à data final e mantenha o valor alcançado atualizado.");
                    }else {
                        Alert.alert("Erro", "Ocorreu um erro ao editar sua meta");
                    }
                })
                .catch((error) => {
                    Alert.alert("Erro", "Ocorreu um erro ao editar sua meta");
                    console.log(error);
                });
        }

       navigation.goBack();
    }

    const handleDelete = () => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": token
            }
        };
        fetch(`${dados.Url}/api/goal/deletar`, requestOptions)
        .then((response) => {
            Alert.alert("Meta deletada!", "Sua meta foi deletada com sucesso.");

            response.json()
        }).catch((error) => {
            Alert.alert("Erro", "Ocorreu um erro ao deletar sua meta");
                console.log(error);
                
        });
        
        setTotal('');
        setCurrentMoney('');
        setDeadline('');
        setDescription('');
        navigation.goBack();
    }

    return(

        <ScrollView /*refreshControl={}*/ style={styles.body}>  
            <KeyboardAvoidingView>              
                <Header/>
                <View style={styles.container} >
                        
                    <View style={styles.titleArea}>
                        <Text style={styles.title}>Minha meta</Text>
                        {!isCreate ? (
                            <Pressable onPress={() => handleDelete()}>
                                <Icon name="trash" size={25} color={"#1c5560"}/>   
                            </Pressable>
                        ) : ""}
                    </View>

                    <View  style={styles.textArea}>
                        <Text style={styles.label}>Valor da meta:</Text>
                            <TextInput keyboardType="numeric" style={styles.textInput} value={total} onChangeText={(value) => setTotal(value)}></TextInput> 

                            <Text style={styles.label}>Quantidade obtida:</Text>

                            <TextInput keyboardType="numeric" style={styles.textInput} value={currentMoney} onChangeText={(value) => setCurrentMoney(value)}></TextInput> 

                        <Text style={styles.label}>Prazo final:</Text>
                           
                            <TextInput style={styles.textInput} placeholder="YYYY/MM/DD" keyboardType="phone-pad" value={deadline} onChangeText={(value) => setDeadline(value)}></TextInput> 
                        <View>
                            <Text style={styles.label}>Descrição:</Text>
                                <TextInput style={styles.textInput} value={description} onChangeText={(value) => setDescription(value)}/> 
                        </View>
                    </View>
                        
                    <View style={styles.buttonArea}>
                        <View style={styles.buttonArea}>
                            <Pressable style={[styles.button, {backgroundColor: '#E6332A'}]} onPress={handleCancelPress}>
                                <Text style={[styles.textButton, {color: '#f5f5f7'}]}>Cancelar</Text>
                            </Pressable> 
                            <Pressable style={styles.button} onPress={handleSavePress}>
                                <Text style={styles.textButton}>{isCreate ? "Criar" : "Salvar"}</Text>
                            </Pressable> 
                        </View>    
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}   

export default Goal