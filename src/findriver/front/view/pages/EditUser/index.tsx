import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Alert,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import dados from "../../../dados";

const EditUser = ({ navigation, route }) => {
  const senhaDeMentira = "victorlindo";

  const [token, setToken] = useState("");
  const { user, setUser } = route.params;

  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const fetchEditUser = () => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token.toString(),
      },
      body: JSON.stringify({
        name: newName,
        email: newEmail,
        password: newPassword,
      }),
    };
    fetch(`${dados.Url}/api/user/editar/${user.id}`, requestOptions)
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          console.log("Usuário editado com sucesso!");
          Alert.alert("Sua conta foi atualizada com sucesso!");
          navigation.navigate("Perfil");
        } else {
          Alert.alert("Ocorreu um erro no servidor!");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          setToken(value);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getToken();
  }, []);

  const handleEditUser = () => {
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

    if (!newName || !newEmail) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
    } else if (oldPassword !== newPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
    } else if (newPassword.length !== 0 || newPassword.length < 8) {
      Alert.alert("Erro", "A senha deve ter pelo menos 8 caracteres");
    } else if (!specialChars.test(newPassword)) {
      Alert.alert("Erro", "A senha deve ter pelo menos 1 caracteres especial");
    } else {
      fetchEditUser();
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../assets/logoCarro.png")}
            style={styles.logo}
          />
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
              onChangeText={(newName) => setNewName(newName)}
              placeholder="Name"
              keyboardType="default"
              cursorColor="#001f36"
            />
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              value={newEmail}
              onChangeText={(newEmail) => setNewEmail(newEmail)}
              placeholder="Ex.: email@gmail.com"
              keyboardType="email-address"
              autoComplete="email"
              cursorColor="#001f36"
            />
          </View>

          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Nova senha</Text>
            <TextInput
              style={styles.input}
              value={oldPassword}
              onChangeText={(oldPassword) => setOldPassword(oldPassword)}
              placeholder="Nova senha"
              keyboardType="default"
              autoComplete="off"
              autoCorrect={false}
              cursorColor="#001f36"
              secureTextEntry={true}
            />

            <Text style={styles.label}>Confirme sua nova senha</Text>
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={(newPassword) => setNewPassword(newPassword)}
              placeholder="Nova Senha"
              keyboardType="default"
              autoComplete="off"
              autoCorrect={false}
              cursorColor="#001f36"
              secureTextEntry={true}
            />
          </View>

          <Pressable style={styles.button} onPress={() => handleEditUser()}>
            <Text style={styles.textButton}>Confirmar</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditUser;
