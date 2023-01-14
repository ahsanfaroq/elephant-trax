import { StyleSheet, Text, View,Image,TouchableOpacity,onPress, ScrollView, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
import arrow from '../assets/arrow.png'
import deleteicon from '../assets/dlticon.png'
import product2 from '../assets/product2.png'
import Boxes from '../Components/Boxes'
import add from '../assets/add.png'
import nike from '../assets/nike.png'
import { BlurView } from 'expo-blur'



const SavePackage = ({navigation}) => {
  

    const [keywordList,setKeywordList] = useState([
        {
            id:1,
        },
        {
            id:2,
        },
        {
            id:3,
        }
    ])
    const renderItemKeyword = (item,index) =>{
        return(
            <View style={{borderRadius:5,height:30,width:90,backgroundColor:'white',marginLeft:5,justifyContent:'center',alignItems:'center'}}>

            <Text style={{color:'rgba(0, 0, 0, 0.5)'}}>Keyword</Text>
            </View>
        )
    
   
    }
   return (
  <LinearGradient colors={['#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0.38,1]} style={{flex:1}}>
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.viewall}>
    <Header imageStyle={{height:28,width:28}} source={arrow} onPress={()=>navigation.goBack()}/>
    <Text style={styles.text}>Create Your Package</Text>
    <Boxes product={product2} plus={deleteicon}/>
    <View style={styles.createbuttons}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Oops')}} style={styles.button}>
            <Text style={{textAlign:'center' ,justifyContent:'center'}}>Save</Text>

          </TouchableOpacity>
          <TouchableOpacity  style={styles.button}>
            <Text style={{textAlign:'center' ,justifyContent:'center'}}>Add Items</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.selectall}>
            <Text style={{marginRight:10, color:'white', fontSize:16,fontWeight:'700'}}>Select all</Text>
            <Image style={{height:30,width:25}} source={deleteicon}/>
        </View>
            <BlurView  style={{marginTop:20,borderRadius:8,flexDirection:'row',width:"95%",alignItgems:"center",alignSelf:'flex-end'}} 
            intensity={100}>
            <Image style={{marginTop:15,height:90,width:74,resizeMode:"cover",marginLeft:-25}} source={nike}/>

<View style={{width:"80%"}}>

        <View style={styles.items}>

            <View style={styles.additems}>
        <Text style={{marginTop:12,fontSize:18,fontWeight:'700',marginLeft:'5%'}}>Item no:05</Text>
                <Image style={{marginLeft:'25%',height:30,width:25}} source={deleteicon}/>
                <Image style={{marginRight:'15%',height:30,width:25}} source={add}/>
                
            </View>

        </View>
        <FlatList
      data={keywordList}
      renderItem={renderItemKeyword}
      horizontal
      contentContainerStyle={{marginVertical:20}}
      />
</View>
      

            </BlurView>
    </View>
    </ScrollView>
  </LinearGradient>
  
)}

export default SavePackage

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
      selectall:{
        marginTop:18,
        flexDirection:'row',
        justifyContent:'flex-end',

      },
      items:{
        // height:100,
        width:300,
        // flexDirection:'row',
        // justifyContent:'flex-end',
        // alignItems:'center'
        
        // alignItems:'flex-end',
        
        
      },
      additems:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'space-between',
      },
    
      
})