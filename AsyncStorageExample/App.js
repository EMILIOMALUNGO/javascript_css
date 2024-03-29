import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [valor, setValor]= React.useState();
  const [valorDigitado, setValorDigitado]= React.useState();

  const gravar =async () =>{
    try{
      await AsyncStorage.setItem("chave", valorDigitado);
      setValorDigitado(" ");
      setValor(valorDigitado);
    }
    catch (err) {
      console.log(err);
    }
  }
   const consultar =async() =>{
    try{
      const v = await AsyncStorage.getItem ("chave");
      setValor(v);
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect( () => {
    consultar();
     
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Armazenando dados no Aparelho</Text>
      <View style={styles.box}>
        <Text>Valor armazenado:</Text>
        <Text style={styles.highlight}>{valor}</Text>
      </View>
      <View style={styles.box}>
        <TextInput placeholder='Informe o valor:' style={styles.input} value={valorDigitado} 
        onChangeText={setValorDigitado}/>
        <TouchableOpacity onPress={gravar}>
            <Text style={styles.btn}>Gravar</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  btn: {
    padding: 10,
    backgroundColor: "blue",
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 5
  },
  box: {
    marginBottom: 20,
    marginTop: 20,    
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 30
  },
  highlight: {
    fontSize: 40
  }
});
