import React from "react";
import { SafeAreaView, StyleSheet,Text,TouchableOpacity,View,TextInput} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useNavigation}  from "@react-navigation/native";


export default function Dashiboard(){
    const navigation=useNavigation()
   
   return(
    <SafeAreaView style={{flexDirection:"row"}}>
    <TouchableOpacity onPress={() => navigation.navigate("Pagina1")}> 
    <Text style={styles.tela2}>Ir na Pagina1</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("Pagina2")}> 
    <Text style={styles.tela2}>Ir na Pagina2</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("Pagina3")}> 
    <Text style={styles.tela2}>Ir na Pagina3</Text>
    </TouchableOpacity>

 
</SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    tela2:{
        fontSize:15,
        marginTop: 60,
        padding:15,
        marginLeft:10,
        borderWidth: 1,
        borderRadius:5,
        backgroundColor: "#42EBCD",
        textAlign:"center"
    },
})