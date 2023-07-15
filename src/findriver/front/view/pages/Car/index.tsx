import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, View, Image, Text, Pressable, Alert, RefreshControl, ScrollView} from 'react-native';

import styles from './styles';
import dados from '../../../dados';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import { TextInput } from 'react-native-gesture-handler';

const Car = ({ navigation }) => {
    
    const [refreshing, setRefreshing] = useState(false);
    const [editing, setEditing] = useState(true);

    const handleEditPress = () => {
        setEditing(!editing);
    };

    const handleSavePress = () => {
       /*Enviar os dados pro banco*/ 

        setEditing(!editing);
    }

    return(
        <KeyboardAvoidingView style={styles.body}>
            <ScrollView /*refreshControl={}*/ >
                <Header/>
                <View style={styles.container} >
                    
                    <Text style={styles.title}>Meu Carro</Text>
                    
                    <View style={styles.textArea}>
                        <Text style={styles.label}>Modelo:</Text>
                        {editing ? (
                            <TextInput style={styles.textInput} value=""></TextInput> 
                        ) : (
                            <Text style={styles.text}>Celta</Text>
                        )}
                        <Text style={styles.label}>Ano:</Text>
                        {editing ? (
                            <TextInput style={styles.textInput} value=""></TextInput> 
                        ) : (
                            <Text style={styles.text}>1999</Text>
                        )}
                        <Text style={styles.label}>Placa:</Text>
                        {editing ? (
                            <TextInput style={styles.textInput} value=""></TextInput> 
                        ) : (
                            <Text style={styles.text}>FGA309</Text>
                        )}

                        <Text style={styles.label}>Kilometragem:</Text>
                        {editing ? (
                            <TextInput style={styles.textInput} value=""></TextInput> 
                        ) : (
                            <Text style={styles.text}>30092003</Text>
                        )}
                        <Text style={styles.label}>Observações:</Text>
                        {editing ? (
                            <TextInput multiline style={styles.textInput} ></TextInput> 
                        ) : (
                            <Text style={styles.text}>Carro futuro da marys</Text>                
                        )}
                    </View>
                    
                    <View style={styles.buttonArea}>
                        {editing? (
                            <Pressable style={styles.button} onPress={handleSavePress}>
                            <Text style={styles.textButton}>Salvar</Text>
                        </Pressable> 
                        ): (
                           <Pressable style={styles.button} onPress={handleEditPress}>
                                <Text style={styles.textButton}>Editar</Text>
                            </Pressable> 
                        )}
                        
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Car