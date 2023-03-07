import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, Button, TouchableOpacity, View, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function Login(props) {
    const navigation = useNavigation()
   
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput placeholder="Email" style={styles.input} />
                <TextInput placeholder="Senha" style={styles.input} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Dashiboard") }>
                    <Text style={styles.tela1}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Cadastrar")}>
                    <Text style={styles.tela2}>Cadastra usuario</Text>
                </TouchableOpacity>
  
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tela1: {
      
        fontSize:20,
        marginTop: 30,
        marginBottom: 5,
       padding:20,
        borderWidth: 1,
        borderRadius:40,
        backgroundColor: "#9DF545",
        textAlign:"center"
    },
    tela2:{
        
        fontSize:20,
        marginTop: 30,
        marginBottom: 5,
       padding:20,
        borderWidth: 1,
        borderRadius:40,
        backgroundColor: "#42EBCD",
        textAlign:"center"
    },
    input:{
        fontSize:20,
        marginTop: 30,
        marginBottom: 5,
       padding:20,
        borderWidth: 1,
        backgroundColor: "#EBA76C",
        textAlign:"center"

    },

})