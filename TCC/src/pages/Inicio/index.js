import React from "react";
import { View, Text, Image, SafeAreaView,StyleSheet,StatusBar,TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native"
 


5
export default function Inicio() {
    const navigation=useNavigation()
    return (
        <SafeAreaView style={styles.container}>
          <View  style={styles.textImage}>
          <Image style={styles.Image} source={require("../../../assets/BARBA8.png")} />
          </View>

          <View style={styles.text}>
            <Text style={styles.text}>Barbearia Top Hair</Text>
            <Text style={styles.text1} > País: Brasil Cidade:Bauru  S/P </Text>
            <Text  style={styles.text1}> Rua: Jose Vicente Aiello 13129 </Text>
            <Text style={styles.text1}>Telefone: (14) 32343536 ou (14) 996767848</Text>
               <Text style={styles.text1}> Email: emilio.malungo@hotmail.com </Text>
               </View>
                  
            <TouchableOpacity onPress={( ) => navigation.navigate("Login")}>
                <Text style={styles.botao}>Mudar de tela </Text>
               </TouchableOpacity>
               

        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#968C87",
    },
     
    Image:{  
     marginTop:37,
     width:"100%",
     height:300,

    },
    text:{
        marginTop:10,
        marginBottom:30,
        fontSize:25,
        color:'#D92938',
        fontWeight: 'bold',
        textAlign:"center", 
          
        borderRadius:20, 
    },
    text1:{
        fontSize:15,
        padding:10,
        color:'#080702',
        fontWeight: 'bold',
    },
    botao:{
        width:"90%",
        fontSize: 20,
        marginTop:25,
        backgroundColor:"#CBF564",
        padding:10,
        color: '#080702',
        fontWeight: 'bold',
        textAlign:"center",
        marginLeft:15,
        borderWidth: 1,
       borderRadius:30, 
    },
    
  
});
