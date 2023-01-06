import { ScrollView, StyleSheet, Text, View,Image, TextInput, TouchableOpacity,onPress } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import arrow from '../assets/arrow.png'
import email from '../assets/email.png'

const ResetPassword = () => {
  return (
    <LinearGradient colors={['#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0.38,1]} style={{flex:1}}>
            <ScrollView >
                <View style={styles.viewall}>
              <Image style={styles.arrow} source={arrow}/>
          
                <Text style={styles.reset}>Reset Your Password</Text>
                <View style={styles.text}>
                <Text style={styles.ipsum}>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard 
                    dummy text ever since the 1500s,
                    </Text>
                    </View>
                    <View style={styles.textinput}>
                        <Image style={styles.email} source={email}/>
                    <TextInput style={{textAlign:'left',width:230}}
                 placeholder='Enter your email'
                 keyboardType='email-address'
                 />
                    </View>
                    <View>
                        <TouchableOpacity
                         style={styles.button} onPress={onPress} >
                           <Text style={{textAlign:'center', fontSize:18}}>SEND EMAIL</Text>
                        </TouchableOpacity>
                    </View>
              </View>

            </ScrollView>
    </LinearGradient>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
    viewall:{
        marginLeft:25,

    },
    arrow:{
        // position:'absolute',
        marginTop:40,
        
        height:32,
        width:32,
       
    },
    reset:{
        color:'white',
        marginTop:15,
        fontSize:28,
        lineHeight:33,
        fontWeight:'700',

    },
    text:{
        height:105,
        width:300,
    },
    ipsum:{
        color:'white',
        fontSize:16,
        lineHeight:22,

    },
    textinput:{
        marginTop:15,
            width: 310,
            height: 48,
            backgroundColor: 'white',
            flexDirection:'row',
            alignItems:'center',
            borderRadius:10,
    },
    email:{
        width: 25,
        height: 20,
        marginLeft:21,
        marginRight:21,
    },
    button:{
        backgroundColor:'#FFDE77',
        height:52,
        width:310,
        marginTop:20,
        // marginLeft:25,
        // marginRight:45,
        justifyContent:'center',
        borderRadius:10,
    
        
    },

})