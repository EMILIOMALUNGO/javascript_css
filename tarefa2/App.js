import raact from "react";
import { SafeAreaView, StyleSheet, Text,Image, View,StatusBar } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
     <View style={{backgroundColor:"#FADB1E"}}>
      <Image style={ styles.Image1} source={ require("./assets/fotomaior.jpg")} />
   </View>
      <View style={styles.textTitle}>
       <Text style={styles.subTitulo}>Android Pay? Google pode 
       lançar sistema mobile de 
       pagamentos em 2015 </Text>
       </View>
       <Image style={styles.Image} source={ require("./assets/android.jpg")} />
     <View style={styles.textTitle1}>
       <Text style={styles.texto1}>O Apple Pay ainda não está totalmente consolidado no mercado:
        só funciona nos Estados Unidos e em
         estabelecimentos parceiros com equipamento de leitura NFC.
          E, de acordo com um relato do China Business Week,
          ele logo deve ganhar um concorrente de peso para piorar 
          a situação.Isso porque a Google estaria preparando um 
           sistema de pagamentos via celular muito parecido que, ao
            menos provisoriamente, levaria o nome de Android Pay.</Text>
            </View>
          <View style={styles.textTitle2}>
            <Text style={styles.testo2}> O Android Pay estaria em 
            desenvolvimento na China, em uma parceria com a China UnionPay, maior operadora de 
            cartões de crédito e débito do país — segunda do mundo, 
            atrás somente da Visa. Essa aliança traz o benefício de um
             maior número de estabelecimentos envolvidos, dando uma
              vantagem inicial ao serviço em relação aos concorrentes. </Text>
              </View>
              <View style={styles.textTitle3}>
             <Text style={styles.testo3}> Ainda segundo o site, o sistema seria o mesmo: bastaria
              aproximar o smartphone do terminal de pagamento para
               processar a compra, com base na tecnologia sem fio Near </Text>
              </View>
              </View>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subTitulo:{
    fontSize:20,
    padding: 20,
  },
  Image1:{
    fontSize: 40,
    width:"10%",
    marginTop:10,
    height: 30, 
    padding:20,
    marginBottom:20,
    resizeMode:'contain',
  },
  Image:{
    fontSize: 10,
    height: 100,
    marginTop:10,
   resizeMode: 'contain'
  },
  texto1:{
    padding:15,
  }, 
  testo2:{
    padding: 15,
},
testo3:{
  padding: 15,
},
});
