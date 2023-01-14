import { StyleSheet, Text, View,Image, Pressable,onPress, TextInput, FlatList } from 'react-native'
import React,{useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
import arrow from '../assets/arrow.png'
import attach from '../assets/attached.png'
import camera from '../assets/camera.png'
import * as ImagePicker from 'expo-image-picker';

import { BlurView } from 'expo-blur'
import Button from '../Components/Button'

const Add = ({navigation}) => {
  
  const[keywordList,setKeywordList]=useState([
    {
      id:1,
  },
  {
      id:2,
  },
  {
      id:3,
  },
    {
      id:4,
    }
  ])
  const renderItemKeyword = (item, index) =>{
    return(
      <View style={{marginRight:10,borderRadius:5,height:30,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>

      <Text style={{color:'rgba(0, 0, 0, 0.5)'}}>Keyword</Text>
      </View>
  )
  }
  // Imagepicker 
  const [image, setImage] = useState(null);
  const [cameraimage, SetCameraImage] = useState(null);
  const [images, setImageStore]=useState([])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(cameraimage);

    if (!result.canceled) {
      setImage(result);
    }
    setImageStore(image)
    console.log(images);
  } 
  // stop picker 
  // Camera picker 
  const cameraImage=async()=>{//Camera Image Fucntion
    let result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.launchCameraAsync.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  console.log(cameraimage);
    if(!result.canceled){
        SetCameraImage(result.assets);
    }
    // setImageStore(camer.cameraimage)
  };
    return (
    <LinearGradient colors={['#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0.38,1]} style={{flex:1}}>
        <View style={styles.viewall}>
            <Header imageStyle={{height:28,width:28}} source={arrow} onPress={()=>navigation.goBack()}/>
            <Text style={styles.text}>Add Your items</Text>
            <BlurView  style={{marginTop:20,borderRadius:8,width:"95%",alignItems:"center",alignSelf:'center',paddingVertical:20,paddingHorizontal:'5%'}} 
            intensity={150}>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                    <View style={styles.textno}>
                        <Text style={{fontSize:15,fontWeight:'700'}}>Item no:05</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Pressable style={styles.attach} onPress={pickImage}>
                   <Image style={{height:30,width:20}} source={attach}/>
                    </Pressable>
                    <Pressable style={styles.camera} onPress={cameraImage} >
                   <Image style={{height:30,width:20,resizeMode:'contain'}} source={camera}/>
                   
                    </Pressable>
                    </View>

                </View>
                    <View style={{height:180,width:'100%',backgroundColor:'white',marginTop:10,borderRadius:6}}>
                    {image && <Image source={image} style={{ width: 80, height: 80,margin:5 }}/>}
                    {cameraimage && <Image source={cameraimage} style={{ width: 80, height: 80, margin:5 }}/>}
                    {
                      images && images.map((img)=><Image source={img}/>)
                      
                    }
                    </View>
                  <View style={{flexDirection:'row',marginTop:10,width:'100%'}}>
                      <View style={{height:50,borderTopLeftRadius:6,borderBottomLeftRadius:6,backgroundColor:'white',width:165,justifyContent:'center',paddingLeft:20}}>
                        <TextInput placeholder='Enter Keyword'/>
                       </View>
                      <View>
                        <Button style={{height:50,width:110,justifyContent:'center',borderTopRightRadius:6,borderBottomRightRadius:6}} Title='Add'/>
                      </View>
                      </View>
                      {/* FlatList */}
                      
                      <FlatList
                      data={keywordList}
                      renderItem={renderItemKeyword}
                      horizontal
                      contentContainerStyle={{marginVertical:10}}
                      />
                      
                </BlurView>
                <View style={{height:180,width:305,justifyContent:'flex-end',marginLeft:10}}>
                  <Button style={{height:50,width:305,borderRadius:6,justifyContent:'center'}} Title='Save'/>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
                  <Button Title='Pick an image from camera roll'    onPress={pickImage}/>
                </View>
                {/* <View style={{flex:1, alignItems:'center', justifyContent:'center',}}>
                  <Button Title='Pick an image from camera roll'    onPress={pickImage}/>
                </View> */}
               
                </View>
                </LinearGradient>
                )
              }
  

export default Add

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
      attach:{
        height:38,
        width:38,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        // marginTop:15,
        marginRight:5,
        borderRadius:5,
      },
      camera:{
        height:38,
        width:38,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        // marginTop:15,
        marginRight:5,
        marginLeft:5,
        borderRadius:5,
        // flexDirection:'column',
        
      },
      textno:{
        justifyContent:'center',
      }
      
    })
    