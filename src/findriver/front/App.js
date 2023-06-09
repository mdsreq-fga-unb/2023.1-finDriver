import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './view/pages/Login';
import Register from './view/pages/Register/index'
import Welcome from './view/pages/Welcome';
import SecurityQuestion from './view/pages/SecurityQuestion';
import Home from './view/pages/Home';
import EditUser from './view/pages/EditUser';
import AddExpense from './view/pages/AddExpense';


const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastrar Despeza">
        <Stack.Screen name="Bem-vindo" component={Welcome} />
        <Stack.Screen name="Entrar" component={Login} />
        <Stack.Screen name="Registrar" component={Register} />
        <Stack.Screen name="Perguntas de Segurança" component={SecurityQuestion} />
        <Stack.Screen name="Inicio" component={Home}/>
        <Stack.Screen name="Edite seu perfil" component={EditUser} />
        <Stack.Screen name="Cadastrar Despeza" component={AddExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}