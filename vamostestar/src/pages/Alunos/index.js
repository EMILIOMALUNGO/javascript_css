import React from "react";
import { SafeAreaView, StyleSheet,Text,TouchableOpacity,View } from "react-native";

import { useNavigation}  from "@react-navigation/native";






export default function Turma(){
    const navigation=useNavigation()
   
   return(
<SafeAreaView style={styles.container}>
    <Text style={styles.tela1}>Tela do Dia</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Alunos")}>
        <Text style={styles.tela}>Mudar de Tela</Text>

    </TouchableOpacity>
</SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tela: {
        fontSize: 20,
        marginTop:10,
        marginBottom:5,
        borderWidth: 1,
        borderRadius:60,
        width:"50%",
        padding:10,
        backgroundColor:"#028FED",
  },
  tela1:{
    fontSize: 20,
    marginTop:10,
    marginBottom:5,
    padding:10,
},
});