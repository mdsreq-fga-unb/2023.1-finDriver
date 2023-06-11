import React, { useState } from 'react';
import { View, Image, Text, Pressable, StyleSheet, Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';

import styles from './styles';

const Settings = ({ navigation }) => {
  const deleteAccount = () => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja excluir permanentemente sua conta?\nEssa ação não pode ser desfeita e todos os seus dados serão perdidos.',
      [
        { text: 'Apagar',
          onPress: () => { navigation.navigate("Bem-Vindo")},
          style: 'destructive' },
        
          { text: 'Cancelar',
          onPress: () => {},
          style: 'cancel' },
      ],
      { cancelable: false }
    );
  };

  const exitAccount = () => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja sair?\nVocê será desconectado da sua conta atual.',
      [
        { text: 'Sair',
          onPress: () => {navigation.navigate("Bem-Vindo")},
          style: 'destructive' },
        
        { text: 'Cancelar',
          onPress: () => {},
          style: 'cancel' },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>   
      <Image source={require('../../assets/logoBranca.png')} style={styles.logo} />
      <Text style={styles.title}>Ajustes</Text>
      
      <View style={styles.buttonArea}> 
        <Pressable style={styles.button} onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.textButton}>Perfil</Text>
        </Pressable>
       
        <Pressable style={styles.button} onPress={exitAccount}>
          <Text style={styles.textButton}>Sair</Text>
        </Pressable>
       
        <Pressable style={[styles.button, { backgroundColor: '#E6332A' }]} onPress={deleteAccount}>
          <Text style={[styles.textButton, { color: '#F5F5F7' }]}>Apagar conta</Text>
        </Pressable>
      </View>
    
    </View>
  );
};

export default Settings;