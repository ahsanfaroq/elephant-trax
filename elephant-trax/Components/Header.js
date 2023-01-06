import { StyleSheet, Text, View ,Image, Pressable} from 'react-native'
import React from 'react'

import notification from '../assets/notification.png'
import sign from '../assets/sign.png'
const Header = ({source,imageStyle,onPress}) => {
  return (
    <View style={styles.header}>
        <Pressable onPress={onPress} style={styles}>
            <Image  style={imageStyle} source={source}/>
        </Pressable>
        <View style={styles.second}>
            <Image style={{height:21,width:18,marginRight:10}} source={notification}/>
            <Image style={{height:20,width:20,}} source={sign}/>
        </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
      
        marginTop:55,
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'red',
        width:310,
        
    },
    first:{
        // flexDirection:'row', 
        
       
    },
    second:{
     flexDirection:'row',
    //  marginRight:30,
     
     
    
    
    
     
    

     
    },
})