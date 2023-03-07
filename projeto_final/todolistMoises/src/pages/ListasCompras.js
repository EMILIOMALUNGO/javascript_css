import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Text, View, TextInput, ScrollView, TouchableOpacity, Modal } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';

import { ListProductContext } from '../../context/ListProductCreate';
import { ModalBuy } from '../components/ModalBuy';
import ListaProdutos from '../components/ArrayProdutos';

export default function ListasCompras() {
  
  const {setSelectedCategory, categoryList} = React.useContext(ListProductContext)
  const [ visible, setVisible ] = React.useState(false)



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Compras!!!</Text>
      </View>
      <ScrollView>
      <View style={styles.lista}>
        <ListaProdutos/>
      </View>
      </ScrollView>
        <TouchableOpacity style={styles.buttonAdicionar} onPress={() => setVisible(true)}>
            <Icon name="plus-circle" size={80} color="000"/>
          </TouchableOpacity>
          <Modal animationType="slide"
                    transparent={true}
                    visible={visible}
                    style={styles.modal}>
                      <ModalBuy handlerClose={() => setVisible(false)}/>
                    </Modal>
        <View style={styles.tab}>
          {categoryList.map((category) => (
          <TouchableOpacity style={styles.button} onPress={() => setSelectedCategory(category.key)}>
            <Text style={styles.buttonTxt}>{category.key.substr(0,1)}</Text></TouchableOpacity>
          ))}
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBC12C',
  },
  containerAdd:{
    flexDirection: 'row',
    width: '90%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#CACACA',
    marginLeft: 20,
    marginTop: 20,
  },
  tab:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 80,
    backgroundColor: '#000',
    borderWidth: 1,
    borderTopLeftRadius: 100,
  },
  lista:{
    flex: 1,
  },
  listaItem:{
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
  header:{
    width: '100%',
    height: 100,
    marginBottom: 15,
    backgroundColor: '#000',
    borderWidth: 1,
    borderBottomRightRadius: 100,
    
  },
  inputs:{
    width: '80%',
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#CACACA',
    color: "#000",
    fontSize: 18
},
  buttonAdicionar:{
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 200/2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxtA:{
    fontWeight: 'bold',
    color: '#000'
  },
  button:{
    width: 60,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
    marginTop: 10,
  },
  txtLista:{
    fontSize: 20,
    fontWeight: '700',
  },
});
