import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  Icon  from "@expo/vector-icons/AntDesign";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from "../pages/Login";
import Cadastrar from "../pages/Cadastrar";
import Dashiboard from "../pages/Dashiboard";
import { AuthContext } from "../contexts/Auth";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();




export default function Routes() {
    const { authorized } = React.useContext(AuthContext)
    return (
    
        
        <Tab.Navigator>
            {authorized ? (
                <>
                    <Tab.Screen
                      rawer  name="Dashiboard"
                        component={Dashiboard} options={{tabBarLabel: '',
                        tabBarIcon: ({color, size})=> (<Icon name="bars" size={30} color={"#EBC259"}/>),}}/>
                </>
            ) :
             (
                <>
                    <Tab.Screen
                        name="Login"
                        component={Login} options={{tabBarLabel: '',
                        tabBarIcon: ({color, size})=> (<Icon name="caretdown" size={30} color={"#EBC259"}/>),}}/>
                    
                    <Tab.Screen
                        name="Cadastrar"
                        component={Cadastrar}  options={{tabBarLabel: '',
                        tabBarIcon: ({color, size})=> (<Icon name="caretright" size={30} color={"#EBC259"}/>),}}/>
                </>
            )

            }

        </Tab.Navigator>
       
        

    )

}