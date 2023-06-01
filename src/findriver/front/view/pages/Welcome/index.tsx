import React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

const Welcome: React.FC = () => {
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>
            <Pressable style={styles.button}>
                <Text style={styles.textButton} >Entrar</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text style={styles.textButton} >Cadastrar-se</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width:400,
        height: 400,
        marginTop: 0,
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#001f36',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        width: 250,
        height: 55,
        margin:10,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },

})

export default Welcome;