import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Notas from './Notas';




export default function Aluno(props) {
 

  const [aluno, setAluno] = React.useState();

  return (
    <View>
      <View style={styles.container}>
        <TextInput placeholder='Aluno' style={styles.input} value={aluno} onChangeText={setAluno} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput style={styles.input1} placeholder='N1' />
        <TextInput style={styles.input1} placeholder='N2'  />
        <TextInput style={styles.input1} placeholder='N3' />
        <TextInput style={styles.input1} placeholder='N4'  />
      </View>
      <Button title='Calcular' onPress={() => props.onMostrar(Number(Aluno))} />
      <View>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  input: {
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
    marginBottom: 10
  },
  input1: {
    width: "25%",
    fontSize: 30,
    borderWidth: 1,
    marginBottom: 10
  },
}

)