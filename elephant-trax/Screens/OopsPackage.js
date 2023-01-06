import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
import arrow from '../assets/arrow.png'

const OopsPackage = () => {
  return (
    <LinearGradient colors={['#7166F9','#C6E6FF']} start={[1,0]} end={[0,1]} locations={[0.38,1]} style={{flex:1}}>
        <View style={styles.viewall}>
        <Header  imageStyle={{height:28,width:28}} source={arrow}/>
        </View>

    </LinearGradient>
  )
}

export default OopsPackage

const styles = StyleSheet.create({
    viewall:{
        width:'90%',
        alignSelf:'center',
      
      },
})