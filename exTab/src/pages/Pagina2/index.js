import React from "react";
import { SafeAreaView, StyleSheet,Text,TouchableOpacity,View,TextInput } from "react-native";

import { useNavigation}  from "@react-navigation/native";






export default function Pagina2(){
    const navigation=useNavigation()
   
   return(
<SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate("Pagina3")}> 
    <Text style={styles.tela1}>Ir na Pagina3</Text>
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
        width:"70%",
        padding:7,
        borderWidth: 1,
        borderRadius:20,
        backgroundColor: "#9DF545",
        textAlign:"center"
    },
   
})