import react from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.contato}>
      <Text style={styles.titulo}>Emilio Jose Gombo Malungo</Text>
          <Text style={styles.texto}>Endereço:Brasil/sp - Bauru Rua:jose vicente Aiello 13129</Text>
          <Text style={styles.texto}>Telefone 14996767848 / 14981058439</Text>
          <Text style={styles.texto}>Email:emilio.malungo@hotmail.com</Text>
        </View>

        <Image style={styles.Image} source={require("./assets/emilio.jpg")} />

      </View>
      <View style={styles.objetivo}>
        <Text style={styles.subTitulo}>Objetivo</Text>
        <Text style={styles.texto}> Conseguir vaga como Programador </Text>
      </View>
      <View style={styles.formação}>
      <Text style={styles.subTitulo}>Formação</Text>
      <Text style={styles.texto}>Engenheiro Mecânico</Text>
      <Text style={styles.texto}>Tecnico Eletromecanico</Text>
      <Text style={styles.texto}>Cursando Técnico em Informatica</Text>
      </View>
      <View style={styles.HistoricoPROFICIONAL}>
      <Text style={styles.subTitulo}>Historico Proficional</Text>
      <Text style={styles.texto}>Empresa: Duratex</Text>
      <Text style={styles.texto}>Cargo: programador do PCM</Text>
      <Text style={styles.texto}>Atividade: Fazendo planejamento e controle das atividades, responsável pela área de redução de custo e estudo de melhoria contínua nos equipamentos, auxiliei no setor de compra
Participei de vários projetos inovadores, planejei alguns projetos de melhoria, dando vida útil nos equipamentos e aumentando o  rendimento e produtividade na fábrica. Fazia abertura de ordem de serviço e o fechamento de ordem de serviço solicitado pela equipe de manutenção. 
</Text>
<View style={styles.HistoricoPROFICIONAL}>
<Text style={styles.subempresa}>Empresa: Vivante</Text>
<Text style={styles.texto}>Cargo: Auxiliar de eletrica</Text>
<Text style={styles.texto}>Atividade: trabalhei como mecânico, fazendo manutenção preventiva, corretiva e preditiva nas maquinas</Text>
</View>
<View style={styles.HistoricoPROFICIONAL}> 
<Text style={styles.subempresa}>Empresa: Pressao e Vapor </Text>
<Text style={styles.texto}>Cargo: Mecânico</Text>
<Text style={styles.texto}>Atividades: trabalhei como mecânico de vaso de pressão,
 Tenho experiência na área de montagem e linha de vapor e todo tipo de válvulas (Segurança, Redutora, Moduladora, Controladora, Pneumática e outros.) e todo tipo de purgador de Bóia,TD, TDS e na manutenção de caldeira.
</Text>
</View>
<View style={styles.cursoscomplementaris}>
<Text style={styles.subcursos}>Cursos Complementares</Text>
<Text style={styles.texto}>Curso de do pacote Office SENAC 09/04/2020 </Text>
<Text style={styles.texto}>Curso de Excel Avançado com VBA SENAC 06/07/2021 </Text>
<Text style={styles.texto}>Curso de Banco de Dados SENAC 01/04/2022</Text>
<Text style={styles.texto}>Curso de Hidráulica. SENAI  60h (11/08/2021 – 4/11/2011)</Text>
<Text style={styles.texto}>Curso de Mecânica Automobilístico. SENAI 180h (29/07/2013 -17/12/2013)</Text>
<Text style={styles.texto}>Curso de NR-10</Text>
<Text style={styles.texto}>Curso de NR-35</Text>
<Text style={styles.texto}>CNH: A/B</Text>
</View>
<View style={styles.Idiomas}>
<Text style={styles.subIdiomas}>Idiomas</Text>
<Text style={styles.texto}>Português:Nato</Text>
<Text style={styles.texto}>Inglês:Intermediario</Text>
</View>
<View style={styles.informaçao}>
<Text style={styles.subInformaçao}>Informação com Plementares</Text>
<Text style={styles.texto}>Idealizo adquirir um histórico profissional de acordo com os padrões da empresa. Pôr em prática competência e dedicação no trabalho, tendo como objetivo, prosperar profissionalmente e visando sempre o crescimento da empresa.
 Competência para conduzir atividades técnicas, interpretando resultados em diversas pesquisas, mediante a uma busca de alternativa inovadora, atuando em equipe, preparado para assimilar e pesquisar para melhor atender os objetivos da organização da empresa.

</Text>

</View>
      
      </View>

      
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  Image: {
    flex: 1,
    height: 100,
    resizeMode: 'contain'
  },
  contato: {
    
    flex: 2,
  },
  objetivo: {
    marginTop: 5,
  },
  titulo: {
    fontSize: 30,
    marginBottom: 10,
  },
  subTitulo: {
    fontSize: 20,
    marginBottom: 10,
  },
  texto: {

  },
  subTitulo:{
    fontSize: 20,
    marginTop: 5,
  },
  empresa:{
    fontSize: 20,
    marginTop: 10,

  },
  subcursos:{
    fontSize: 20,
    marginTop: 10,
  },
  subIdiomas:{
    fontSize: 20,
    marginTop: 10,
  },
  subInformaçao:{
    fontSize: 20,
    marginTop: 10,
  },


});
