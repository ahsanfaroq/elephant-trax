import { ScrollView, StyleSheet, Text, View,Image, TextInput, TouchableOpacity, Pressable} from 'react-native'
import React,{useState} from 'react'
import humburger from '../assets/humburger.png'
import notification from '../assets/notification.png'
import sign from '../assets/sign.png'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
import arrow from '../assets/arrow.png'
import plus from '../assets/plus.png'
import down from '../assets/down.png'
import product from '../assets/productimage.png'
import location from '../assets/location.png'
import attach from '../assets/attached.png'
import camera from '../assets/camera.png'
import * as ImagePicker from 'expo-image-picker';

const CreatePackage = ({navigation}) => {
  const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  
  
  return (
    <LinearGradient colors={['#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0.38,1]} style={{flex:1}}>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
          <View style={styles.viewall}>
        <Header onPress={()=>navigation.goBack()} imageStyle={{height:28,width:28}} source={arrow}/>
        <Text style={styles.text}>Create Your Package</Text>

        <LinearGradient style={{marginTop:20,borderRadius:8}} colors={['rgba(255, 255, 255,0.8)','rgba(243, 238, 247,0.4)']} start={[0,0]} end={[1,1]}  >
        <View style={styles.box3}>
          <View style={styles.smallbox}>
            <Image style={{height:10,width:12}} source={plus} />
          </View>
          <View style={styles.smallbox1}>
            <Text style={{ color:'rgba(0, 0, 0, 0.5)'}}>category</Text>
            <Image style={{height:12,width:12,marginLeft:4}} source={down}/>
            </View>
        </View>
         <View style={styles.productimg}>
              <Image style={{height:270,width:235}}source={product}
              
              />
            
            <View>
              <Text style={{fontSize:18,marginTop:-60}}>box no 3</Text>
            </View>
            <View style={styles.locationview}>
              <Image style={{height:16,width:13,marginRight:6}} source={location}/>
              <Text style={{color:'rgba(0, 0, 0, 0.5)'}}>Rawalpindi,Pakistan</Text>
            </View>
            <View style={styles.icons}>
              <Pressable style={styles.attach} onPress={pickImage} >
              <Image style={{height:30,width:20}} source={attach}/>
              </Pressable>
              <View style={styles.camera}>
             <Image style={{height:30,width:20,resizeMode:'contain'}} source={camera}/>
             </View>
             <View  style={styles.locat}>
             <Image style={{height:20,width:15}} source={location}/>
             </View>
            </View>
            </View>
         
        </LinearGradient>
        <View style={styles.createbuttons}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Save')}} style={styles.button}>
            <Text style={{textAlign:'center' ,justifyContent:'center'}}>Create</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{textAlign:'center' ,justifyContent:'center'}}>Add Items</Text>
          </TouchableOpacity>
        </View>
        </View>
        
        </ScrollView>
    </LinearGradient>
    
  )
}

export default CreatePackage

const styles = StyleSheet.create({
  viewall:{
    width:'90%',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  text:{
    fontSize:25,
    textAlign:'center',
    color:'white',
    lineHeight:33,
    fontWeight:'600',
    
    
  },
  box3:{
    height:30,
    width:310,
    flexDirection:'row',
    justifyContent:'flex-end',
    marginTop:15,
    // borderRadius:6,
    // backgroundColor:'red',
    
  },
  smallbox:{
    height:20,
    width:20,
    backgroundColor:'white',
    marginRight:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
  },
  smallbox1:{
    flexDirection:'row',
    height:20,
    width:80,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    borderRadius:5,
  },
  productimg:{
    // backgroundColor:'red',
    // justifyContent:'center',
    alignItems:'center'
    
  },
  locationview:{
    height:25,
    width:150,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:-15,
    
  },
  icons:{
    flexDirection:'row',
    marginBottom:10,
    
  },
  attach:{
    height:40,
    width:40,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    marginTop:15,
    marginRight:5,
  },
  camera:{
    height:40,
    width:40,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    marginTop:15,
    marginRight:5,
    marginLeft:5,
    // flexDirection:'column',
    
  },
  locat:{
    height:40,
    width:40,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    marginTop:15,
    marginLeft:5,
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
    
  
  }
})