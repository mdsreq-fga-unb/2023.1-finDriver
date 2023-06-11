import React, { useState } from 'react';
import { View, Image, Text, Pressable, StyleSheet, Alert} from 'react-native';
import PushNotification from 'react-native-push-notification';

const Settings = ({ navigation }) => {
  const deleteAccount = () => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja excluir permanentemente sua conta?\nEssa ação não pode ser desfeita e todos os seus dados serão perdidos.',
      [
        {
          text: 'Apagar',
          onPress: () => {
            navigation.navigate("Bem-Vindo");
          },
          style: 'destructive',
        },
        {
          text: 'Cancelar',
          onPress: () => {
          },
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  const exitAccount = () => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja sair?\nVocê será desconectado da sua conta atual.',
      [
        {
          text: 'Sair',
          onPress: () => {
            navigation.navigate("Bem-Vindo");
          },
          style: 'destructive',
        },
        {
          text: 'Cancelar',
          onPress: () => {
          },
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logoCarro.png')} style={styles.logo} />
      <View>
        <Text style={styles.title}>Ajustes</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.textButton}>Perfil</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={exitAccount}>
          <Text style={styles.textButton}>Sair</Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: 'red' }]} onPress={deleteAccount}>
          <Text style={styles.textButton}>Apagar conta</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: -120,
        width: 250,
        height: 250,
    },
    title: {
        color: '#1c5560',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: -25
    },
    text: {
        fontSize: 23,
        textAlign: 'left',
        color: '#001F36',
    },
    label: {
        color: '#1c5560',
        textAlign: 'left',
        fontSize: 13,
        marginTop: 25
    },
    button: {
        backgroundColor: '#001f36',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 120,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },

});

export default Settings;