import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './componentes/inicio/Inicio';
import Login from './componentes/login/Login';
import Registro from './componentes/registro/Registro';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  const [logeado, setLogeado] = useState(0);
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Inicio"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#1DA1F2'}
          }}  
        >
          { logeado != 0 ? (<>
            <Stack.Screen 
              name='Registro' 
              component={Registro} 
            />
            <Stack.Screen 
              name='Inicio' 
              component={Inicio} 
            /></>) : (
            <Stack.Screen 
              name='Login' 
              component={Login} 
              options={{
                backgroundColor: 'red',
                title: 'Iniciar Sesión'
              }} 
            /> )
          }
        </Stack.Navigator>
      </NavigationContainer>
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
