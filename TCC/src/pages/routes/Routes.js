import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, TouchableOpacity,ScrollView,Text,View,Image } from "react-native";

import Inicio from "../Inicio";
import Login from "../Login";
import Cadastrar from "../Cadastrar";
import Dashboard from "../Dashboard";
import Big from "./TabsRoutes";




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{flex:1,backgroundColor:"#0A0702",borderWidth:1}}>
         <View style={{flexDirection:"row",marginLeft:15,marginTop:30,marginBottom:30}} >
        <Image style={styles.Image} source={require("../../../assets/BARBA8.png")} />
            <Text style={styles.text}>Projeto</Text>   
            </View>

            <ScrollView style={{ flex: 1 }}>
                <DrawerItemList {...props} />  
            </ScrollView>

            <View style={{ padding:20, backgroundColor:"#968C87"}}>
            <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
                <Text style={styles.botao}>sair </Text>
               </TouchableOpacity>
               
            </View>
        </DrawerContentScrollView>

    )
};

export function DrawerNav(){
        return (
            <Drawer.Navigator
            drawerContent={CustomDrawerContent}>
            <Drawer.Screen name="Menu Principal" component={Dashboard}  
            options={{ drawerLabelStyle:{fontSize:20,color:"#FAE84E"},}} />

            <Drawer.Screen name="Big" component={Big} 
             options={{ headerShown: false,drawerLabel:"Selecionar Barbeiro",
             drawerLabelStyle:{fontSize:20,color:"#FAE84E"}}}/>
        </Drawer.Navigator>

        )
    };
   
     

    export default function Routes() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown:false,}} />
            <Stack.Screen name="Login" component={Login}  options={{ headerShown: false,}}/>
            <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false,}}/>
            <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false,}} />
       </Stack.Navigator>

    )
};
const styles=StyleSheet.create({
    container:{
       
    },
    text:{
    marginTop:20,
        fontSize:20,
        color:'#D92938',
        fontWeight:'bold',
        marginLeft:30,
        
    },
    Image:{ 
        width:80,
        height:80,
        borderRadius:80/2,
       borderWidth:1,
       }, 
       botao:{
        width:"90%",
        fontSize: 20,
        marginTop:35,
        backgroundColor:"#CBF564",
        padding:15,
        color: '#080702',
        fontWeight: 'bold',
        textAlign:"center",
        marginLeft:15,
        borderWidth: 1,
       borderRadius:30, 
       },
    
});