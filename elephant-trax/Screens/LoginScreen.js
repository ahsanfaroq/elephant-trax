import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView,CheckBox, Pressable} from 'react-native'
import React,{useState} from 'react'
import box from '../assets/box.png'
import email from '../assets/email.png'
import password from '../assets/password.png'
import Eye from '../assets/eye.png'
import secureEye from '../assets/secureEye.png'
import fb from '../assets/fb.png'
import google from '../assets/google.png'
import insta from '../assets/insta.png'
import checkbox from '../assets/checkbox.png'


const LoginScreen = () => {
    const[check,SetCheck]=useState(false)
    const[secureImage,SetSecureImage]=useState(true)
    const[eye,SetEye]=useState(false)
    const[text,ShowText]=useState(true)


    const onPress = () =>{
     
    }

    const handlePress=()=>{
      SetSecureImage(!secureImage);
      SetEye(!eye)
      ShowText(!text)
    }
  return (
    <View style={styles.login}>
        <ScrollView contentContainerStyle={{flexGrow:1}}>


        <Image style={styles.box} source={box}/>
      <Text style={styles.signin}>SIGN IN</Text>
      <View style={styles.inputWraper}>
        <Image style={styles.email} source={email}/>
            <TextInput style={{textAlign:'left', width:230}}
            placeholder='Enter email'
            keyboardType='email-address'
            />
      </View>
    
      <View style={styles.inputWraper}>
        <Image style={styles.password} source={password}/>
            <TextInput style={{textAlign:'left', width:180}}
            placeholder='Enter Password'
            secureTextEntry={text}
            />
            <Pressable onPress={handlePress}>
              {secureImage && 
            <Image style={styles.eye} source={secureEye}/>
              }
              {eye && 
            <Image style={styles.eye} source={Eye}/>
              }
          </Pressable>
              
      </View>
      <View style={styles.checkbox}>
        <Pressable onPress={()=>SetCheck(!check)} style={styles.boxtick}>
            {check && 
            <Image style={{height:36, width:35, tintColor:'white',}} source={checkbox}/>
            }
        </Pressable>
        <Text style={styles.para}>I have accept  terms and conditions </Text>
       </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={{textAlign:'center',fontSize:25}}>SIGN IN</Text>
      </TouchableOpacity>
      <View>
       <Text style={styles.forgot}>Forgot Password</Text>
      </View>
      <View >
        <Text style={{color:'white', textAlign:'center',fontSize:15}}>OR</Text>
      </View>
      <View style={styles.icon}>
        <Image style={styles.fb} source={fb}/>
        <Image style={styles.google} source={google}/>
        <Image style={styles.insta} source={insta}/>
      </View>
      <View style={styles.signup}>
        <Text style={{color:'white', textAlign:'center',fontSize:18}}>Didnt have an account!Sign Up</Text>
      </View>
      </ScrollView>

    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    login:{
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
    signin:{
        color:'white',
        textAlign: 'center',
        fontSize:20,
        
    },
    email:{
        width: 36,
        height: 36,
    },
    inputWraper:{
        marginTop:15,
        width: 310,
        height: 50,
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:25,

        marginRight:25,
        justifyContent:'space-around',
        borderRadius:10,
    
    },
    password:{
        height:18,
        width:25,
        // marginRight:-25,
        // marginLeft:15,
        // paddingLeft:10,
        
        
    },
    eye:{
        width: 32,
        height: 20.95,
        marginRight:-10,
        
        
        
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
    
    forgot:{
        paddingRight:30,
        marginTop:15,
       textAlign:'right',
        color:'white',
       
    },
    icon:{
        width:300,
        marginTop:10,
        flexDirection:'row',
       justifyContent:'center',
       justifyContent:'space-around' ,
    //    backgroundColor:'red',
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
    signup:{
        marginTop:30,
    },
    para:{
        color:'white',
        textAlign:'center',
        
        paddingLeft:10,
    },
    checkbox:{
        // height:36,
        // width:36,
    
        // borderColor:'red',
        flexDirection:'row',
        marginTop:10,
        marginLeft:30,
        alignItems:'center',
        
    },
    boxtick:{
        width:34,
        height:34,
        borderColor:'white',
        borderWidth:2,
        borderRadius:8,
        alignItems:'center',
        
    },
    
   
    
    
})
