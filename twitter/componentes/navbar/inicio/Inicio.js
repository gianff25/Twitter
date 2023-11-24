import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Avatar } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useCallback, useState } from 'react';

const Inicio = () => {

    const [verMas, setVerMas] = useState(false);
    const [btnVerMas, setBtnVerMas] = useState(false);

    const onTextLayout = (e) => {
        e.nativeEvent.lines.length >= 5 ? setBtnVerMas(true) : setBtnVerMas(false)
    }   

    return(
        <View style={styles.contenido}>
            <View style={styles.persona}>
                <Avatar
                    size={50}
                    rounded
                    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                />
                <Text style={styles.pNombre}>Gustavo Perez Torres</Text>
            </View>

            <View style={styles.texto}>
                <Text 
                    onTextLayout={onTextLayout}
                    numberOfLines={ verMas ? undefined : 5}
                    style={{ 
                        textAlign: "justify",
                        width: "98%",
                        padding: 7
                    }} 
                >
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
                    electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la 
                    creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más 
                    recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual 
                    incluye versiones de Lorem Ipsum.
                </Text>
                {
                    btnVerMas ?                
                        (<Button 
                            size="sm" 
                            type="clear"
                            onPress={() => verMas ? setVerMas(false) : setVerMas(true)}
                        >
                            {verMas ? "...ver menos" : "...ver mas"}
                        </Button>) :
                        (<></>)
                }
 

            </View>

            <View style={styles.botones}>
                <Button 
                    type="outline"
                    onPress={() => Alert.alert('Me gusta')}
                >
                    <Icon style={styles.icono} name="thumbs-up" color="blue" />
                     Me gusta
                </Button>
                <Button 
                    type="outline"
                    onPress={() => Alert.alert('Comentar')}
                >
                    <Icon style={styles.icono} name="comment" color="blue" />
                     Comentar
                </Button>
                <Button 
                    type="outline"
                    onPress={() => Alert.alert('Compartir')}

                >
                    <Icon style={styles.icono} name="share" color="blue" />
                     Compartir
                </Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    contenido: {
        width: '97%',
        height: 'max-content',
        padding: 5,
        borderWidth: 2,
        marginLeft: 2,
        borderRadius: 5,
        marginTop: 15,
        borderColor: "#1DA1F2"
    },
    persona: {
        borderBottomWidth: 0.2,
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        padding: 10
    },
    botones: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icono:{
        marginRight: 5
    },
    pNombre: {
        fontSize: 20,
        margin: 10
    },
    texto: {
        alignItems: "flex-start"
    }
})
export default Inicio;