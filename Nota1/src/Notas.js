import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Notas(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{props.nome}</Text> 
    </View>

  );
}
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        nome: {
          padding:20,
          textAlign:'center',
          fontSize: 30,
          marginTop: 30,
          marginBottom: 10,
          
        },
});
