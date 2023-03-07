import { useNavigation } from "@react-navigation/native";
import React from "react";
import {SafeAreaView,StyleSheet,Text,TouchableOpacity,View,TextInput,Image,ScrollView} from "react-native";






export default function Produto(){
    const navigation=useNavigation()
    return(

<SafeAreaView style={styles.container}>
<View  style={styles.textImage}>
<Image style={styles.Image} source={require("../../../assets/BARBA.jpg")} />
</View> 
  
  <ScrollView>
   <View>
    <Text style={styles.text}>Conheça os nomes de 10 tipos de cortes de cabelo masculino
Aprenda quais são os principais cortes de cabelo masculino que estão na moda, 
veja fotos e escolha o melhor corte para você</Text>
</View>
<View>
<Text style={styles.text1}>1-Corte Undercut</Text>
<Image style={styles.Image1} source={require("../../../assets/CORTE1.jpg")} />
<Text style={styles.text2}>Já faz algum tempo que essa tendência está no topo da preferência dos mais antenados.  
O undercut é a base para diversos outros estilos.

Quer saber como definir esse corte? Basta manter as laterais da cabeça e nuca raspadas e não mexer muito
 no comprimento do topo da cabeça, que fica com bastante volume.

Versátil, o corte combina com todos os tipos de fios e permite que o cabelo do topo seja estilizado de diversas formas:
 se for longo, você consegue ter uma franja também comprida e, se quiser, pode até mesmo esconder suas laterais raspadas.</Text>
 </View>
 <View>
    <Text style={styles.text1}>2-Corte Coque Samurai</Text>
    <Image style={styles.Image1} source={require("../../../assets/CORTE3.jpg")} />
    <Text style={styles.text2}>Entre os mais populares nomes de cortes de cabelo masculino,
     o coque samurai é uma mistura do undercut com o man bun (em português: coque masculino).
Esse já é um dos nomes de cortes de cabelo masculino mais populares.
Com as laterais da cabeça raspadas e coque alto no centro, preso despretensiosamente em forma de nó.
Ele exige um pouco de paciência na espera do crescimento dos fios, mas vale experimentar!</Text>
    </View>
    <View>
    <Text style={styles.text1}>3-Corte Militar </Text>
    <Image style={styles.Image1} source={require("../../../assets/CORTE2.jpg")} />
    <Text style={styles.text2}>Seu estilo é mais clássico? Ou gosta de manter o cabelo sempre bem aparado? Então, 
    o corte militar é uma excelente opção para você!
Aqui, topo e laterais ficam com pouco volume, sendo as laterais um pouco mais curtas.
Se quiser ousar um pouco mais, combine esse estilo com a tendência fade – um degradê de comprimento nas laterais da cabeça – 
e penteie os fios do topo para a lateral para que os fios fiquem bem certinhos.</Text>
    </View>
    <View>
    <Text style={styles.text1}>4-Ponpadour</Text>
    <Image style={styles.Image1} source={require("../../../assets/CORTE4.jpg")} />
    <Text style={styles.text2}>O pompadour é um topete frontal cheio de volume e personalidade! 
    As laterais aqui são um pouco mais longas que nas tendências anteriores.
Para conquistar esse estilo, é preciso pentear todos os fios para trás e usar um finalizador para mantê-los no lugar.
 Com um toque de anos 1950, esse corte é um clássico.
Quer deixá-lo mais contemporâneo? Combine com laterais em fade.</Text>
</View>
       <View>
    <Text style={styles.text1}>5-Corte Mocaino</Text>
    <Image style={styles.Image1} source={require("../../../assets/CORTE5.jpg")} />
    <Text style={styles.text2}>Esse corte moicano masculino ficou famoso com o movimento punk dos anos 1970 e,
     mais recentemente, ganhou destaque principalmente entre jogadores de futebol.
A principal característica é que os fios centrais do topo da cabeça ficam levantados.
Apesar de ser dos nomes de cortes de cabelo masculino mais famosos, seu perfil mudou e se atualizou ao longo do tempo.
Veja também: Corte moicano disfarçado: 11 modelos diferentes da tendência!</Text>
</View>
       <View>
     <Text style={styles.text1}>6-Corte Sulfita</Text>
     <Image style={styles.Image1} source={require("../../../assets/CORTE6.jpg")} />
     <Text style={styles.text2}>Entre os nomes de cortes de cabelo masculino mais populares,
     o surfista é o mais longo e despojado de todos.
Com uma base mais arredondada, a franja fica na altura das sobrancelhas e levemente jogada para uma das laterais.
Se for bem ousado, aposte em luzes fininhas no topo da cabeça para conquistar um efeito queimado de sol.</Text>
     </View>
<View>
    <Text style={styles.text1}>7-Corte Asa Delta</Text>
    <Image style={styles.Image1} source={require("../../../assets/CORTE7.jpg")} />
    <Text style={styles.text2}>Também bastante descontraído, o corte asa delta é mais repicado que 
    os outros e deixa a franja mais longa e pontuda.
Se quiser um toque diferente, faça um topete bagunçado com gel líquido.</Text>
    </View>
    <View>
    <Text style={styles.text1}>8-Corte Razor Part</Text>
    <Image style={styles.Image1} source={require("../../../assets/CORTE8.jpg")} />
    <Text style={styles.text2}>No razor part é feita aquela risca em uma das laterais para deixar a marcação bem evidente.
Quem já usou o estilo bastante tempo foi o jogador de futebol Cristiano Ronaldo.</Text>
    </View>
    <View>
    <Text style={styles.text1}>9-Desfarsado</Text>
    <Image style={styles.Image1} source={require("../../../assets/CORTE9.jpg")} />
    <Text style={styles.text2}>O corte disfarçado é um estilo muito popular entre os homens, já que funciona em todas as texturas de fio.
Nele, as laterais são cortadas bem curtas, fazendo um degradê discreto até a nuca e é mantido um volume maior no topo da cabeça.</Text>
    </View>
    <View>
    <Text style={styles.text1}>10-Corte Social</Text>
    <Image style={styles.Image1} source={require("../../../assets/CORTE10.jpg")} />
    <Text style={styles.text2}>O corte social é aquele clássico e um dos estilos mais comuns para homens que gostam do cabelo curto.
Nesse tipo de cabelo, as laterais e nucas são baixas, não necessariamente raspadas, e o topo mais longo.</Text>
    </View>

</ScrollView>
</SafeAreaView>

    )
}
   const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000",

    },
    Image:{ 
    width:"100%",
     height:250,  
  borderBottomRightRadius: 100,
       },
       Image1:{ 
        width:"100%",
         height:200,
         marginBottom:5,
       },
     
       text:{
        fontSize:15,
        padding:10,
        marginTop:10,
        marginBottom:10,
        color:'#CBF564',
        fontWeight: 'bold',
        textAlign:"justify",  
    },
    text1:{
    fontSize:20,
    marginTop:10,
    marginBottom:10,
    color:'#D92938',
    fontWeight: 'bold',
    marginLeft:15,
    textAlign:"center",
    },
    text2:{
        fontSize:15,
        marginTop:5,
        color:"#CBF564",
        fontWeight: 'bold',
        marginLeft:10,
        textAlign:"justify", 
        },
    });