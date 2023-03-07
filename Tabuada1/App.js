import React from "react";
import { SafeAreaView, StyleSheet,Text,TextInput, View, StatusBar} from 'react-native';

export default function App() {

  const {mult, setMult}= React.useState([0])
  const multiplicador = [0, 1, 2, 3, 4, 5, 6,7, 8, 9, 10];

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Tabuada</Text>
    <View styly={styles.InputView}>
        <TextInput style={styles.input} placeholder="Number" />
        </View>

        <View>
        {multiplicador.map((v) => (
          <View style={styles.linha}>
            <Text style={styles.linhaText}>{mult}</Text>
            <Text style={styles.linhaText}>X</Text>
            <Text style={styles.linhaText}>{v}</Text>
            <Text style={styles.linhaText}>=</Text>
            <Text style={styles.linhaText}>{mult * v}</Text>
          </View>
        ))}
      </View>
      <View style={styles.bloco}>
        {multiplicador}
      </View>
      <View style={styles.bloco}>
        {multiplicador.map((v) => <View>{mult + " X " + v + " = " + (mult * v)}</View>)}
      </View>
      <StatusBar style="auto" />
  
       
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  title:{
    fontSize:30,
    margin:50,
    textAlign:"center",
    resizeMode:'contain',
  },
  botao1:{
    fontSize:30,
    height:30,
    padding:30,
  },

 input:{
    fontSize:20,
    height:30,
    textAlign:"center",
    marginBottom:20,

  },
  

});

