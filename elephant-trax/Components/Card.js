import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import box from '../assets/box.png'
import { LinearGradient } from 'expo-linear-gradient'
import Button from '../Components/Button'
import { BlurView } from 'expo-blur';

const Card = ({Source,Title,Style,Imagestyle,button,OnPress}) => {
  return (
    <View >
            <LinearGradient  style={Style}colors={['rgba(255, 255, 255,0.8)','rgba(243, 238, 247,0.4)']} start={[0,0]} end={[1,1]}  >
                <Image style={Imagestyle} source={Source}/>
                <Button onPress={OnPress} style={{height:40,width:275,justifyContent:'center'}} Title={Title} />
                
                <BlurView intensity={90} tint="light">

            </BlurView>
            </LinearGradient>

           </View>
  )
}

export default Card

const styles = StyleSheet.create({
    
})