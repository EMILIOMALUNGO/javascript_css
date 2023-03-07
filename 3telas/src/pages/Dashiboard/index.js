import React from "react";
import { SafeAreaView, StyleSheet,Text,TouchableOpacity,View,TextInput } from "react-native";

import { useNavigation}  from "@react-navigation/native";
import { AuthContext } from "../../contexts/Auth";






export default function Dashiboard(){
    const navigation=useNavigation()
    const { logout } = React.useContext(AuthContext)
   
   return(
<SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={() => {
        logout();
        navigation.navigate("Login");
        }}> 
    <Text style={styles.tela1}>Voltar</Text>
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
})