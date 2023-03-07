import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Notas from './Notas';

 
  function Lista(props){
     return(
         <Text style={styles.text}>{props.item}</Text>

     )
  }


     function Lista(props) {
    return (
         <View>
        
         <View style={{ flexDirection: "row" }}>
         <Text style={styles.text2}>{props.item.aluno}</Text>
             <Text style={styles.text2}>{props.item.n1}</Text>
             <Text style={styles.text2}>{props.item.n2}</Text>
             <Text style={styles.text2}>{props.item.n3}</Text>
             <Text style={styles.text2}>{props.item.n4}</Text>
             <Text style={styles.text2}>{props.item.media}</Text>
        </View>
         </View>
     )
 }

export default function Lista1(props) {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row" }}>

                <Text style={styles.text2}>Aluno</Text>
                <Text style={styles.text2}>n1</Text>
                <Text style={styles.text2}>n2</Text>
                <Text style={styles.text2}>n3</Text>
                <Text style={styles.text2}>n4</Text>
                <Text style={styles.text2}>Média</Text>
            </View>
            {props.items.map((item) => <Lista1 valores={item}/>)}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,


    },
    text: {
        fontSize: 16,
        padding: 20,
        borderWidth: 1,
        margin: 10
    },
    text2: {
        fontSize: 20,
        padding: 10,
        marginTop: 20,
        flex: 1,

    },
});