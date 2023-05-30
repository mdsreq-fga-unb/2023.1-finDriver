import React from 'react';
import { View, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';

const Login: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}> Alice Linda! </Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoComplete="email"
                cursorColor="#001f36"
            />
            <Text style={styles.label}> Oi Pinguim! </Text>
            <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="default"
                autoComplete= "off"
                autoCorrect={false}
                cursorColor="#001f36"
                secureTextEntry={true}
            />
            <Pressable
                style={styles.button}
                onPress={() => Alert.alert('Oi botão!')}
            >
                <Text style={styles.textButton}>Entrar</Text>
            </Pressable>

            <Pressable onPress={() => Alert.alert('Tá muito esquecidinho em')}>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: '#1c5560',
        textAlign: 'left',
        fontSize: 13,
    },
    input: {
        width: 290,
        height: 50,
        padding: 10,
        borderColor: '#e0e0e0',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 40,
        fontSize: 15,
    },
    button: {
        backgroundColor: '#001f36',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 120,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    forgotPassword: {
        fontSize: 15,
        color: '#001f36',
        marginTop: 30,
        textDecorationLine: 'underline',
        textDecorationColor: '#001f36',
    },
});

export { Login };