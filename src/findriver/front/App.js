import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./view/pages/Home";
import Welcome from "./view/pages/Welcome";
import Login from "./view/pages/Login";
import Register from "./view/pages/Register";
import SecurityQuestion from "./view/pages/SecurityQuestion";
import SeeRides from "./view/pages/SeeRide";
import SeeExpenses from "./view/pages/SeeExpenses";
import Settings from "./view/pages/Settings";
import Profile from "./view/pages/Profile";
import EditExpense from "./view/pages/EditExpense";
import AddExpense from "./view/pages/AddExpense";
import AddRide from "./view/pages/AddRide";
import EditUser from "./view/pages/EditUser";
import EditRide from "./view/pages/EditRide";
import Car from "./view/pages/Car"
import PasswordRecovery from "./view/pages/PasswordRecovery";
import Goal from "./view/pages/EditGoal"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Bem-Vindo'>
            <Stack.Screen name="Bem-Vindo" component={Welcome}/>
            <Stack.Screen name="Entrar" component={Login} />
            <Stack.Screen name="Registrar" component={Register} />
            <Stack.Screen name="Perguntas" component={SecurityQuestion} />
            <Stack.Screen name="Recovery" component={PasswordRecovery} />

            <Stack.Screen name="Meta" component={Goal}/>

            <Stack.Screen name="Cadastrar Despesa" component={AddExpense} />
            <Stack.Screen name="Editar Despesa" component={EditExpense} />

            <Stack.Screen name="Cadastrar Corrida" component={AddRide} />
            <Stack.Screen name="Editar Corrida" component={EditRide} />

            <Stack.Screen name="Perfil" component={Profile} />
            <Stack.Screen name="Editar Perfil" component={EditUser} />
            <Stack.Screen name="Carro" component={Car}/>

            <Stack.Screen name="Tab" component={AppTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </SafeAreaView>
  );
}

function AppTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#001F36",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
          alignContent: "space-around",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Corridas"
        component={SeeRides}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="car" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Despesas"
        component={SeeExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-basket" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Ajustes"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user-cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
