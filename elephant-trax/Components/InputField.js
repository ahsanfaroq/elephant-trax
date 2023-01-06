import { StyleSheet, Text, View,Image,TextInput,Pressable } from 'react-native'
import React, { useState } from 'react'
import password from '../assets/password.png'
import Eye from '../assets/eye.png'
import Secureye from '../assets/secureEye.png'
const InputField = ({placeholder,source,source1}) => {
   const[comp,SetSecureComp]=useState(true)
   const[vrksol,NewVrkSol]=useState(false)
   const[text,SetText]=useState(true)
   const handlePress= () => {
    SetSecureComp(!comp)
    NewVrkSol(!vrksol)
    SetText(!text)
   }
  return (
    <View style={styles.inputWrapper}>
                    <Image style={styles.password} source={source}/>
                    <TextInput 
                    placeholder={placeholder}
                    style={{textAlign:'left', width:180}}
                    secureTextEntry={text}
                    
                    />
                   <Pressable onPress={handlePress}>
                    {comp &&
                    <Image style={styles.eye} source={source1}/>
                    }
                    {
                        vrksol &&
                        <Image style={styles.eye} source={Secureye}/>
                    }

                   </Pressable>
                    

                </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    
    inputWrapper:{
        marginTop:15,
            width: 310,
            height: 48,
            backgroundColor: 'white',
            flexDirection:'row',
            alignItems:'center',
            borderRadius:10,
    },
    password:{
        height:18,
        width:22,
        marginLeft:14,
        marginRight:14,

    },
    eye:{
        height:18,
        width:28,
        marginLeft:38,
    },
})