import { StyleSheet, Text, View, ScrollView,Image, TextInput, Pressable, } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import arrow from '../assets/arrow.png'
import password from '../assets/password.png'
import eye from '../assets/eye.png'
import InputField from '../Components/InputField';
import Button from '../Components/Button';
import Email from '../assets/email.png'


const NewPassword = () => {
    const handlePress = () => {

    }
    const ahsan = () => {
        console.log("ahsankhan")
    }
    const naqeeb = () => {
        console.log("naqeeb ullah")
    }
   
  return (
    <LinearGradient colors={['#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0.38,1]} style={{flex:1}}>
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.viewall}>
    <Image style={styles.arrow} source={arrow}/>
        <Text style={styles.create}>Create New Password</Text>
        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard 
                    dummy text ever since the 1500s,
                </Text>
                <InputField placeholder="Enter your password" source={password} source1={eye}/>
                
                    <Text style={{color:'white',marginTop:15}}>Must be at least 8 character & No</Text>
                <InputField placeholder="Enter User Name" source={password} source1={eye}/>
                <Text style={{color:'white',marginTop:15}}>Must be at least 8 character & No</Text>
                <Button style={styles.button} onPress={ahsan}  Title="RESET PASSWORD"/>
                
                
    </View>
    </ScrollView>
</LinearGradient>
)

  
}

export default NewPassword

const styles = StyleSheet.create({
    viewall:{
        marginLeft:25,

    },
    arrow:{
        
            
        marginTop:40,
        
        height:32,
        width:32,
       
    },
    create:{
        color:'white',
       
        marginTop:15,
        fontSize:28,
        lineHeight:33,
        fontWeight:'700',

        marginTop:15,
        fontSize:28,
        lineHeight:33,
        fontWeight:'700',

    },
    text:{
        height:105,
        width:300,
        color:'white',
        fontSize:16,
        lineHeight:22,

    },
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
        marginLeft:80,
    },
    button:{
        height:48,
        width:310,
        justifyContent:'center',
        borderRadius:10,
    },
    // button1:{
    //     height:35,
    //     width:250,
    //     justifyContent:'center',
    //     marginTop:10,
    //     marginLeft:20,
    // }
})