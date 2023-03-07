
import {SafeAreaView,StyleSheet, View,Text} from "react-native"


export default function APP() {
  return(
    <SafeAreaView style={styles.contaneir}>
      <statubarBar backgraundcolor="#000000" barStyle=" light-content" tranLucent={false}/>
    <View>
    <Text style={styles.textTitle}>emilio malungo</Text>
    </View>
   </SafeAreaView>
  )
  
}
 // construção da folha de estilo 
const styles = StyleSheet.create({
  conteiner:{
    flex:1
  },
  textTitle:{
    fontSize:25,
    fontWeight:"bold",
    color:"#DE3008",
    textAlign: 'center'

  },

})
