import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './view/pages/Home';
import Login from './view/pages/Login';
import Welcome from './view/pages/Welcome';
import AddRide from './view/pages/AddRide';
import Register from './view/pages/Register/index'
import EditUser from './view/pages/EditUser';
import EditRide from './view/pages/EditRide';
import SeeRides from './view/pages/SeeRide';
import AddExpense from './view/pages/AddExpense';
import EditExpense from './view/pages/EditExpense';
import SeeExpenses from './view/pages/SeeExpenses';
import SecurityQuestion from './view/pages/SecurityQuestion';
import Profile from "./view/pages/Profile";
import Settings from "./view/pages/Settings";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bem-Vindo">
        <Stack.Screen name="Bem-vindo" component={Welcome} />
        <Stack.Screen name="Entrar" component={Login} />
        <Stack.Screen name="Registrar" component={Register} />
        <Stack.Screen name="Perguntas de Segurança" component={SecurityQuestion}/>
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Ajustes" component={Settings} />
        <Stack.Screen name="Edite seu perfil" component={EditUser} />
        <Stack.Screen name="Cadastrar Despesa" component={AddExpense} />
        <Stack.Screen name="Editar Despesa" component={EditExpense} />
        <Stack.Screen name="Ver Corridas" component={SeeRides} />
        <Stack.Screen name="Editar Corrida" component={EditRide} />
        <Stack.Screen name="Ver Despesas" component={SeeExpenses} />
        <Stack.Screen name="Cadastrar Corrida" component={AddRide} />
        <Stack.Screen name="Perfil" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
