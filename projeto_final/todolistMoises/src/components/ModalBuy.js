import React, { useState, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import Icon from "@expo/vector-icons/FontAwesome5";
import { ListProductContext } from "../../context/ListProductCreate";
import SelectList from "react-native-dropdown-select-list"

export function ModalBuy({ handlerClose }) {

  const  {categoryList}  = React.useContext(ListProductContext)
  const  {addProduto}  = React.useContext(ListProductContext)
  const { precisanssaList } = React.useContext(ListProductContext)

  const [produto, setProduto] = React.useState();
  const [category, setCategory] = React.useState();
  const [precisanssa, setPrecisanssa] = React.useState();
  const [data, setData] = React.useState();
  const closeBtn = React.useRef(null);

  const oqComprar = {
    titulo: produto,
    category: category,
    precisanssa: precisanssa,
    data: data
  }

  const buttonAdd = async() => {
    try{
      await addProduto(oqComprar)
    }catch(err){
      console.log("Produto nao adicionado!")
    }
  }
  const onClose = (event) => {
    if (event.target == closeBtn.current) handlerClose();
  };
  return (
    <TouchableOpacity activeOpacity={false} style={styles.sair} onPress={onClose} ref={closeBtn}>
      <View style={styles.container}>
        <Text style={styles.title}>Adicione um Produto</Text>
        <View>
        <View style={styles.containerInputs}>
          <TextInput
            placeholder="Adicione um Produto:"
            placeholderTextColor={"#000"}
            style={styles.inputs}
            onChangeText={setProduto} value={produto}
            />
            <TextInputMask placeholder="Data:"
            placeholderTextColor={"#000"}
             style={styles.inputData}
              onChangeText={data}
               value={setData} 
               type={'datetime'}
               options={{format: 'DD/MM/YYYY HH:mm'}}/>
        </View>
        <View style={styles.containerDrop}>
        <SelectList
            data={categoryList}
            setSelected={setCategory}
            boxStyles={styles.dropButton}

          />
        <SelectList
            data={precisanssaList}
            setSelected={setPrecisanssa}
            boxStyles={styles.dropButton}

          />
        </View>
        <View style={styles.containerAdd}>
            <TouchableOpacity style={styles.buttonAdicionar} onPress={buttonAdd}>
                <Icon name="plus-circle" size={30} color={"000"} />
            </TouchableOpacity>
        </View>
      </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sair: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center'
  },
  container: {
    width: "95%",
    height: "50%",
    backgroundColor: "#fff",
  },
  containerInputs: {
    flexDirection: "row",
    width: "90%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#CACACA",
    marginLeft: 20,
    marginTop: 20,
  },
  containerAdd:{
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  containerDrop:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    width: "100%",
    height: 200,
    backgroundColor: "#000",
    borderWidth: 1,
    borderBottomRightRadius: 100,
  },
  inputs: {
    width: "60%",
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#CACACA",
    color: "#000",
    fontSize: 18,
  },
  inputData: {
    width: "40%",
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#CACACA",
    color: "#000",
    fontSize: 18,
  },
  buttonAdicionar: {
    width: "90%",
    height: 40,
    backgroundColor: "#CACACA",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonTxtA: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  dropButton:{
    height: 50,
    marginTop: 15,
    borderRadius: 10,
  },
  menu:{
    marginTop: 1,
    borderRadius: 10,
    color: '#000'
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 20,
    marginTop: 10,
  },
});
