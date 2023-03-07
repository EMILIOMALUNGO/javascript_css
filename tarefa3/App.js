
import React from "react";
import { StyleSheet, Text,Image,TextInput,View,Button,placeholder, SafeAreaView,StatusBar } from 'react-native';
export default function App() {
  const [Nome, setNome] = React.useState()
  const [Email, setEmail] = React.useState()
  const [Senha, setSenha] = React.useState()
  return (
    <View style={styles.container}>
    <Image style={styles.Image} source={require("./assets/andro1.jpg")} />  
    <Text style={styles.titlo}>Novo usuário</Text>
    <TextInput style={styles.input} placeholder="Nome"/>
    <TextInput style={styles.input} placeholder="Email"/>
    <TextInput style={styles.input} placeholder="Senha "/>
    <TextInput style={styles.input} placeholder="Senha"/>
    <Button title="Registrar" style={styles.botao} 
      onPress={() => registrar()} />
     </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
    Image:{
 marginTop:30,
    width:"100%",
    height: 100,
   resizeMode:'contain',
  },
  titlo:{
    fontSize:30,
    textAlign:"center",
    marginTop:10,
    marginBottom:10,
  },
  input:{
    fontSize:20,
    marginTop:10,
    marginBottom:10,
    backgroundColor:"#85DB14",
    padding: 10,
  },
  botao:{
    marginTop: 10,
    marginBottom:70,
  },

});


  
