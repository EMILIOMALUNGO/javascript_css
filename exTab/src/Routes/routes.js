import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from "../pages/Login";
import Cadastrar from "../pages/Cadastrar";
import Dashiboard from "../pages/Dashiboard";
import Pagina1 from "../pages/Pagina1";
import Pagina2 from "../pages/Pagina2";
import Pagina3 from "../pages/Pagina3";



const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator>

            <Tab.Screen name="Dashiboard" component={Dashiboard} />
            <Tab.Screen name="Pagina1" component={Pagina1} />
            <Tab.Screen name="Pagina2" component={Pagina2} />
            <Tab.Screen name="Pagina3" component={Pagina3} />
       

        </Tab.Navigator>
    )
}

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login} />
            <Stack.Screen
                name="Cadastrar"
                component={Cadastrar} />
            <Tab.Screen
             name="Dashiboard" 
             component={Tabs} />
        </Stack.Navigator>

    )

}