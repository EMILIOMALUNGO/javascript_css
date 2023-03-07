import React from "react";

import { StyleSheet, StatusBar, SafeAreaView, Text, View,TouchableHighlight, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [adicionar, setAdicionar] = React.useState();
  const [lista, setLista] = React.useState([]);
  const [ soma, setSoma] = React.useState();
  const [media, setMedia] = React.useState();
  const [maior, setMaior] = React.useState();
  const [menor, setMenor] = React.useState();
  const [qtde, setQtde] = React.useState(0);

  const Click = () => {
      const numero = + adicionar;
      const q = qtde + 1;            
      setAdicionar("");
      setQtde(q);
  
      setLista([...lista, numero]);
      setAdicionar('');
  
      let s;
      if (soma == undefined)
        s = numero;
      else
        s = soma + numero;
  
      setSoma(s);
      setMedia(s / q);
  
      if (maior == undefined || numero > maior)
        setMaior(numero);
  
      if (menor == undefined || numero < menor)
        setMenor(numero);
  
  
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
  
          <View style={ styles.resultContainer }>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.texto}>Soma</Text>
            <Text style={styles.textoDestaque}>{soma}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.texto}>Média</Text>
            <Text style={styles.textoDestaque}>{media}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.texto}>Maior</Text>
            <Text style={styles.textoDestaque}>{maior}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.texto}>Menor</Text>
            <Text style={styles.textoDestaque}>{menor}</Text>
          </View>
        </View>
      </View>
    
      {lista.map((valor, indice) => (
            <View style={{ flexDirection: "row", padding: 30,marginBottom:5,marginTop:4}}>
              <Text style={{ fontSize: 20, flex: 1}}>{valor}</Text>
              <Button tyitle="Excluir" style={styles.botao} onPress={() => excluir(indice)} />
            </View>
            ))}   

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
    fontSize: 30,
    padding: 20,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 40,
    backgroundColor: "#64C3EB",
 },
  Indroduzir: {
    padding: 10,
  },
  resultContainer: {
    borderWidth: 1,
    padding: 10
  },
  formContainer: {
    flexDirection: "row",
    padding: 10
  },
  listaContainer: {
    flex: 1,
    padding: 10
  },
  resultContainer: {
    borderWidth: 1,
    padding:5
  },

  itemLista: {
    fontSize: 20
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flex: 1,
    padding:10
  },
  texto: {
    fontSize: 20
  },
  textoDestaque: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
