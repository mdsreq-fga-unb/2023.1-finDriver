import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView} from 'react-native';
import Picker from '@ouroboros/react-native-picker';

import styles from './styles';

const AddRide = ({ navigation, route }) => {
    //const { name, email, password } = route.params

    const [value, setValue] = useState('');
    const [quilometers, setQuilometers] = useState('');
    const [app, setApp] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [description, setDescription] = useState('');

    const handleAddRide = () => {
        if(!value || !quilometers || !app || !selectedDate ){
            Alert.alert('Erro','Por favor, preencha todos os campos');
        } else {
            // try{
            //     const requestOptions = {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Accept': 'application/json',
            //             //'Authorization': token
            //         }
            //     }
            // }
            
        }
    };

    return(
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>

            <View style={styles.container}>
            
                <View>
                    <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>
                </View>

                <View>
                    <Text style={styles.title}>Cadastro de corrida</Text>
                </View>

                <View style={styles.componentsContainer}>
                    
                    <Text style={styles.label}>Valor</Text>
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={value => setValue(value)}
                        placeholder="00.00"
                        keyboardType="numeric"
                        cursorColor="#001f36"
                    />

                    <Text style={styles.label}>Quilometragem percorrida</Text>
                    <TextInput
                        style={styles.input}
                        value={quilometers}
                        onChangeText={quilometers => setQuilometers(quilometers)}
                        placeholder="00.0"
                        keyboardType='numeric'
                        cursorColor="#001f36"
                    />

                    <Text style={styles.label}>Aplicativo utilizado</Text>
                    <TextInput
                        style={styles.input}
                        value={app}
                        onChangeText={app => setApp(app)}
                        placeholder="Ex.: Uber"
                        cursorColor="#001f36"
                    />
                
                    <Text style={styles.label}>Data</Text>
                    <TextInput
                        style={styles.input}
                        value={selectedDate}
                        onChangeText={selectedDate => setSelectedDate(selectedDate)}
                        placeholder="AAAA/MM/DD"
                        keyboardType="numbers-and-punctuation"
                        cursorColor="#001f36"
                    />
                
                    <Text style={styles.label}>Descrição</Text>
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={description => setDescription(description)}
                        placeholder="Descrição (opcional)"
                        cursorColor="#001f36"
                    />

                    <Pressable 
                        style={styles.button}
                        onPress={() => handleAddRide()}>
                        <Text style={styles.textButton}>Adicionar</Text>
                    </Pressable>

                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default AddRide;