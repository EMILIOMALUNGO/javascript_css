
import React from "react";
import { StyleSheet, Text, View,StatusBar  } from 'react-native';
import Bloco from "./src/components/Bloco";
import Titulo from "./src/components/Titulo";
import Endereco from "./src/components/Endereco";


function PaginaTitulo (props){
  return(
   
   <View style={{fontSaze:30,marginTop:30}}>
      <Text style={styles.titulo}>{props.titulo}</Text>
      <Text style={styles.titulo}>Emilio Jose GomboMalungo</Text>
    </View>
  )
}
function PaginaEnderco(props){
  return(
<View style={{fontSaze:20,padding:20,marginTop:10}}>
 <Text style={styles.endereco}>{props.endereco}</Text>
<Text style={styles.endereco}>Brasileiro,casado, 26 anos</Text>
<Text style={styles.endereco}>E-mail:emilio.malungo@hotmail.com</Text>
<Text style={styles.endereco}>celular:(14)996767449/(14)981058439</Text>
<Text style={styles.endereco}>Endereço:Rua Jose vicente Aillo 13-129/ cidade:Bauru, S/P</Text>
</View>
  )
} 
function PaginaObjetivo(props){
  return(
  <View style={{padding:20}}>
<Text style={styles.objetivo}>{props.objetivo}</Text>
<Text style={styles.objetivo1}>Objetivo</Text>
<Text style={styles.objetivo}>.Conseguir vaga como Programador Front End</Text>
</View>
  )
}
function PaginaFormacao(props){
  return(
   <View style={{padding:20,}}>
    <Text style={styles.formacao}>{props.formacao}</Text>
   <Text style={styles.formacao1}>Formação</Text>
  <Text style={styles.formacao}>1-Bacharelado dem Logistica (2018)</Text>
<Text style={styles.formacao}>2-Adminitração em Marketing (2021)</Text>
</View>
  )
}
function PaginaCursos(props){
  return(
    <View style={{padding:20}}>
<Text style={styles.cursos}>{props.cursos}</Text>
<Text style={styles.cursos1}>Cursos Complementares</Text>
<Text style={styles.cursos}>1-Gestão de Tranporte</Text>
<Text style={styles.cursos}>2-Comercio Exterior</Text>
<Text style={styles.cursos}>3-Gestão de Logistica Portuaria </Text>
</View>
  )
}
function PaginaExperiencias(props){
  return(
    <View style={{padding:20}}>
<Text style={styles.exp}>{props.experiencias}</Text>
<Text style={styles.exp1}>Experiencia</Text>
<Text style={styles.exp}>1-Consultor de Logistica (2013 á 2015)</Text>
<Text style={styles.exp}>2-Cordenador de Planejamento e Control da produção (2016 á 2017 )</Text>
<Text style={styles.exp}>3- Supervisor de Logistica (2018 á 2021)</Text>
</View>
  )
}
export default function App() {
  return (
    <View>
      <Titulo title="Emilio Jose GomboMalungo "/>
      <Endereco ender="Endereço" conteudo={["Brasileiro,casado, 26 anos" ,"E-mail:emilio.malungo@hotmail.com",
      "celular:(14)996767449/(14)981058439","Endereço:Rua Jose vicente Aillo 13-129/ cidade:Bauru, S/P "]}/>
        <Bloco titulo="objetivo" conteudo={["Conseguir vaga como Programador Front End"]}/>
        <Bloco titulo="Formação" conteudo={["1-Bacharelado dem Logistica (2018)", "2-Adminitração em Marketing (2021)",""]} />
        <Bloco titulo="Cursos"  conteudo={["1-Gestão de Tranporte","2-Comercio Exterior","3-Gestão de Logistica Portuaria "]} />
        <Bloco titulo="Experiencias"  conteudo={["1-Consultor de Logistica (2013 á 2015)",
        "2-Cordenador de Planejamento e Control da produção (2016 á 2017 )","3- Supervisor de Logistica (2018 á 2021)"]} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo:{
fontWeight:"bold"
  },
  endereco:{
    marginBottom:5,
    fontWeight:"bold"
  },
  objetivo:{
    marginBottom:5,
    fontWeight:"bold"
  },
  objetivo1:{
    width:"80%",
    fontWeight:"bold",
textAlign:"center"
  },
  formacao:{
    marginBottom:5,
    fontWeight:"bold"
  },
  formacao1:{ 
   
    width:"80%",
    fontWeight:"bold",
    textAlign:"center"
  },
  cursos1:{
    width:"80%",
    fontWeight:"bold",
    textAlign:"center"
  },
  cursos:{
    marginBottom:5,
    fontWeight:"bold"
 },
 exp1:{
  width:"80%",
  fontWeight:"bold",
  textAlign:"center"
 },
 exp:{
  marginBottom:5,
  fontWeight:"bold"
 },
});
