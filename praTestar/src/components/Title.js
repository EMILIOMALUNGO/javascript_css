import { StyleSheet, StatusBar, Text, View, SafeAreaView, TextInput } from 'react-native';



export default function Title(props) {
  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>{props.titulo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    padding:20,
    textAlign:'center',
    fontSize: 30,
    marginTop: 30,
    marginBottom: 10,
    
  },

});

