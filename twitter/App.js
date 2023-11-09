import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './componentes/inicio/Inicio';
import Login from './componentes/login/Login';
import Registro from './componentes/registro/Registro';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      {/* <Registro />
      <Inicio />
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
