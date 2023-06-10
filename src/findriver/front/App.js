import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './view/pages/Login';
import Register from './view/pages/Register/index'
import Welcome from './view/pages/Welcome';
import SecurityQuestion from './view/pages/SecurityQuestion';
import Home from './view/pages/Home';
import EditUser from './view/pages/EditUser';
import AddExpense from './view/pages/AddExpense';
import EditExpense from './view/pages/EditExpense';
import AddRide from './view/pages/AddRide';
import EditRide from './view/pages/EditRide';
import SeeExpenses from './view/pages/SeeExpenses';
import Profile from "./view/pages/Profile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bem-vindo" component={Welcome} />
        <Stack.Screen name="Entrar" component={Login} />
        <Stack.Screen name="Registrar" component={Register} />
        <Stack.Screen name="Perguntas de Segurança" component={SecurityQuestion} />
        <Stack.Screen name="Inicio" component={Home}/>
        <Stack.Screen name="Edite seu perfil" component={EditUser} />
        <Stack.Screen name="Cadastrar Despesa" component={AddExpense} />
        <Stack.Screen name="Editar Despesa" component={EditExpense} />
        <Stack.Screen name="Ver Despesas" component={SeeExpenses} />
        <Stack.Screen name="Cadastrar Corrida" component={AddRide} />
        <Stack.Screen name="Editar Corrida" component={EditRide} />
        <Stack.Screen name="Perfil" component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
