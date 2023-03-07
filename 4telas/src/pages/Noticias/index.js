import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";




export default function Noticias() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container} >
            <View style={{flexDirection:"row"} }>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.tela1}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Testo")}>
                    <Text style={styles.tela1}>Pagina Testo </Text>
                </TouchableOpacity>

            </View>

            <ScrollView>
                <View style={{ flexDirection: "row", marginBottom: 20, }}>
                    <Image style={styles.Image} source={require("../../../assets/fotocapa.jpg")} />
                    <Text style={styles.input2}>Android Pay? Google pode lançar sistema mobile de pagamentos em 201</Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 10, }}>
                    <Image style={styles.Image} source={require("../../../assets/fotocapa.jpg")} />
                    <Text style={styles.input2}>Android Pay? Google pode lançar sistema mobile de pagamentos em 201</Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 10, }}>
                    <Image style={styles.Image} source={require("../../../assets/fotocapa.jpg")} />
                    <Text style={styles.input2}>Android Pay? Google pode lançar sistema mobile de pagamentos em 201</Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 10, }}>
                    <Image style={styles.Image} source={require("../../../assets/fotocapa.jpg")} />
                    <Text style={styles.input2}>Android Pay? Google pode lançar sistema mobile de pagamentos em 201</Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 10, }}>
                    <Image style={styles.Image} source={require("../../../assets/fotocapa.jpg")} />
                    <Text style={styles.input2}>Android Pay? Google pode lançar sistema mobile de pagamentos em 201</Text>
                </View>

             

            </ScrollView>
        </SafeAreaView >

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
     
    },
    Image: {
        flex: 1,
        marginTop: 25,
        width: "25%",
        height: "70%",
        padding: 5,
        resizeMode: "stretch",
    },
    input2: {
        flex: 1,
        marginTop: 25,
        width: "60%",
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 80,
    },
tela1: {
 padding:10,
fontSize: 20,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 30,
    textAlign: "center",
    paddingBottom: 10,
    backgroundColor:"#07DB3C",
}

})