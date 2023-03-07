
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, StatusBar,TouchableOpacity,SafeAreaView, Text, View,Image,ScrollView } from 'react-native';
import StarRating from "react-native-star-rating-widget"






export default function ConsultarCliente() {
  const navigation=useNavigation()

  return (
    <SafeAreaView style={styles.container}>
       
         <View  style={styles.textImage}>
          <Image style={styles.Image} source={require("../../../assets/BARBA.jpg")} />
            </View> 
         
          <ScrollView>
            <View>
          <View  style={{flexDirection:"row"}}>
          <Image style={styles.Image1} source={require("../../../assets/BARBEIRO1.jpg")} />
          <Text style={styles.text1}>Patrick Malungo</Text>
          </View> 
          <StarRating rating={4} size={5} color={"#CBF564"} textAlign={"center"}/>
          </View> 

          <View>
          <View  style={{flexDirection:"row"}}>
          <Image style={styles.Image1} source={require("../../../assets/BARBEIRO3.jpg")} />
          <Text style={styles.text1}>Anderson da silva</Text>
          </View> 
          <StarRating rating={4} Size={5} color={"#CBF564"} textAlign={"center"}/>
          </View>

             <View>
          <View  style={{flexDirection:"row"}}>
          <Image style={styles.Image1} source={require("../../../assets/BARBEIRO4.jpg")} />
          <Text style={styles.text1}>Miguel Moyo</Text>
          </View>
          <StarRating rating={4} size={5} color={"#CBF564"} textAlign={"center"}/>
          </View>


           <View>
          <View  style={{flexDirection:"row"}}>
          <Image style={styles.Image1} source={require("../../../assets/BARBEIRO4.jpg")} />
          <Text style={styles.text1}>Pedro Tonon </Text>
          </View>
          <StarRating rating={4} size={5} color={"#CBF564"} textAlign={"center"}/>
          </View>

          <View>
          <View  style={{flexDirection:"row"}}>
          <Image style={styles.Image1} source={require("../../../assets/BARBEIRO3.jpg")} />
          <Text style={styles.text1}>Paulo Andre</Text>
          </View>
          <StarRating rating={4} size={5} color={"#CBF564"} textAlign={"center"}/>
          </View>

           <View>
          <View  style={{flexDirection:"row"}}>
          <Image style={styles.Image1} source={require("../../../../assets/BARBEIRO3.jpg")} />
          <Text style={styles.text1}>Adilson da Costa </Text>
          </View>
          <StarRating rating={4} size={5} color={"#CBF564"} textAlign={"center"}/>
          </View>
          </ScrollView> 

      <StatusBar style="auto" />
    
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000',
  },
  botao:{
   
    width:"90%",
    fontSize:20,
    marginTop:5,
    backgroundColor:"#CBF564",
    padding:10,
    color: '#080702',
    fontWeight: 'bold',
    textAlign:"center",
    marginLeft:15,
    borderWidth: 1,
   borderRadius:20, 
  },
  Image:{ 
    width:"100%",
    height:250,
    borderBottomRightRadius: 100,
   },
   Image1:{
     width:50,
     height:50,
     borderRadius:50/2,
    borderWidth:1,
    marginTop:10,
    marginBottom:10,
   },
   text1:{
     fontSize:20,
     color:'#D92938',
     marginTop:25,
     marginLeft:20,
 
 
   },
  
});