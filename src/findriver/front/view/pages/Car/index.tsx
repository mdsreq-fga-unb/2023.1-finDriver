import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, View, Image, Text, Pressable, Alert, RefreshControl, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

import styles from './styles';
import dados from '../../../dados';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import { TextInput } from 'react-native-gesture-handler';

const Car = ({ navigation, isFirstTime }) => {
    // const { isFirstTime } = route.params;
    const [refreshing, setRefreshing] = useState(false);
    const [editing, setEditing] = useState(false);

    const [model, setModel] = useState("Celta");
    const [year, setYear] = useState("1999");
    const [licensePlate, setLicensePlate] = useState("FGA309");
    const [kmPerAlcool, setKmPerAlcool] = useState("10.7");
    const [kmPerGas, setKmPerGas] = useState("13");
    const [mileage, setMileage] = useState("300903");
    const [notes, setNotes] = useState("Carro futuro da marys");

    if(isFirstTime){
        setEditing(true);
    }

    const handleEditPress = () => {
        setEditing(!editing);
    };

    const handleCancelPress = () => {
        setEditing(!editing);
    }

    const handleSavePress = () => {
        /* Fazer o fetch, se os dados forem undefined rota criar, se não rota salvar */
        /*Enviar os dados pro banco*/ 
            
            setEditing(!editing);
        
    }

    const handleDelete = () => {
        /* Tayanara apague os dados do banco */

        setModel("-");
        setYear("-");
        setLicensePlate("-");
        setKmPerAlcool("0");
        setKmPerGas("0");
        setMileage("0");
        setNotes("");
    }

    return(
        <ScrollView /*refreshControl={}*/ style={styles.body}>
            <KeyboardAvoidingView >
                
                <Header/>
                <View style={styles.container} >
                        
                    <View style={styles.titleArea}>
                        <Text style={styles.title}>Meu Carro</Text>
                        <Pressable onPress={() => handleDelete()}>
                            <Icon name="trash" size={25} color={"#f5f5f7"}/>   
                        </Pressable>
                    </View>

                    <View  style={styles.textArea}>
                        <Text style={styles.label}>Modelo:</Text>
                        {editing ? (
                            <TextInput style={styles.textInput} value={model} onChangeText={(value) => setModel(value)}></TextInput> 
                        ) : (
                            <Text style={styles.text}>{model}</Text>
                        )}
                            <Text style={styles.label}>Ano:</Text>
                        {editing ? (
                            <TextInput style={styles.textInput} value={year} onChangeText={(value) => setYear(value)}></TextInput> 
                        ) : (
                            <Text style={styles.text}>{year}</Text>
                        )}
                        <Text style={styles.label}>Placa:</Text>
                        {editing ? (
                            <TextInput style={styles.textInput} value={licensePlate} onChangeText={(value) => setLicensePlate(value)}></TextInput> 
                        ) : (
                            <Text style={styles.text}>{licensePlate}</Text>
                        )}
                    </View>
                    
                    <View style={styles.textArea}>        
                        <View>
                            <Text style={styles.label}>Kilometragem:</Text>
                            {editing ? (
                                <TextInput  keyboardType="numeric" style={styles.textInput} value={mileage} onChangeText={(value) => setMileage(value)}/> 
                            ) : (
                                <Text style={styles.text}>{mileage}</Text>
                            )}
                        
                            <Text style={styles.label}>Km por álcool:</Text>
                            {editing ? (
                                <TextInput multiline style={styles.textInput} value={kmPerAlcool} onChangeText={(value) => setKmPerAlcool(value)}/> 
                            ) : (
                                <Text style={styles.text}>{kmPerAlcool}</Text>                
                            )}

                            <Text style={styles.label}>Km por gasolina:</Text>
                            {editing ? (
                                <TextInput multiline style={styles.textInput} value={kmPerGas} onChangeText={(value) => setKmPerGas(value)}/> 
                            ) : (
                                <Text style={styles.text}>{kmPerGas}</Text>                
                            )}
                        </View>

                            
                        <View>
                            <Text style={[styles.label, {marginTop: 30}]}>Observações:</Text>
                            {editing ? (
                                <TextInput multiline style={styles.textInput} value={notes} onChangeText={(value) => setNotes(value)}/> 
                            ) : (
                                <Text style={styles.text}>{notes}</Text>                
                            )}
                        </View>
                            
                    </View>
                        
                    <View style={styles.buttonArea}>
                        {editing? (
                            <View style={styles.buttonArea}>
                                <Pressable style={[styles.button, {backgroundColor: '#E6332A'}]} onPress={handleCancelPress}>
                                    <Text style={[styles.textButton, {color: '#f5f5f7'}]}>Cancelar</Text>
                                </Pressable> 
                                <Pressable style={styles.button} onPress={handleSavePress}>
                                    <Text style={styles.textButton}>Salvar</Text>
                                </Pressable> 
                            </View>    
                        ): (
                            <Pressable style={styles.button} onPress={handleEditPress}>
                                <Text style={styles.textButton}>Editar</Text>
                            </Pressable> 
                        )}
                    </View>
                </View>
            
            </KeyboardAvoidingView>
        </ScrollView>
    )
}   

export default Car