import { StyleSheet, Text, View,StatusBar  } from 'react-native';

export default function Formacao(props){
    return(
     <View style={{padding:20,}}>
      <Text style={styles.formacao}>{props.titulo}</Text>
      <View>{props.conteudo.map((c) => <Text style={styles.formação}>{c}</Text>)} </View>
      </View>
    )
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    formacao:{
      marginBottom:5,
      fontWeight:"bold"
    },
    formacao1:{ 
     
      width:"80%",
      fontWeight:"bold",
      textAlign:"center"
   },
  });
  