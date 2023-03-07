
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View, TextInput,Button} from 'react-native';

export default function App() {

  const [raio, setRaio] = React.useState()

  const [diametro, setDiametro] = React.useState()

  const [periodo, setPeriodo] = React.useState()

  const [area, setArea] = React.useState()

 

  const calcular=() => {
    var d= (2 * raio);
    var p= (2 *Math.PI*raio);
    var a= (Math.PI * (raio)^2);
    setDiametro(d);
    setPeriodo(p.toFixed(2));
    setArea(a); 
    
  }
  return (

    <View style={styles.container}>
     <Image style={styles.Image} source={require("./assets/area.circulo5.jpg")} />
    
     <View style={styles.ImputView}>
     <Text style={styles.inputLabel}>Raio</Text>
     <TextInput style={styles.input} value={raio}
      onChangeText={setRaio} />
     </View>
     <Button title='calcular' style={styles.botao}
        onPress={() => calcular()} />
      <View style={styles.ResultadoView}>
        <Text style={styles.diametroLabel}>Diametro</Text>
        <Text style={styles.diametro}>{diametro}</Text>
      </View>
      <View style={styles.ResultadoView}>
        <Text style={styles.periodoLabel}>Periodo</Text>
        <Text style={styles.periodo}>{periodo}</Text>
      </View>
      <View style={styles.ResultadoView}>
        <Text style={styles.areaLabel}>Area</Text>
        <Text style={styles.area}>{area}</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Image:{
    flex: 1,
    fontSize: 20,
    height: 30,
   resizeMode: 'contain'
  },
  inputLabel:{
    fontSize: 30,
    marginBottom:40,
    marginTop: 40,
  },
  diametroLabel:{
    fontSize: 20,
    marginBottom:10,
  },
  input:{
    marginBottom:10,

  },
  periodoLabel:{
    fontSize: 20,
    marginBottom:10,
    marginTop: 20,
  },
  areaLabel:{
    fontSize: 20,
    marginBottom:10,
    marginTop: 30,

  },

}
);
