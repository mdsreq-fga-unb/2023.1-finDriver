import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./view/pages/Login";
import Register from "./view/pages/Register/index";
import Welcome from "./view/pages/Welcome";
import SecurityQuestion from "./view/pages/SecurityQuestion";
import Profile from "./view/pages/Profile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SecurityQuestion" component={SecurityQuestion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
