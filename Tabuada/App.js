import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, TouchableHighlight, style, Text, Image, TextInput, View, StatusBar } from 'react-native';


export default function App() {

  const [number, setNumber] = useState([])

  const [multiplicador] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  return (
    <View>
      <StatusBar backgroundColor='#000000' />
      <Text>Tabuada</Text>
      <TextInput  placeholder='Digite o Aqui'
      value={number} 
      onChangeText={setNumber} />     
    </View>
  );
}
