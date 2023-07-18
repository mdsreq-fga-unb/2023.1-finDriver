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

    const [id, setId] = useState(0);
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [licensePlate, setLicensePlate] = useState("");
    const [kmPerAlcool, setKmPerAlcool] = useState("");
    const [kmPerGas, setKmPerGas] = useState("");
    const [mileage, setMileage] = useState("");
    const [notes, setNotes] = useState("");
    const [token, setToken] = useState('');

    const getToken = async () => {
        try {
          const tokenValue = await AsyncStorage.getItem("token");
          if (tokenValue !== null) {
            setToken(tokenValue);
          }
        } catch (e) {
          console.log(e);
        }
      };

    if(isFirstTime){
        setEditing(true);
    }

    const handleEditPress = () => {
        setEditing(!editing);
    };

    const handleCancelPress = () => {
        setEditing(!editing);
    }

    const getCar = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: token.toString() 
                //'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJpZCI6NDgyLCJlbWFpbCI6IjEyM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRBT1h0TkFVcWFNQ1U1WEhkRUw0d2F1aW9mdjQxNVVndU1sc3lxUWdHai53eUFnekNtNGRhNiJ9XSwiaWF0IjoxNjg5NjQxODkyfQ.5RP_bmla4XmlDfekcIr31rBKcwvy8gBrxs4XR2mk-ac'
            }
        };
        fetch(`${dados.Url}/api/car/ver/`, requestOptions)
        .then((response) => response.json())
                .then((data) => {
                    console.log(data.value[0].id)
                    setId(data.value[0].id);
                    setModel(data.value[0].model);
                    setYear(data.value[0].year)
                    setMileage(data.value[0].mileage);
                    setLicensePlate(data.value[0].license_plate);
                    setKmPerAlcool(data.value[0].kmPerAlcool);
                    setKmPerGas(data.value[0].kmPerGas);
                    setNotes(data.value[0].notes);
                })
        .catch((error) => {
          console.log(error);
        });
        
    }

    const handleSavePress = () => {

        getCar();

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                
            },
            body: JSON.stringify({
                model: model,
                mileage: mileage,
                license_plate: licensePlate,
                year: year,
                kmPerAlcool: kmPerAlcool,
                kmPerGas: kmPerGas,
                notes: notes
            })
        };
        fetch(`${dados.Url}/api/car/editar/${id}`, requestOptions)
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            Alert.alert("Carro atualizado com sucesso");
          } else {
            Alert.alert("Erro", "Ocorreu um erro ao atualizar os dados do carro");
          }
        })
        .catch((error) => {
          console.log(error);
        });
            
            setEditing(!editing);
        
    }

    const handleDelete = () => {

        getCar();

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',   
            },
            body: JSON.stringify({
                model: "-",
                mileage: "0",
                license_plate: "-",
                year: "-",
                kmPerAlcool: "0",
                kmPerGas: "0",
                notes: ""
            })
        };

        fetch(`${dados.Url}/api/car/editar/${id}`, requestOptions)
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            Alert.alert("Carro excluido com sucesso");
          } else {
            Alert.alert("Erro", "Ocorreu um erro ao excluir os dados do carro");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    useEffect(() => {
        getToken();
        getCar();
      }, [token]);

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