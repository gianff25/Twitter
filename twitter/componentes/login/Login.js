import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';    

const Login = () => {

    const [user, setUser] = useState('');
    const [contra, setContra] = useState('');
    const [loged, setLoged] = useState(0);

    console.log(user)
    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{
                uri: 'data:image/png;base64,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',
                }}
            />
            <Text style={styles.titulo}>Iniciar Sesión</Text>
            <TextInput 
                style={styles.input}
                value={user}
                onChangeText={setUser}
                placeholder='Usuario' 
            />
            <TextInput 
                style={styles.input}
                placeholder='Contraseña' 
                onChangeText={setContra}
                value={contra}
            />
            {/* <Text >{loged}</Text> */}

            <View style={styles.botones}>
                <Button
                    color="#000"
                    title="Registrarse"
                
                />
                <Button
                    title='Iniciar Sesión'
                    onPress={() => {
                        if(user == "yo" && contra == "123"){
                            setLoged(1);
                        }
                        else{
                            setLoged(0);
                        }
                    }}
                />
            </View>
        </View>

        
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderBottomWidth: 1,
      padding: 10,
      marginBottom: 20,
      fontSize: 17
    },
    container: {
        padding: 50,
        width: '100%',
        height: '80%'
    },
    logo: {
        width: 100,
        height: 100,
        marginLeft: '30%',
        marginTop: -50,
        marginBottom: 20
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 30,
        marginLeft: '25%'
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
  });
export default Login;