import { useState, useEffect } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import appFirebase from "../../../database/fb";
import { getStorage } from '@react-native-firebase/storage';

const Perfil = () => {

    const [image, setImage] = useState(null);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

    console.log(image)
    return(
        <View style={styles.container}>

            <Text>Perfil</Text>
            <TouchableOpacity 
                style={styles.cambiarImagen}
                onPress={pickImage}
            >

                <Image
                    style={styles.foto}
                    source={{
                        uri: image,
                    }}
                />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    foto: {
      width: 100,
      height: 100,
      borderRadius: 75,
      borderWidth: 2,
      borderColor: '#ABBAE5'
    },
    cambiarImagen: {

    }
  });

export default Perfil;

