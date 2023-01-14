import { StyleSheet, Text, View,TextInput,Image,ImageBackground,FlatList } from 'react-native'
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



const FlatLists = ({product3,styles}) => {
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

    

            <View style={{height:94,width:'100%',backgroundColor:'#E8E8E8',marginTop:10}}>
                <View style={{flexDirection:'row',marginTop:10}}>
                <View>
                    <Image style={styles} source={product3}/>
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
</>
  )
}

export default FlatLists

const styles = StyleSheet.create({
    radiobuttons:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'space-between',

    },
})