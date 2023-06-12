import React, { useState } from 'react';
import { View, Image, Text, Pressable, StyleSheet, Alert} from 'react-native';

import styles from './styles';

const Profile = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>
            <View>
                <Text style={styles.title}>Perfil</Text>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.text}>Ana Catarina Linda Perfeita</Text>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.text}>catarina@soulinda.com</Text>

                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate('Editar Perfil')}>
                    <Text style={styles.textButton}>Editar</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Profile;