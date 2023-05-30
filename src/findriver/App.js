import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Welcome } from './view/pages/Welcome';
import { Login } from './view/pages/Login';

export default function App() {
  return (
    <Login/>
    /*<View style={styles.container}>
      <Text>Oi Alice! Tá tudo lindo!</Text>
      <StatusBar style="auto" />
    </View>
    */
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/