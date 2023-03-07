import { StyleSheet, Text, View,StatusBar  } from 'react-native';

export default function Bloco(props){
    return(
    <View style={{padding:20}}>
  
  <Text style={styles.objetivo1}>{props.titulo}</Text>
  <View>{props.conteudo.map((c) => <Text style={styles.objetivo}>{c}</Text>)}</View>
  </View>

    )
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    
    objetivo:{
      marginBottom:5,
      fontWeight:"bold"
    },
    objetivo1:{
      width:"80%",
      fontWeight:"bold",
  textAlign:"center"
    },
  });
  