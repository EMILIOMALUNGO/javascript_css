import { useState } from 'react';
import React from 'react';
import { StyleSheet,StatusBar,TouchableOpacity, Text, View,TextInput } from 'react-native';


export default function Registrar(props) {
 //const [estilos, setEstilos]= React.useState()


 
    return (
      <View style={styles.container}>
        {/* <TextInput placeholder='test' style={styles.input} value={estilos} onChangeText={setEstilos} />
        <TextInput placeholder='test' style={styles.input} value={estilos} onChangeText={setEstilos} />
        <TextInput placeholder='test' style={styles.input} value={estilos} onChangeText={setEstilos} />
        <TextInput placeholder='test' style={styles.input} value={estilos} onChangeText={setEstilos} /> */}
            <Campo onMostrar={mostrar(estilos)}/>
             <TouchableOpacity style={styles.button} onPress={() => mostrar()}>
          <Text style={styles.textButton}>Registrar</Text>
        </TouchableOpacity>
        <Text>{lista}</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },

    textButton:{
     padding:20,
 
      fontSize:20,
      marginTop:20,
     marginBottom:10,
     borderWidth:1 ,
     textAlign:"center",
     backgroundColor:"#78D629"

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