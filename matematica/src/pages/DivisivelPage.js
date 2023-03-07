
import React from "react";
import { StyleSheet, StatusBar, Text, View, Button, ShadowPropTypesIOS, TextInput } from 'react-native';
import Header from "../components/Header";
import Lista from "../components/Lista";
import Resultado from "../components/Resultado";
import Titulo from "../components/Titulo";



export default function DivisivelPage() {
  const [lista, setLista] = React.useState([])

  const mostrar = (numero) => {
    let valores = [];

    for (let c= numero;  c >= 1; --c) {
      let resto = numero % c;
      if (resto == 0) {
        valores.push(c);
      }
    }
    setLista(valores); 
  }

  return (
    <View style={styles.container}>
      <Titulo title="DIVISIVEL POR" />
      <Header onMostrar={mostrar} />
      <Lista items={lista} />
      <Resultado resul={`Total ${lista.length} numero`} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

});

