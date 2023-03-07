import React from "react";
import { View, Text, Image, SafeAreaView,StyleSheet,StatusBar, TextInput,TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native"

 


export default function Login() {
    const navigation=useNavigation()
    return (
    <SafeAreaView style={styles.container}>

    <View style={styles.Image}>
    <Image style={styles.Image} source={require("../../../assets/BARBA8.png")} />
    </View>

      <View style={styles.textinput}>
    <TextInput style={styles.input} placeholder="Usuario"/>
    <TextInput style={styles.input} placeholder="Senha"/>
    </View>

    <View styles={styles.botao}>
    <TouchableOpacity onPress={( ) => navigation.navigate("DrawerNav")}>
     <Text style={styles.text}>Entrar</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={( ) => navigation.navigate("Cadastrar")}>
     <Text style={styles.text}>Cadastrar</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={( ) => navigation.navigate("Inicio")}>
     <Text style={styles.text}>Tela Principal</Text>
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
    Image:{
     
        width:"100%",
        height:100,
    
    },
    input:{
        width:"90%",
        marginTop:40,
        fontSize:15,
        padding:5,
        borderWidth:1,
        textAlign:"center",
        backgroundColor:"#EDCB58",
        color: '#080702',
        fontWeight: 'bold',
        marginLeft:15,
    },
    text:{
     marginTop:15,
     fontSize:20,
     padding:10,
     borderWidth: 1,
     borderRadius:30,
     textAlign:"center",
     backgroundColor:"#62BA7F",
     color:'#080702',
     fontWeight:'bold',

    }
})