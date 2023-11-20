import { StyleSheet, Text, View } from 'react-native';
import Inicio from './componentes/navbar/inicio/Inicio.js';
import Login from './componentes/login/Login';
import Registro from './componentes/registro/Registro';
import Navbar from './componentes/navbar/Navbar.js';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {

  const [logeado, setLogeado] = useState(0);

  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Navbar"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#1DA1F2'}
          }}  
        >
          { logeado != 0 ? 
            (
              <>
                <Stack.Screen 
                  name='Inicio' 
                  component={Inicio} 
                  />
                <Stack.Screen 
                  name='Navbar'
                  component={Navbar}
                  options={{
                    title: 'Twitter'
                  }}
                  // initialParams={{setLogeado}}
                />
              </>
            ) 
            : 
            (
                <>
                <Stack.Screen 
                  name='Login' 
                  component={Login} 
                  options={{
                    backgroundColor: 'red',
                    title: 'Iniciar Sesión'
                  }}
                  // initialParams={{setLogeado}}
                />
                <Stack.Screen 
                  name='Registro' 
                  component={Registro} 
                />
              </> 
             )
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
