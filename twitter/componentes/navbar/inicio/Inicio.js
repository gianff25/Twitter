import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const Inicio = () => {

    return(
        <View style={styles.contenido}>
            <View style={styles.caja}>
                <Text>Gustavo Perez Torres</Text>
            </View>

            <View style={styles.botones}>
                <Button
                    title="Me Gusta"
                    onPress={() => Alert.alert('Left button pressed')}
                />
                <Button
                    
                    title="Comentar"
                    onPress={() => Alert.alert('Right button pressed')}
                />
                <Button
                    title="Compartir"
                    onPress={() => Alert.alert('Right button pressed')}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    contenido: {
        width: '100%',
        height: '100%',
        padding: 18
    },
    caja: {
        borderWidth: 1,
        width: '100%',
        height: 'auto'
    },
    botones: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    }
})
export default Inicio;