import { StyleSheet, Text, View,TouchableOpacity,onPress } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
import arrow from '../assets/arrow.png'
import Boxes from '../Components/Boxes'
import product2 from '../assets/product2.png'
import deleteicon from '../assets/dlticon.png'
import { BlurView } from 'expo-blur'

const OopsPackage = ({navigation}) => {
  return (
    <LinearGradient colors={['#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0.38,1]} style={{flex:1}}>
        <View style={styles.viewall}>
        <Header  imageStyle={{height:28,width:28}} source={arrow} onPress={()=>navigation.goBack()}/>
        <Text style={styles.text}>Create Your Package</Text>
        <Boxes product={product2} plus={deleteicon}/>
        <View style={styles.createbuttons}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Add')}} style={styles.button}>
            <Text style={{textAlign:'center' ,justifyContent:'center'}}>Save</Text>

          </TouchableOpacity>
          <TouchableOpacity  style={styles.button}>
            <Text style={{textAlign:'center' ,justifyContent:'center'}}>Add Items</Text>
          </TouchableOpacity>
          </View>
        <Text style={{marginTop:50,color:'#F3EEF7',fontSize:20,fontWeight:'500',textAlign:'center'}}>OOPs you have not add any item</Text>
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
      text:{
        fontSize:25,
        textAlign:'center',
        color:'white',
        lineHeight:33,
        fontWeight:'600',
        
        
      },
      createbuttons:{
        flexDirection:'row',
      },
      button:{
        width:155,
        height:45,
        backgroundColor:'#FFDE77',
        // alignItems:'center'
        justifyContent:'center',
        marginTop:12,
        marginRight:15,
        borderRadius:5,
        
      },
})