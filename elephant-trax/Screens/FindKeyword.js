import { StyleSheet, Text, View,Image,TextInput, ImageBackground, FlatList,KeywordList, ScrollView ,navigation} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
import arrow from '../assets/arrow.png'
import search from '../assets/search.png'
import circle from '../assets/circle.png'
import category from '../assets/category.png'
import background from '../assets/background.png'
import location from '../assets/location.png'
import product3 from '../assets/product3.png'
import write from '../assets/write.png'
import deleteicon from '../assets/dlticon.png'
import FlatLists from '../Components/FlatLists'
import curology from '../assets/curology.png'
import beauty from '../assets/beautyproducts.png'
import product2 from '../assets/product2.png'


const FindKeyword = ({navigation}) => {
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
    <>

    <LinearGradient colors={[ '#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0,1.01]}>
    <View style={{ width:'90%', alignSelf:'center',marginBottom:15}}>
    <Header  imageStyle={{height:28,width:28}} source={arrow} onPress={()=>navigation.goBack()}/>
    <View style={{backgroundColor:'white',height:50,width:315,borderRadius:6,marginTop:10,flexDirection:'row',alignItems:'center'}}>
        <TextInput style={{marginLeft:20,fontSize:15,fontWeight:'300',width:'80%'}} placeholder='Find' />
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
<ImageBackground  source={background}>
<ScrollView contentContainerStyle={{flexGrow:1}}>

<View style={{marginLeft:20,marginRight:20}}>
    <View style={{height:350,width:320,backgroundColor:'white',marginTop:15,borderRadius:6}}>
        <View style={{marginLeft:15,marginRight:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10,alignItems:'center'}}>
            <Text style={{fontSize:15,fontWeight:'600',marginTop:5,marginBottom:10}}>Box no:03</Text>
            <View style={{flexDirection:'row'}}>
                <Image style={{height:15,width:12,marginRight:10}} source={location}/>
                <Text style={{color:'rgba(0, 0, 0, 0.5)'}}>Rawalpindi,Punjab</Text>
            </View>
            </View>
            <View style={{height:94,width:'100%',backgroundColor:'#E8E8E8',}}>
                <View style={{flexDirection:'row',marginTop:10}}>
                <View>
                    <Image style={{height:78,width:70,marginLeft:-18}} source={product3}/>
                </View>
                
                    <View style={{width:'80%'}}>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <View>
                            <Text style={{width:'100%',paddingLeft:10,fontSize:17,fontWeight:'600'}}>Item no:05</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Image style={{height:30,width:25,marginRight:10}} source={write}/>
                            <Image style={{height:30,width:25}} source={deleteicon}/>
                        </View>
                        </View>
                        <View>
                    <FlatList
      data={keywordList}
      renderItem={renderItemKeyword}
      horizontal
      contentContainerStyle={{marginVertical:20}}
      />
                    </View>
                   
      </View>
                </View>
                
                </View>
            <FlatLists styles={{height:110,width:70,marginLeft:-18}} product3={curology}/>
            <FlatLists styles={{height:110,width:70,marginLeft:-18}} product3={beauty}/>
        
        </View>
        
    </View>
    <View style={{height:350,width:320,backgroundColor:'white',marginTop:15,borderRadius:6}}>
    <View style={{marginLeft:15,marginRight:15}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10,alignItems:'center'}}>
            <Text style={{fontSize:15,fontWeight:'600',marginTop:5,marginBottom:10}}>Box no:03</Text>
            <View style={{flexDirection:'row'}}>
                <Image style={{height:15,width:12,marginRight:10}} source={location}/>
                <Text style={{color:'rgba(0, 0, 0, 0.5)'}}>Rawalpindi,Punjab</Text>
            </View>
            </View>
            <FlatLists styles={{height:110,width:70,marginLeft:-18}} product3={product2}/>
        
            </View>
       
    </View>
    </View>
    </ScrollView>
    </ImageBackground>
</View>
</>
  )
}

export default FindKeyword

const styles = StyleSheet.create({
    radiobuttons:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'space-between',

    },
})