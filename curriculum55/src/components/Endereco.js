import { StyleSheet, Text, View,StatusBar  } from 'react-native';

export  default function Endereco(props){
    return(
  <View style={{fontSaze:20,padding:20,marginTop:10}}>
   <Text style={styles.endereco}>{props.ender}</Text>
   <View>{props.conteudo.map((c) => <Text style={styles.endereco}>{c}</Text>)}</View>
  </View>
    )
  } 
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
  
    },
    endereco:{
      marginBottom:5,
      fontWeight:"bold", 
    },
    
    });
  