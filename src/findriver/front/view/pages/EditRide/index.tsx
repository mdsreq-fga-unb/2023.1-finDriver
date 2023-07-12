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
import Picker from "@ouroboros/react-native-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import validator from 'validator'

import dados from "../../../dados";

import styles from "./styles";

const EditRide = ({ navigation, route }) => {
  const { ride } = route.params;

  const [value, setValue] = useState(ride.value);
  const [quilometers, setQuilometers] = useState(ride.kilometerage);
  const [app, setApp] = useState(ride.application);
  const [selectedDate, setSelectedDate] = useState(ride.date);
  const [description, setDescription] = useState(ride.description);
  const [token, setToken] = useState("");

  const getToken = async () => {
    try {
      const tokenValue = await AsyncStorage.getItem("token");
      if (tokenValue !== null) {
        setToken(tokenValue);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getToken();
  }, [token]);

  const handleEditRide = () => {
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

    if (!value || !quilometers || !app || !selectedDate) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
    } else if (value <= 0 || value >= 1000) {
      Alert.alert("Erro", "Os valores inseridos não são válidos");
    } else if (quilometers <= 0 || quilometers >= 600) {
      Alert.alert("Erro", "A quilometragem inserida não é válida");
    } else if (validator.isDate(selectedDate) ) {
      Alert.alert("Erro", "A data inserida não é válida");
    } else {
        const requestOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token.toString(),
          },
          body: JSON.stringify({
            value: value,
            kilometerage: quilometers,
            application: app,
            description: description,
            date: selectedDate,
          }),
        };
        fetch(`${dados.Url}/api/ride/editar/${ride.id}`, requestOptions)
          .then((response) => {
            console.log(response.status);
            if (response.status === 200) {
              Alert.alert("Corrida atualizada com sucesso");
              navigation.goBack();
            } else {
              Alert.alert("Erro", "Ocorreu um erro ao atualizar a corrida");
              navigation.goBack();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

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
          <Text style={styles.title}>Editar corrida</Text>
        </View>

        <View style={styles.componentsContainer}>
          <Text style={styles.label}>Valor</Text>
          <TextInput
            style={styles.input}
            value={value.toString()}
            onChangeText={(value) => setValue(value)}
            placeholder="00.00"
            keyboardType="numeric"
            cursorColor="#001f36"
          />

          <Text style={styles.label}>Quilometragem percorrida</Text>
          <TextInput
            style={styles.input}
            value={quilometers.toString()}
            onChangeText={(quilometers) => setQuilometers(quilometers)}
            placeholder="00.0"
            keyboardType="numeric"
            cursorColor="#001f36"
          />

          <Text style={styles.label}>Aplicativo utilizado</Text>
          <TextInput
            style={styles.input}
            value={app}
            onChangeText={(app) => setApp(app)}
            placeholder="App de corrida"
            cursorColor="#001f36"
          />

          <Text style={styles.label}>Data</Text>
          <TextInput
            style={styles.input}
            value={selectedDate}
            onChangeText={(selectedDate) => setSelectedDate(selectedDate.toString())}
            placeholder="YYY/MM/DD"
            keyboardType="numbers-and-punctuation"
            cursorColor="#001f36"
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(description) => setDescription(description)}
            placeholder="Descrição (opcional)"
            cursorColor="#001f36"
          />

          <Pressable style={styles.button} onPress={() => handleEditRide()}>
            <Text style={styles.textButton}>Confirmar</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  )

}

export default EditRide;