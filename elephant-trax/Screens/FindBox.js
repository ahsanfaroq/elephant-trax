import { StyleSheet, Text, View,TextInput,Image, ImageBackground,Pressable, ScrollView,onPress} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
import arrow from '../assets/arrow.png'
import search from '../assets/search.png'
import circle from '../assets/circle.png'
import category from '../assets/category.png'
import background from '../assets/background.png'
import deleteicon from '../assets/dlticon.png'
import Boxes from '../Components/Boxes'
import product2 from '../assets/product2.png'
import location from '../assets/location.png'
import product3 from '../assets/product3.png'
import circle2 from '../assets/circle2.png'
// import { useState } from 'react'


const FindBox = ({navigation}) => {
    // const [circle, setCircle]=useState(true)
    // const [circle2, setCircle2]=useState(true)

    // const handlePress=() => {
    //     setCircle(!circle)
    //     setCircle2(!circle2)

    // }
  return (
    <>
    <LinearGradient colors={[ '#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0,1.01]}>
        <View style={{ width:'90%', alignSelf:'center',marginBottom:15}}>
        <Header  imageStyle={{height:28,width:28}} source={arrow} onPress={()=>navigation.goBack()}/>
        <View style={{backgroundColor:'white',height:50,width:315,borderRadius:6,marginTop:10,flexDirection:'row',alignItems:'center'}}>
            <TextInput style={{marginLeft:20,fontSize:18,fontWeight:'300',width:'80%'}} placeholder='Find' />
            <Image style={{height:35,width:28,}} source={search}/>
        </View>
            <View style={styles.radiobuttons}>
                <View style={{flexDirection:'row',alignItems:'center'}}>

               <Image style={{height:15, width:15,marginRight:5}} source={circle}/>
               <Text style={{color:'white'}}>By Box no</Text>
              
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                   
               <Image style={{height:15, width:15,marginRight:5}} source={circle}/>
               <Text style={{color:'white',}}>By Keyword</Text>
                </View>
                <View  style={{flexDirection:'row',alignItems:'center'}}>
               <Text style={{color:'white'}}>Category</Text>
               <Image style={{height:20, width:15,marginRight:5}} source={category}/>
                </View>
            </View>
        </View>
    </LinearGradient>
    <View>
        
    <ImageBackground source={background}>
    <ScrollView contentContainerStyle={{flexGrow:1}}>
       <View style={{marginLeft:20,marginRight:20}}>

       <View style={styles.delete}>
      
        <Text style={{marginRight:10, color:'white', fontSize:16,fontWeight:'700'}}>Select all</Text>
            <Image style={{height:30,width:25}} source={deleteicon}/>
       </View>
       <Boxes location1={location} product={product2} />
       
       </View>
       <View style={{marginLeft:20,marginRight:20,paddingBottom:'100%'}}>
        
      <Boxes location1={location} product={product2} />
       </View>
       </ScrollView>

    </ImageBackground>
    </View>
    
       
   
    </>


  )
}

export default FindBox

const styles = StyleSheet.create({
    radiobuttons:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'space-between',

    },
    delete:{
        
            marginTop:18,
            flexDirection:'row',
            justifyContent:'flex-end',
    
         
    }
    
})