import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, View, Image, Text, Pressable, Alert, RefreshControl, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome5";

import styles from './styles';
import dados from '../../../dados';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';

const Goal = ({ navigation, route }) => {
    const isCreate = route.params;
    const [refreshing, setRefreshing] = useState(false);
    console.log("EUUUUUUUUUUUUUUUUUUU\n")
    console.log(isCreate)
    const [total, setTotal] = useState("1500");
    const [currentMoney, setCurrentMoney] = useState("50");
    const [deadline, setDeadline] = useState("12/10/2023");
    const [description, setDescription] = useState("geladeira duas portas");


    const handleCancelPress = () => {
        navigation.goBack();
    }

    const handleSavePress = () => {
       /*Enviar os dados pro banco*/ 

    //    if(isCreate){
    //         //criar meta
    //         console.log(isCreate)
    //     } else{
    //         //salvar meta
    //         console.log(isCreate)
    //     }

       navigation.goBack();
    }

    const handleDelete = () => {
        /* Tayanara apague os dados do banco */
        
        setTotal('');
        setCurrentMoney('');
        setDeadline('');
        setDescription('');
        navigation.goBack();
    }

    return(
        <ScrollView /*refreshControl={}*/ style={styles.body}>
            <KeyboardAvoidingView >
                
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
                            <TextInput style={styles.textInput} value={total} onChangeText={(value) => setTotal(value)}></TextInput> 

                            <Text style={styles.label}>Quantidade obtida:</Text>

                            <TextInput style={styles.textInput} value={currentMoney} onChangeText={(value) => setCurrentMoney(value)}></TextInput> 

                        <Text style={styles.label}>Prazo final:</Text>
                            <TextInput style={styles.textInput} value={deadline} onChangeText={(value) => setDeadline(value)}></TextInput> 
                        <View>
                            <Text style={styles.label}>Descrição:</Text>
                                <TextInput  keyboardType="numeric" style={styles.textInput} value={description} onChangeText={(value) => setDescription(value)}/> 
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