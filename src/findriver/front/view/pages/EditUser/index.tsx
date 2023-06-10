import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';

const EditUser = ({ navigation, route }) => {
    //const { name, email, password } = route.params
    const senhaDeMentira = 'victorlindo';

    const [newName, setNewName] = useState('Jorge Mateus da Silva');
    const [newEmail, setNewEmail] = useState('jorgemateus@gmail.com');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');



    const handleEditUser = () => {
        if(!newName || !newEmail || !oldPassword){
            Alert.alert('Erro','Por favor, preencha todos os campos');
        } else if (oldPassword !== senhaDeMentira){
            Alert.alert('Erro', 'Por favor, digite uma senha válida');
        } else {
            
        }
    };

    return(
        <View style={styles.container}>
           
            <View>
                <Image source={require('../../assets/logoCarro.png')} style={styles.logo}/>
            </View>

            <View>
                <Text style={styles.title}>Edite seu perfil</Text>
            </View>

            <View style={styles.componentsContainer}>
                <View style={styles.nameEmailContainer}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        value={newName}
                        onChangeText={newName => setNewName(newName)}
                        placeholder="Name"
                        keyboardType="default"
                        cursorColor="#001f36"
                    />
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        value={newEmail}
                        onChangeText={newEmail => setNewEmail(newEmail)}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoComplete="email"
                        cursorColor="#001f36"
                    />
                </View>

                <View style={styles.passwordContainer}>
                    <Text style={styles.label}>Senha Atual</Text>
                    <TextInput
                        style={styles.input}
                        value={oldPassword}
                        onChangeText={oldPassword => setOldPassword(oldPassword)}
                        placeholder="Senha"
                        keyboardType="default"
                        autoComplete= "off"
                        autoCorrect={false}
                        cursorColor="#001f36"
                        secureTextEntry={true}
                    />
                
                    <Text style={styles.label}>Nova Senha</Text>
                    <TextInput
                        style={styles.input}
                        value={newPassword}
                        onChangeText={newPassword => setNewPassword(newPassword)}
                        placeholder="nova Senha"
                        keyboardType="default"
                        autoComplete= "off"
                        autoCorrect={false}
                        cursorColor="#001f36"
                        secureTextEntry={true}
                    />
                </View>

                <Pressable 
                    style={styles.button}
                    onPress={() => handleEditUser()}>
                    <Text style={styles.textButton}>Confirmar</Text>
                </Pressable>

            </View>
        </View>
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
        marginTop: -30,
        width: 250,
        height: 250,
    },
    componentsContainer:{
    },
    title:{
        color: '#1c5560',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
    },
    nameEmailContainer: {
        marginBottom: 30,

    },
    passwordContainer: {
        marginBottom: 25,
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

export default EditUser;