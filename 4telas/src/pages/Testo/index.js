import React from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";





export default function Testo() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            
            <Text style={styles.input}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>

            <Image style={styles.Image} source={require("../../../assets/fotocapa.jpg")} />
            
            <Text style={styles.input1}>  O Apple Pay ainda não está totalmente consolidado no
                mercado: só funciona nos Estados Unidos e em
                estabelecimentos parceiros com equipamento de leitura
                NFC. E, de acordo com um relato do China Business Week,
                ele logo deve ganhar um concorrente de peso para piorar
                a situação. Isso porque a Google estaria preparando um
                sistema de pagamentos via celular muito parecido que, ao
                menos provisoriamente, levaria o nome de Android Pay.
                </Text>
               <View>
                <Text style={styles.input1}>
                O Android Pay estaria em desenvolvimento na China, em
                uma parceria com a China UnionPay, maior operadora de
                cartões de crédito e débito do país — segunda do mundo,
                atrás somente da Visa. Essa aliança traz o benefício de um
                maior número de estabelecimentos envolvidos, dando uma
                vantagem inicial ao serviço em relação aos concorrentes.
                </Text>
                </View>
                <View>
                <Text style={styles.input1}>
                 Ainda segundo o site, o sistema seria o mesmo: bastaria
                aproximar o smartphone do terminal de pagamento para
                processar a compra, com base na tecnologia sem fio Nea
                </Text>
                </View>
            </ScrollView>
         
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      
    },
    Image: {
        width: "80%",
        marginTop:3,
        height: "50%",
        marginStart: 5,
        resizeMode: 'contain',
        textAlign: "center",
    },
    input: {
        fontSize: 25,
        marginTop: 10,
        padding: 7.5,
        marginBottom: 10,
        textAlign: "center",

    },
    input1: {
        marginTop:5,
        fontSize: 15,
        marginBottom:5,
        padding:10,
        textAlign: "justify",
      
    },
    tela: {
        fontSize: 20,
        width:"60%",
        marginTop:5,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 40,
        textAlign: "center",
        padding: 10,
        backgroundColor: "#F7DC05",
    },
})
