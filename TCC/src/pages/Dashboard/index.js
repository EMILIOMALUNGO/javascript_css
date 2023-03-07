import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, ScrollView } from "react-native";





export default function Dashboard() {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textImage}>
        <Image style={styles.Image} source={require("../../../assets/BARBA.jpg")} />
      </View>

      <ScrollView >
          <TouchableOpacity onPress={() => navigation.navigate("Big")}>
        <View style={styles.container1}>
            <Image style={styles.Image1} source={require("../../../assets/CARA.jpg")} />
            <Text style={styles.text1}>Selecionar Barbeiror </Text>
        </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Big")}>
        <View style={styles.container1}>
            <Image style={styles.Image1} source={require("../../../assets/TESOURA.jpg")} />
            <Text style={styles.text1}>Selecionar Tipo de Corte  </Text>
        </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Big")}>
          <View style={styles.container1}>
            <Image style={styles.Image1} source={require("../../../assets/HORA.jpg")} />
            <Text style={styles.text1}>Selecionar o Horario e Dia </Text>
          </View >
        </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Big")}>
        <View style={styles.container1}>
        <Image style={styles.Image1} source={require("../../../assets/CARTEIRA.jpg")} />
            <Text style={styles.text1}>Fazer pagamento </Text>
        </View>
          </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    fle: 1,
    backgroundColor: "#000",
  },
  text: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 30,
    color: '#D92938',
    fontWeight: 'bold',
    textAlign: "center",
  },
  Image: {
    width: "100%",
    height: 300,
    borderBottomRightRadius: 100,
  },
container1:{
flexDirection:"row",
},
  Image1: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 1,
    marginTop: 10,

  },
  text1: {
    fontSize: 20,
    color: '#F5E50A',
    marginTop: 10,
    marginLeft: 20,
  },

});