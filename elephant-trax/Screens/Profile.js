import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
import humburger from '../assets/humburger.png'
import profile from '../assets/profile.png'
import InputField from '../Components/InputField'
import Button from '../Components/Button'


const Profile = () => {
  return (
    <LinearGradient colors={['#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0.38,1]} style={{flex:1}}>
        <View style={{width:'90%',alignSelf:'center',marginLeft:15}}>

        <Header  imageStyle={{height:28,width:28}}  source={humburger}/>
        <View style={{justifyContent:'center',alignItems:'center',paddingTop:20}}>
            <Text style={{color:'white',fontSize:28,fontWeight:'700'}}>Profile</Text>
        </View>
        <View style={{alignItems:'center',paddingTop:15}}>
            <Image style={{height:122,width:122}} source={profile}/>
        </View>
        <View>
            <InputField placeholder='Email'/>
            <InputField placeholder='Password'/>
            <InputField placeholder='Date of birth'/>
            <InputField placeholder='Gender'/>
        </View>
        <View style={{height:'25%',width:'95%',paddingTop:60,justifyContent:'center',textAlign:'center'}}>
            <View style={{textAlign:'center'}}>

            <Button style={{height:55,justifyContent:'center',borderRadius:8}} Title='Save'/>
            </View>
        </View>
        
        </View>
    </LinearGradient>
  )
}

export default Profile

const styles = StyleSheet.create({})