import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from "@expo/vector-icons/AntDesign";






import Dashboard from "../Dashboard";
import ConsultarCliente from "../ConsultarCliente";
import Produto from "../Produtos";


const Tab = createBottomTabNavigator();

export default function Big(){
    return(
       
 <Tab.Navigator >
 <Tab.Screen name="Selecionar Barbeiro" component={ConsultarCliente} options={{ headerStyle:{backgroundColor:'#46696E'}, 
   headerTitleStyle:{fontSize:20, fontWeight:'bold'},tabBarLabelStyle:{fontSize:20,color:"#7A0A9F"},
   tabBarIcon: ({color, size,})=> (<Icon name="arrowleft" size={25} />),}}/>

  <Tab.Screen name="Tipos de Cortes" component={Produto} options={{tabBarLabel:"cortes", headerStyle:{backgroundColor:'#46696E'}, 
   headerTitleStyle:{fontSize:30, fontWeight:'bold'},tabBarLabelStyle:{fontSize:20,color:"#7A0A9F"},
   tabBarIcon: ({color, size,})=> (<Icon name="arrowright" size={25} />),}}/>
  
  </Tab.Navigator>
        
    )

};