
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Registro = () => {

    const navigation = useNavigation();

    return(

        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Nombre' 
                    // onChangeText={setContra}
                    // value={contra}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Apellido' 
                    // onChangeText={setContra}
                    // value={contra}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Correo' 
                    // onChangeText={setContra}
                    // value={contra}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="phone" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Teléfono' 
                    // onChangeText={setContra}
                    // value={contra}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Contraseña' 
                    // onChangeText={setContra}
                    // value={contra}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Repetir Contraseña' 
                    // onChangeText={setContra}
                    // value={contra}
                />
            </View>

            <View style={styles.boton}>

                <Button
                    title="Registrarse"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1
    },
    container: {
        padding: 50,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    boton: {
        marginTop: 20
    },
    icon: {
        marginRight: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    },
  });
export default Registro;