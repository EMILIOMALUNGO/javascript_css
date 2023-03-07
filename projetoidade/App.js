
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Button } from 'react-native';

export default function App() {
  const [idade, setIdade] = React.useState()

  const [resultado, setResultado] = React.useState()
 
  const calcular=() => {
  var res;
    if(idade>=18){
      res="maior de idade "
    }
      else{
     res="menor de idade "
    }
    setResultado(res);
    
  }
  return (
    <View style={styles.container}>
      <View style={ styles.InputView}>
        <Text style={styles.inputLabel}>Idade</Text>
        <TextInput style={styles.input} value={idade}
        onChangeText={setIdade}/> 
      </View>
      <Button title="calcular"  style={styles.botao}
        onPress={() => calcular()} />
        <View style={styles.ResultadoView}>
        <Text style={styles.resultadoLabel}>Resultado</Text>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputLabel:{
    fontSize: 30,
    marginBottom:30,
    marginTop: 30,
    textAlign: 'center'
  },
  resultadoLabel:{
    fontSize:40,
    marginTop: 30, 
    textAlign: 'center'
  },
  input:{
    marginTop:10,
    marginBottom:30,
    fontSize:20,
    textAlign: 'center'
  },
  resultado:{
    marginTop:10,
    fontSize:30,
    textAlign: 'center'
    
  },

  
});
