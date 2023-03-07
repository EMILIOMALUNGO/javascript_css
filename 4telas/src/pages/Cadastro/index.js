import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";








export default function Cadastro() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
          <Image style={styles.Image} source={require("../../../assets/fotocapa.jpg")} />
            
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input1} placeholder="Email" />
            <TextInput style={styles.input1} placeholder="Senha" />
            <TextInput style={styles.input1} placeholder="Confirmar Senha" />
            <TouchableOpacity onPress={() => navigation.navigate("Noticias")}>
                <Text style={styles.tela}>Registrar</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BF8E9A',
        padding:10,
    },
    Image: {
        marginTop :50,
        marginStart:15,
        height:"20%",
        width:"90%",
        resizeMode: "stretch",
    },
     input:{
        fontSize:25,
        borderWidth: 1,
        marginTop:90,
        padding:7.5,
        marginBottom:10,
        textAlign:"center",
        backgroundColor:"#AFFF8B"
        
     },
     input1:{
        fontSize:25,
        borderWidth: 1,
        marginTop:10,
        padding:7.5,
        marginBottom:10,
        textAlign:"center",
        backgroundColor:"#AFFF8B"
     },
     tela:{
        fontSize: 25,
        marginTop:50,
        marginBottom:5,
        borderWidth: 1,
        borderRadius:60,
        textAlign:"center",
        padding:10,
        backgroundColor:"#5A6169",

     },
})