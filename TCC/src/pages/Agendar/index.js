import { useNavigation } from "@react-navigation/native";
import React from "react";
import {SafeAreaView,StyleSheet,Text,TouchableOpacity,View,TextInput,Image,ScrollView} from "react-native";






export default function Cadastrar(){
    const navigation=useNavigation()
    return(
 <SafeAreaView style={styles.container}>

    

    <View style={styles.textinput}>
        <TextInput placeholder="Nome Completo" style={styles.input}/>
      
    </View>
   
    <View styles={styles.textbotao}>

    <TouchableOpacity onPress={()=> navigation.navigate("DrawerNav")}>
    <Text style={styles.botao}>Cadastrar</Text>
    </TouchableOpacity>
   </View>

</SafeAreaView>

    )
}
   const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#968C87",

    },
})