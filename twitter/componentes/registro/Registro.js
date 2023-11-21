import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import appFirebase from '../../database/fb';
import { getFirestore, collection, addDoc } from 'firebase/firestore';




const db = getFirestore(appFirebase);


function validarObjetoNoVacio(obj) {
    // Recorre cada propiedad del objeto
    for (let clave in obj) {
      // Verifica si la propiedad actual está vacía (o es null o undefined)
      if (!obj[clave] && obj[clave] !== 0) {
        return false; // Retorna falso si encuentra una propiedad vacía
      }
    }
    // Retorna verdadero si no hay propiedades vacías
    return true;
  }

const Registro = () => {

    const [usuario, setUsuario] = useState({
        id: "usuario1",
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        contraseña1: "",
        contraseña2: ""

    });

    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();
    const {nombre, apellido, correo, telefono, contraseña1, contraseña2} = usuario;

    const handleChangeText =(nombre, valor)=>{
        setUsuario({...usuario, [nombre]: valor})
    }

    const crearUsuario = async () => {

        //valida que los campos no esten vacios
        if (validarObjetoNoVacio(usuario)) {
            console.log(usuario);

            //valida que las contraseñas coincidan
            if(contraseña1 != contraseña2){
                console.log("Las contraseñas no coinciden.")
                Alert.alert('Contraseñas no coinciden', 'Favor de poner la misma constraseña en ambos campos.')
            } else {
                console.log(usuario)

                await addDoc(collection(db, "usuarios"), {
                    id: 'newUser1',
                    nombre: nombre,
                    apellido: apellido,
                    correo: correo,
                    telefono: telefono,
                    contraseña: contraseña1,
                    chats: {
                        id: "",
                        usuario: ""
                    },
                    amigos: {
                        id: "",
                        nombre: ""
                    }
                })
                .then(() => {
                    Alert.alert('Registro Completado', 'Usuario registrado con exito!')
                })
                .then(() => navigation.navigate('Login'));
            }

        } else {
            Alert.alert('Campos Incompletos','Favor de llenar todos los campos.');
        }
    }

    return(

        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Nombre' 
                    onChangeText={valor => handleChangeText('nombre', valor)}
                    // value={contra}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Apellido' 
                    onChangeText={valor => handleChangeText('apellido', valor)}
                    // value={contra}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Correo' 
                    onChangeText={valor => handleChangeText('correo', valor)}
                    // value={contra}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="phone" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Teléfono' 
                    onChangeText={valor => handleChangeText('telefono', valor)}
                    // value={contra}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Contraseña' 
                    onChangeText={valor => handleChangeText('contraseña1', valor)}
                    // value={contra}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Repetir Contraseña' 
                    onChangeText={valor => handleChangeText('contraseña2', valor)}
                    // value={contra}
                />
            </View>

            <View style={styles.boton}>

                <Button
                    title="Registrarse"
                    onPress={() => crearUsuario()}
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