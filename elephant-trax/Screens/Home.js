import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
import delivery from '../assets/deliveryboy.png'
import { BlurView } from 'expo-blur';
import box from '../assets/box.png'
import Button from '../Components/Button'
import Card from '../Components/Card'
import box2 from '../assets/box2.png'
import humburger from '../assets/humburger.png'

const Home = ({navigation}) => {
  return (
    <LinearGradient colors={['#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0.38,1]} style={{flex:1}}>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.viewalll}>
           <Header imageStyle={{height:20,width:24,}} source={humburger}/>
           <View style={styles.delivery}>
            <Image style={{height:250,width:250,marginTop:-45,marginLeft:15}} source={delivery} />
            <Text style={{fontSize:26, color:'white',position:'absolute',alignSelf:'flex-end',width:'60%',lineHeight:28,fontWeight:'600',marginTop:15}}>Here are the Tageline of App </Text>
            
           </View>
           <Card OnPress={()=>navigation.navigate('Package')}  Imagestyle={styles.image} Style={styles.firstbox} Source={box} Title='create your package'/>
           <Card  Imagestyle={styles.image1} Style={styles.secondbox} Source={box2} Title='Find'/>
            </View>
           
        </ScrollView>

    </LinearGradient>

  )
}

export default Home

const styles = StyleSheet.create({
    viewalll:{
      width:'90%',
      alignSelf:'center',
    //   backgroundColor:'green',
    },
    firstbox:{
        marginTop:'-20%',
        height:230,
        width:325,
        // backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        
    },
    // box:{
    //     height:180,
    //     width:120,
    //     // justifyContent:'center',
       


    // // },
    // button:{
    //     height:50,
    //     width:300,
    //     justifyContent:'center',
        
        

    // },
   
    secondbox:{
        marginTop:'4%',
        height:230,
        width:325,
        // backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
    },
    image:{
        height:170,
        width:96,
        
    },
    image1:{
        height:140,
        width:80,
        marginTop:25,
    },
    
})