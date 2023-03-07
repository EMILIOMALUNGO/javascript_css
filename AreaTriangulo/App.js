import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [base, setBase] = React.useState(20)

  const [altura, setAltura] = React.useState(20)

  const [resultado, setResultado] = React.useState(20)

  const calcular=() => {
    var res= (base * altura)/2;
    setResultado(res);
  }
  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.titulo}>AREA DE UM TRIANGULO </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <View style={styles.InputView}>
          <Text style={styles.inputLabel}>BASE</Text>
          <TextInput style={styles.input} value={base}
            onChangeText={setBase} />
        </View>
        <View style={styles.VALOR}>
          <Text style={styles.valor}>X</Text>
        </View>
  
        <View style={styles.InputView}>
          <Text style={styles.inputLabel}>ALTURA </Text>
          <TextInput style={styles.input} value={altura}
            onChangeText={setAltura} />
        </View>
      </View>
      <Button title='calcular' style={styles.botao}
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
  titulo: {
    fontSize: 30,
    marginTop:20,
    marginBottom:30,
    textAlign: 'center'  
  },
  inputLabel: {
    fontSize: 20,
    marginBottom:30,
    
  },
  resultadoLabel:{
    fontSize: 20,
    marginBottom:30,
    marginTop:10,
    textAlign: 'center'
  },
  valor:{
    fontSize: 20,
    marginBottom:30,
   
  },
InputView:{
  marginLeft: 80,
  textAlign: 'center'
},
resultado:{
  textAlign: 'center'
},
input:{
  borderWidth:1,
  textAlign: 'center',
  backgroundColor:"#FA5921"
}
});
