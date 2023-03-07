import React from "react";
import { StyleSheet, SafeAreaView, Text, Image, View, StatusBar, ScrollView } from 'react-native';

export default function App() {
  return (
<SafeAreaView style={styles.container}>
<StatusBar backgroundColor="#FF9057" barStyle="light-content" translucent={false} />
<View style={styles.containerHeader}> 
 <View style={styles.ImageRedim}>  <Image style={styles.ImageHeader} source={require("./assets/andro.jpg")} />
 </View>
 <View style={styles.TextRedim}>
   <Text style={styles.TextTitulo}> João Barba Ruiva </Text>
  <Text style={styles.TextInter}>Consultor de Negocio Imobiliario</Text>
  <Text style={styles.TextInter}> pirata sem navio custa acreditar, nesses pirata de hoje em dia</Text>
 <Text style={styles.TextInfo}> com base nos estudos muitos piratas estão a procura de ouro negro, sera que todos
            nos devemos ser piratas?, isso é decisão de cada um , seria boa ideia para todos poderem trabar juntos </Text>
  </View>
  </View>
   <View style={styles.TextEndeço}>
<Text style={styles.endereço}> Email:emilio.malungo@hotmail.com </Text>
<Text style={styles.endereço}> Endereço: rua jose vicente aillo 13-129 </Text>
<Text style={styles.endereço}> Telefone:(14)996767848 /(14)981058439 </Text>
<Text style={styles.endereço}> Data de Nascimento: 30/08/1953 </Text>
<Text style={styles.endereço}> Nacionalidade:Angolano </Text>
 <Text style={styles.endereço}> Link:00000000 </Text>
 </View>
 <ScrollView  style={styles.scrollView}> 
<View style={styles.ContainerHeader1}>
<Text style={styles.qlf}>Experiencia</Text>
 <View style={{flexDirection:"row"}}>
<View style={styles.data}>
 <Text style={styles.data1}>1997 - Atualmente</Text>
 </View>
 <View style={styles.experiencias1}>
 <Text style={styles.experiencias}>Agente Imobiliario Indempendente </Text>
<Text style={styles.experiencias}>R.Lima consultoria grande Florianopolis e cidade turistica</Text>
<Text style={styles.experiencias}>.Prosperaçõa de imovel para locação por temporada</Text>
<Text style={styles.experiencias}>.Agendamnto de visista e capacitção de imagem no local</Text>
<Text style={styles.experiencias}>.Avalição precisa do estado de bens e movel</Text>
<Text style={styles.experiencias}>.Orientaçõa quanto a valores e elaboraçõa de contrato</Text>
 <Text style={styles.experiencias}>.Indicaçõa de negocio mobiliario com boa relação custo e beneficio</Text>
</View> 
</View>
<View style={{flexDirection:"row"}}>
<View style={styles.data2}>
 <Text style={styles.data1}>1988-1996</Text>
 </View>
<View style={styles.experiencias2}>
<Text style={styles.experiencias}>Corretor de Imovel </Text>
<Text style={styles.experiencias}>Imobiliaria Alpha Florianopolis Brasil</Text>
 <Text style={styles.experiencias}>.Iniciei como atendente nos plantao de venda e em pouco tempo me tornei um dos membro da equipe de lite do grupo</Text>
 <Text style={styles.experiencias}>.Quando a empresa incorporou um consorcio de imovelpassei por um amplo treinamento no setor administrativo</Text>
 <Text style={styles.experiencias}>.Apos bater seguidamente as metas de vendas decidi emprender como autonomo e hoje tenho a empresa no topo da lista dos meus clientes </Text>
 </View>
 </View>
  </View>
  <View style={styles.educacao1}>
 <Text style={styles.qlf}>Educação</Text>
  <View style={{flexDirection:"row"}}>
  <View style={styles.data3}>
 <Text style={styles.data1}>1985</Text>
</View>
  <View style={styles.educacao2}>
<Text style={styles.educacao}>Tecnico em contabilidade</Text>
  <Text style={styles.educacao}>Cebrepre centro brasileiro de Educação</Text>
  </View>
  </View>
        </View>
        <View style={styles.linguas}>
        <View style={{flexDirection:"row"}}>
        <View style={styles.tipos}>   
        <Text style={styles.titlo}>Idiomas</Text>
        <Text style={styles.idioma1}>Espanol</Text>
        <Text style={styles.idiomas}>Basico</Text>
       </View>
        <View style={styles.habilidades}>
        <Text style={styles.titlo}>Habilidades</Text>
         <Text style={styles.habi}>Credibilidade</Text>
        <Text style={styles.habi}>Contatos</Text>
        <Text style={styles.habi}>Excelencia</Text>
        </View>
        </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
  },
  linguas:{
   marginBottom:10,
  },
  tipos:{
    padding:5,
    width:"35%",
    borderWidth: 2,
    borderColor: "#912F90",
  },
  titlo:{
    fontSize:20,
    marginTop:10,
   marginBottom:20,
  },
  habilidades:{
    padding:5,
    width:"63%",
    borderWidth: 2,
    marginHorizontal:5,
    borderColor: "#912F90"
  },
  qlf:{
    fontSize: 20,
    marginTop:10,
    marginBottom:20,
    textAlign:"center",
    color: "#0000FF"  
  }, 
   educacao:{
    marginBottom:5,
    marginTop:10,
    textAlign:"justify"
  },
  educacao1:{
    marginTop:3,
    marginBottom:30,
    borderWidth: 2,
    borderColor:"#912F90"
  },
  educacao2:{
    marginTop:5,
    textAlign:"justfy",
    width:"70%"
  },
  data:{
width:"30%",
  },
  data1:{
    padding:5,
    fontSize:10,
      },
  data2:{
    marginTop:20,
    width:"30%",
  },
  data3:{
    marginTop:10,
    width:"25%",
  },
  experiencias:{
    marginBottom:5,
    marginTop:5,
    textAlign:"justify"
  },
  experiencias1:{
    textAlign:"justfy",
    width:"65%"
  },
  experiencias2:{
    textAlign:"justfy",
    width:"65%"
  },
  containerHeader: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#912F90"
  },
  ContainerHeader1:{
    marginTop:10,
    marginBottom:5,
    fontWeight:"bold",
    borderWidth: 2,
    borderColor: "#912F90"
  },
  ImageHeader: {
    height: 120,
    width: 110,
    resizeMode: "stretch",
  },
  ImageRedim: {
    height: 120,
    width: 110,
    resizeMode: "stretch",
  },
  TextTitulo: {
    fontSize: 25,
    color: "#0000FF"
  },
 
  TextInter: {
   flexBasis:20,   
  },
  TextInfo: {
   
  },
  ImageRedim: {
    width: "22%",
    justifyContent:"center",
    marginLeft: 7,
  },
  TextRedim: {
    width: "70%",
    marginLeft: 25,
  },
  TextEndeço:{
    marginTop:10,
    borderWidth: 2,
    borderColor: "#912F90"
  },
  endereço:{
    fontSize:15,
    marginBottom:5,
  marginTop:5,
  },
});
