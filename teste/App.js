import React from "react";

import { StyleSheet, StatusBar, SafeAreaView, Text, View, TouchableHighlight, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [adicionar, setAdicionar] = React.useState()
  const [lista, setLista] = React.useState(["Cafe", "Banho", "Correr"])

  const Click = () => {
    setLista([...lista, adicionar]);
    setAdicionar("");
  }
  const excluir = (indice) => {
    lista.splice(indice, 1);
    setLista([...lista]);
  }

  return (
    <SafeAreaView style={styles.container}>
     
     
          <View style={{ backgroundColor: "#05F69D" }}>
            <Text style={styles.title}>Plano Diarias</Text>
          </View>
          <View style={styles.container1}>
            <TextInput placeholder="Adicionar"
              style={styles.input} value={adicionar} onChangeText={setAdicionar} />
          </View>
          <View style={styles.botao}>
            <Button title="Click" style={styles.botao}
              onPress={() => Click()} />
          </View>
       
          {lista.map((valor, indice) => (
            <View style={{ flexDirection: "row", padding: 20 }}>
              <Text style={{ fontSize: 20, flex: 1, marginBottom: 5, marginTop: 5 }}>{valor}</Text>
              <Button title="Excluir" style={styles.botao} onPress={() => excluir(indice)} />
            </View>
          )
         
          )}

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 30,
    textAlign: "center",
  },
  container1: {
    fontSize: 30,
    padding: 20,
  },
  input: {
    fontSize: 30,
    padding: 30,
    textAlign: "center",
    borderRadius: 40,
    backgroundColor: "#64C3EB"
  },
  botao: {
    fontSize: 20,
    padding: 20,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 40,
    backgroundColor: "#64C3EB"
  },
  Indroduzir: {
    padding: 10,
  },

});


