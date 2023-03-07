import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, Button, TextInput, StatusBar, TouchableHighlight } from 'react-native';
export default function App() {
const { Email, setEmail } = React.useState()
 const { Senha, setSenha } = React.useState()
 const { Novousuario, setNovousuario } = React.useState()
const { Esqueceminhasenha, estEsqueceminhasenha } = React.useState()
 return (
    <SafeAreaView >
      <View style={styles.container}>
      <Image style={styles.Image} source={require("./assets/andro1.jpg")} />
      <TextInput style={styles.input} placeholder="Email" />
     <TextInput style={styles.input1} placeholder="Senha " />
     <TouchableHighlight onPress={() => Entrar()}>
          <View style={styles.botao1} >
            <Text>Entrar</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Novousuario()}>
          <View style={styles.botao1} >
            <Text>Novo usuàrio</Text>
           </View>
        </TouchableHighlight>
       <TouchableHighlight onPress={() => Esqueceminhasenha()}>
          <View style={styles.botao2} >
            <Text>Esquece minha senha</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  Image: {
    marginTop: 150,
    wisth: "100%",
    heigt: 30,
    padding: 50,
    resizeMode: "center"
  },
  input: {
    fontSize: 20,
    marginTop: 60,
    marginBotto: 20,
    borderRadius: 40,
    padding: 20,
    backgroundColor: "#9DA894"
  },
  input1: {
    fontSize: 20,
    marginTop: 20,
    borderRadius: 40,
    marginBotto: 20,
    padding: 20,
    backgroundColor: "#5C6965"
  },
  input2: {
    fontSize: 20,
    marginTop: 20,
    marginBotto: 20,
    borderRadius: 40,
    padding: 20,
    textAlign: "center"
  },
  botao1: { 
    marginTop:20,
    marginBottom: 20,
     backgroundColor: "#BFE645", 
     padding: 15,
      textAlign: "center" 
    },
    botao2:{
      marginBottom: 20,
     backgroundColor: "#84807C", 
     padding: 15,
      textAlign: "center" 

    },

});
