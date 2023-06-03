import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './front/view/pages/Login';
import Register from './front/view/pages/Register/index'
import Welcome from './front/view/pages/Welcome';
import SecurityQuestion from './front/view/pages/SecurityQuestion';

const Stack = createStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SecurityQuestion" component={SecurityQuestion} />
      </Stack.Navigator>
    </NavigationContainer>
    //<Welcome/>
    //<Login/>
    //<Register/>
    //<SecurityQuestion/>
    
  );
}