import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView} from 'react-native';
import Picker from '@ouroboros/react-native-picker';

const EditRide = ({ navigation, route }) => {
    //const { name, email, password } = route.params

    const [value, setValue] = useState('');
    const [quilometers, setQuilometers] = useState('');
    const [app, setApp] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [description, setDescription] = useState('');



    const handleEditRide = () => {
        if(!value || !quilometers || !app || !selectedDate || !description){
            Alert.alert('Erro','Por favor, preencha todos os campos');
        } else {
            
        }
    };

    return(
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>

            <View style={styles.container}>
            
                <View>
                    <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>
                </View>

                <View>
                    <Text style={styles.title}>Editar corrida</Text>
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
                        placeholder="App de corrida"
                        cursorColor="#001f36"
                    />
                

                
                    <Text style={styles.label}>Data</Text>
                    <TextInput
                        style={styles.input}
                        value={selectedDate}
                        onChangeText={selectedDate => setSelectedDate(selectedDate)}
                        placeholder="YYY/MM/DD"
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
                        onPress={() => handleEditRide()}>
                        <Text style={styles.textButton}>Confirmar</Text>
                    </Pressable>

                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: -50,
        width: 250,
        height: 250,
    },
    componentsContainer:{
        marginBottom: 30,
    },
    title:{
        color: '#1c5560',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
    },
    label: {
        color: '#1c5560',
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: 13,
    },
    input: {
        width: 290,
        height: 50,
        padding: 10,
        borderColor: '#e0e0e0',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 15,
    },
    button: {
        backgroundColor: '#001f36',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    link: {
        alignSelf: 'flex-end',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#001f36',
        textDecorationLine: 'underline',
        textDecorationColor: '#001f36',
    },
});

export default EditRide;