import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Button = ({Title,onPress,style}) => {
  return (
    <TouchableOpacity onPress={onPress}> 
    <LinearGradient style={style} colors={['#FFDE77','#FF9A0D']} start={[0,0]} end={[1,1]} locations={[0,1]} >
               <Text style={{ textAlign:'center',fontSize:18}}>{Title}</Text>
    </LinearGradient>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        // backgroundColor:'#FFDE77',
        height:52,
        width:310,
        marginTop:20,   
        marginRight:45,
        justifyContent:'center',
        alignContent:'center',
        borderRadius:10,
      
    },
})