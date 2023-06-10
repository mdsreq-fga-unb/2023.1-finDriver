import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput } from 'react-native';

import styles from './styles';

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

export default EditUser;