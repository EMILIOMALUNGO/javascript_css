import react from 'react';
import { SafeAreaView,StyleSheet, Text,Image, View,StatusBar } from 'react-native';
export default function App() {
  return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Notìcia </Text>
      <View style={{flexDirection:"row"}}>
      <Image style={styles.image} source={ require("./assets/android.jpg")} />
      <View style={styles.android1}>
       <Text style={styles.texto}> Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
      </View>
      </View>
      <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
      <Image style={styles.image} source={ require("./assets/android.jpg")} />
      <View style={styles.android1}>
       <Text style={styles.texto}> Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
      </View>
      </View>
      </View>
      <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
      <Image style={styles.image} source={ require("./assets/android.jpg")} />
      <View style={styles.android1}>
       <Text style={styles.texto}> Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
      </View>
      </View>
      </View>
      <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
      <Image style={styles.image} source={ require("./assets/android.jpg")} />
      <View style={styles.android1}>
       <Text style={styles.texto}> Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
      </View>
      </View>
      </View>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   image:{
    flex: 1,
    width:100,
    height: 90,
    marginTop: 100,
    resizeMode: 'contain'
  },
  textTitle:{
    fontSize:20,
    padding: 20,
    fontWeight:"bold",
    backgroundColor:"#85DB14"
  },
  android1:{
    flex:2,
    marginTop: 100,
   marginLeft:20,
  },
});
