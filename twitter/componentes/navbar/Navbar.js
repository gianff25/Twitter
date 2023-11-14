import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Button, Text } from "react-native";
import Inicio from "./inicio/Inicio";
import Chats from "./chats/Cahts";
import Perfil from "./perfil/Perfil";

const Tab = createMaterialTopTabNavigator();



const Navbar = () => {

    return(
        <>
        <Tab.Navigator>
            <Tab.Screen 
                name='Inicio' 
                component={Inicio} 
            />
            <Tab.Screen 
                name='Chat' 
                component={Chats} 
            />
            <Tab.Screen 
                name='Perfil' 
                component={Perfil} 
            />
        </Tab.Navigator>
        </>
    )
}
export default Navbar;