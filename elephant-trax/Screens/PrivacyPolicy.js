import { StyleSheet, Text, TouchableOpacity, View,button } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import humburger from '../assets/humburger.png'
import Header from '../Components/Header'

const PrivacyPolicy = () => {
  return (
   <LinearGradient colors={['#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0.38,1]} style={{flex:1}}>
       <View style={{ width:'90%', alignSelf:'center',marginBottom:15,marginLeft:10}}>
        
    <Header  imageStyle={{height:28,width:28}} source={humburger}/>
    <View  >
        <Text style={{fontSize:25,fontWeight:'700',color:'white',paddingTop:20,paddingBottom:20}}>PrivacyPolicy</Text>
    </View>
    <View style={{width:'100%'}}>
   
      <Text style={ {fontSize:18,lineHeight:21,color:'white'}}>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem 
Ipsum has been the industry's standard 
dummy text ever since the 1500s,
</Text>
<Text style={ {fontSize:18,lineHeight:21,color:'white',paddingTop:10}}>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem 
Ipsum has been the industry's standard 
dummy text ever since the 1500s,
</Text>
<Text  style={ {fontSize:18,lineHeight:21,color:'white',paddingTop:10}}>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem 
Ipsum has been the industry's standard 
dummy text ever since the 1500s,
</Text>
<Text style={ {fontSize:18,lineHeight:21,color:'white',paddingTop:10}}>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem 
Ipsum has been the industry's standard 
dummy text ever since the 1500s,
</Text>
    </View>
       <View style={{height:100,width:'100%',paddingTop:40}}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.button}>
            <Text style={{textAlign:'center' ,justifyContent:'center',}}>I accept</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={{textAlign:'center' ,justifyContent:'center',color:'white'}}>Decline</Text>

          </TouchableOpacity>
        </View>

       </View>
       </View>

   </LinearGradient>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
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
  button2:{
    width:155,
    height:45,
   borderColor:'#FFDE77',
   borderWidth:2,
  //  backgroundColor:transp,


    // alignItems:'center'
    justifyContent:'center',
    marginTop:12,
    marginRight:15,
    borderRadius:5,
    
  }
  
  

})