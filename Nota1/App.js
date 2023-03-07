import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Notas from './src/Notas';
import Aluno from './src/Aluno';
import Lista1 from './src/Lista1';
import Resultado from './src/Resultado';


export default function App() {

  const notas=[
    {
    nome:"Emilio",
    n1:6,
    n2:8,
    n3:9,
    n4:5,
    media:8,
},
  {
    nome:"maria",
    n1:7,
    n2:5,
    n3:9,
    n4:10,
    media:7,
},

  ]

  return (
    <View >
      <Notas nome="Notas"/>
      <Aluno onMostrar={Aluno} />
      <Lista1 items={notas} />
   
      </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
