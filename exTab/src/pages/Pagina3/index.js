import React from "react";
import { SafeAreaView, StyleSheet,Text,TouchableOpacity,View,TextInput } from "react-native";

import { useNavigation}  from "@react-navigation/native";






export default function Pagina3(){
    const navigation=useNavigation()
   
   return(
<SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate("Dashiboard")}> 
    <Text style={styles.tela1}>Voltar no Dashiboard</Text>
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
        width:"70%",
       padding:7,
        borderWidth: 1,
        borderRadius:30,
        backgroundColor: "#9DF545",
        textAlign:"center"
    },
   
})