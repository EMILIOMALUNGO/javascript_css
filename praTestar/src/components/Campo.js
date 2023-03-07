import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Campo(props) {
  const [estilos, setEstilos]= React.useState([])
    return (

      <View style={styles.container}>
        <TextInput placeholder={props.estilos(estilos)} style={styles.input} value={estilos} onChangeText={props.onMostrar(estilos)} />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },

    input:{
     padding:20,
     height:20,
      fontSize:20,
      marginTop:10,
     marginBottom:10,
     borderWidth:1 ,
     backgroundColor:"#D69F29"

    },

  });