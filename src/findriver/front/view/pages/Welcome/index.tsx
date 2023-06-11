import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';

import styles from './styles';

const Welcome = ({ navigation }) => {
    return(
        <View style={styles.container}>

            <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>

            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate('Entrar')}>
                    <Text style={styles.textButton} >Entrar</Text>
            </Pressable>

            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate('Registrar')}>
                    <Text style={styles.textButton} >Cadastrar-se</Text>
            </Pressable>
            
        </View>
    );
};

export default Welcome;