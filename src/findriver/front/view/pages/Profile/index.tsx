import React, { useState } from 'react';
import { View, Image, Text, Pressable, StyleSheet, Alert} from 'react-native';


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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: -110,
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
        marginTop: 50,
        paddingVertical: 10,
        paddingHorizontal: 120,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },

});

export default Profile;