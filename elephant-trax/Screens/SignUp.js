import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity,ScrollView, } from 'react-native'
import React,{useState} from 'react'
import box from '../assets/box.png'
import name from '../assets/name.png'
import email from '../assets/email.png'
import password from '../assets/password.png'
import Eye from '../assets/eye.png'
import SecureEye from '../assets/secureEye.png'
import fb from '../assets/fb.png'
import google from '../assets/google.png'
import insta from '../assets/insta.png'
import arrow from '../assets/arrow.png'
// import background from '../assets/background.png'


const SignUp = () => {

    const[secureEye,SetSecureEye]=useState(true)
    const[eye,NewEye]=useState(false)
    const[text,SetText]=useState(true)

    const handlePress=()=>{
        SetSecureEye(!secureEye)
        NewEye(!eye)
        SetText(!text)
    }
   
    
  return (
    <View style={styles.signup}>
        
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            
            <Image style={styles.box} source={box}/>
            <Image style={styles.Arrow} source={arrow}/>
            <Text style={styles.sign}>SIGN UP</Text>
            <View style={styles.InputWrapper}>
                <Image style={styles.name} source={name}/>
                <TextInput style={{textAlign:'left',width:230}} 
                placeholder='Enter your name'
                />
            </View>
            <View style={styles.InputWrapper}>
                <Image style={styles.email} source={email}/>
                <TextInput style={{textAlign:'left',width:230}}
                 placeholder='Enter your email'
                 keyboardType='email-address'
                 />
                 
                 

            </View>
            <View style={styles.InputWrapper}>
                <Image style={styles.password} source={password}/>
                <TextInput style={{textAlign:'left', width:180}} placeholder='Enter your password'
                secureTextEntry={text}
                />
            <Pressable onPress={handlePress}>
                {secureEye &&
                <Image style={styles.eye} source={SecureEye}/>
                }
                {
                    eye &&
                    <Image style={styles.eye} source={Eye}/>
                }

            </Pressable>

            </View>
            <TouchableOpacity 
                style={styles.button}
                       
                        >
                <Text style={{textAlign:'center', fontSize:18}}>SIGN UP</Text>

</TouchableOpacity>
<View>
<Text style={{color:'white', textAlign:'center',fontSize:15,marginTop:13}}>OR</Text>
</View>
<View style={styles.icon}>
    <Image style={styles.fb} source={fb}/>
    <Image style={styles.google} source={google}/>
    <Image style={styles.insta} source={insta}/>

</View>
<View style={styles.SIGNUP}>
        <Text style={{color:'white', textAlign:'center',fontSize:18,marginTop:40}}>Didnt have an account!  Sign Up</Text>
      </View>
</ScrollView>
    </View>

  )
}

export default SignUp

const styles = StyleSheet.create({
    signup:{
        flex:1,
        backgroundColor:'#1889',
    },
   
    box:{
        width:277,
        height:249,
        
        marginLeft:50,
        marginRight:60,
        marginTop:10,
        
    },
   Arrow:{
        position: 'absolute',
        marginTop:45,
        marginLeft:15,
        height:32,
        width:32,
        
    },
    sign:{
        marginTop:-15,
        fontSize:25,
        color:'white',
        textAlign:'center',
    },
    InputWrapper:{
            marginTop:15,
            width: 310,
            height: 45,
            backgroundColor: 'white',
            flexDirection:'row',
            alignItems:'center',
            marginLeft:25,
    
            marginRight:25,
            justifyContent:'space-around',
            borderRadius:10,
        
        },
        name:{
            width: 20,
            height: 20,
        
        },
        email:{
            width: 20,
            height: 20,
        
        },
        password:{
            height:20,
        width:25,
        marginLeft:6,
        },
        eye:{
            width: 26,
            height: 18,
           
        },
        button:{
            backgroundColor:'#FFDE77',
            height:52,
            width:310,
            marginTop:20,
            marginLeft:25,
            marginRight:45,
            justifyContent:'center',
            borderRadius:10,
        
            
        },
        icon:{
            width:300,
            marginTop:10,
            flexDirection:'row',
           justifyContent:'center',
           justifyContent:'space-around' ,
       
           marginLeft:28,  
            
        },
        
    fb:{
        height:35,
        width:35,
    },
    google:{
        height:35,
        width:35,

    },
    insta:{
        height:35,
        width:35,
    },
    
    
        
       
       
    
    
})