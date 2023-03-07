import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native"

import ImageA from "../components/Image";

import Buttons from "../components/Button";




export default function Inicio() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.containerHeader}>
                <ImageA style={styles.Image} image={require("../../assets/TCC.jpg")} />
            </View>

            <View style={styles.listaInicio}>
                <Text style={styles.inicio}>Planeja o seu dia</Text>

                <View style={styles.containerApresentacao}>
                    <Text style={styles.inicio1}>Organiza sua vida usando App "Planeja sua vida".Tenha uma vida planejada e organizada.
                        PV é a maneira mais fácil de organizar seus projetos e suas atividades diárias sempre no prazo.
                        não fica de fora baixa já o seu aplicativo,mais de 10 milhões de pessoas em todo mundo já estão usando. Cadastro grátis
                    </Text>
                    <View style={styles.containerButton}>
                        <Buttons style={styles.botao} styleTxt={styles.botaoTxt} buttonName='Mudar Tela' onPress={() => navigation.navigate("LogIn")} />
                    </View>
                </View>
                <View style={styles.rodape}>
                    <Text style={styles.inicio2}>Local:senac</Text>
                    <Text style={styles.inicio2}>Telefone:(14)3321-3199/(14)996767848</Text>
                    <Text style={styles.inicio2}>E-mail:bauru@sp.senac.br</Text>
                    <Text style={styles.inicio2}>Rua:Engenheiro Saint Martin 10-12,Centro,CP:17010-150</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBC12C",
    },
    Image: {
        width: "100%",
        height: 270,
        borderBottomRightRadius: 100,
    },
    inicio: {
        textAlign: "center",
        marginTop: 30,
        color: '#722233',
        fontWeight: 'bold',
        fontSize: 20,
    },

    inicio1: {
        fontSize: 15,
        padding: 5,
        color: '#080702',
        fontWeight: 'bold',
        textAlign: "justify"
    },
    inicio2: {
       fontSize: 15,
        fontWeight: 'bold',
        marginLeft:10,
    },
    botao: {
        width: '92%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35B9FF',
        marginLeft: 15,
    },
    botaoTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }

});