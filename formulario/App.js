import React,{useState}from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default function App() {
  const [num1, setNum1] = React.useState("");
  
  const [num2,  setNum2]= React.useState("");
  
  const [resultado, setResultado] = React.useState("");

  function handleSoma(){
    let soma= Number(num1)+ Number(num2)
    setResultado(Number(soma))

  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FF7E01' barStyle='light-content' translucent={false} />

      <View style={styles.container1}>
        <Text style={styles.textHeader}>Campos do Formulário</Text>

        <TextInput style={styles.input} placeholder='Digite o 1º valor' placeholderTextColor='#FFFFFF'
          keyboardType='nummeric'
          value={num1}
          onChangeText={setNum1}

        />

        <TextInput
          style={styles.input}
          placeholder='Digite o 2º valor'
          placeholderTextColor='#FFFFFF'
          keyboardType='nummeric'
          value={num2}
          onChangeText={setNum2}
        />

        <TouchableOpacity style={styles.button} onPress={handleSoma}>
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
        <Text style={styles.resultadoLabel}>{resultado}</Text>
      </View>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:"center"
  },
  input: {
    fontSize:20,
    backgroundColor: '#009CFF',
    marginTop: 20,
    height: 40,
    borderRadius: 8,
    textAlign: 'center'
  },
  button: {
    marginTop: 30,
    backgroundColor: '#FF1D2B',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  resultadoLabel:{
    marginTop:20,
    fontSize:30,
    borderRadius: 8,
    textAlign:"center",
  height:40,
backgroundColor:"#29F23C"
  },
  container1:{
  width:"90%",
 
  },
})


i

