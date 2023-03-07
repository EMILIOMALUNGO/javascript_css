import { useNavigation } from "@react-navigation/native";
import React from "react";
import {SafeAreaView,StyleSheet,Text,TouchableOpacity,View,TextInput,Image,ScrollView} from "react-native";






export default function Cadastrar(){
    const navigation=useNavigation()
    return(
 <SafeAreaView style={styles.container}>

    <View style={StyleSheet.Image}>
     <Image style={styles.Image} source={require("../../../assets/BARBA8.png")} />
    </View>
<ScrollView>
    <View style={styles.textinput}>
        <TextInput placeholder="Nome Completo" style={styles.input}/>
        <TextInput placeholder="E-emal" style={styles.input}/>
        <TextInput placeholder="Senha" style={styles.input}/>
        <TextInput placeholder="Confirmar Senha" style={styles.input}/>
    </View>
   
    <View styles={styles.textbotao}>

    <TouchableOpacity onPress={()=> navigation.navigate("DrawerNav")}>
    <Text style={styles.botao}>Cadastrar</Text>
    </TouchableOpacity>
   </View>
   </ScrollView>
</SafeAreaView>

    )
}
   const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#968C87",

    },
    Image:{ 
        width:"100%",
        height:300,
       },
       input:{
        width:"90%",
        marginTop:30,
        fontSize:15,
        padding:10,
        borderWidth: 1,
        textAlign:"center",
        backgroundColor:"#EDCB58",
        color: '#080702',
        fontWeight: 'bold',
        marginLeft:15,
       },
       botao:{
        width:"90%",
        fontSize: 15,
        marginTop:40,
        backgroundColor:"#CBF564",
        padding:15,
        color: '#080702',
        fontWeight: 'bold',
        textAlign:"center",
        marginLeft:15,
        borderWidth: 1,
       borderRadius:20, 

       },
})