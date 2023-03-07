import { StyleSheet, Text,View,StatusBar  } from 'react-native';

export default function Titulo (props){
    return(
     
     <View style={{fontSaze:30,marginTop:30,alignItems:"center"}}>
        <Text style={styles.titulo}>{props.title}</Text>
      
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    titulo:{
  fontWeight:"bold"
    },
    
  });
  