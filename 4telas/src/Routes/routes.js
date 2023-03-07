import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  Icon  from "@expo/vector-icons/AntDesign";


import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login";
import Testo from "../pages/Testo";
import Noticias from "../pages/Noticias";



const Drawer = createDrawerNavigator();

function Tabs() {
    return (


        <Drawer.Navigator>
              <Drawer.Screen name="Noticias" component={Noticias}  options={{tabBarLabel: '',
                tabBarIcon: ({color, size})=> (<Icon name="bars" size={30} color={"#EBC259"}/>),}}/>
             <Drawer.Screen name="Cadastro" component={Cadastro} options={{tabBarLabel: '',
                tabBarIcon: ({color, size})=> (<Icon name="caretdown" size={30} color={"#EBC259"}/>),}}/>
                
            <Drawer.Screen name="Testo" component={Testo} options={{tabBarLabel: '',
                tabBarIcon: ({color, size})=> (<Icon name="caretright" size={30} color={"#EBC259"}/>),}}/>
         
          </Drawer.Navigator>
           
    )
}
export default function Routes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Login"
                component={Login} />
            <Drawer.Screen
                name="Cadastro"
                component={Cadastro} />
            <Drawer.Screen
                name="Noticias"
                component={Tabs} options={{ headerShown: false}}/>
                
        </Drawer.Navigator>

    );
}