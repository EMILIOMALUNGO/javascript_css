import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ListProductContext = React.createContext();

export const ListProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [productListFilter, setProductListFilter] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryList, setCategoryList] = useState([
    { key: "Trabalho", value: "Trabalho" },
    { key: "Casa", value: "Casa" },
    { key: "Pesoal", value: "Pesoal" },
    { key: "Family", value: "Family" },
    { key: "Estudar", value: "Estudar" },
  ]);
  const [precisanssaList, setPrecisanssaList] = useState([
    { key: "Acabou", value: "Acabou" },
    { key: "Acabando", value: "Acabando" }
  ]);

  const addProduto = async(oqComprar) => {
    try{
        await AsyncStorage.setItem( 'product', JSON.stringify(oqComprar))
    }catch(err){
        console.log(err)
    }
  };
    
    useEffect(() => {
        try{
            const r =  AsyncStorage.getItem('product')
           setProductList( r != null ? JSON.parse(r) : null)
           productList.filter((r) => r.category == selectedCategory)
         }catch(err){
           console.log(err)
         }
    },[selectedCategory, productList])

  return (
    <ListProductContext.Provider
      value={{
        productList,
        addProduto,
        precisanssaList,
        categoryList,
        setSelectedCategory,
        productListFilter,
      }}
    >
      {children}
    </ListProductContext.Provider>
  );
};
