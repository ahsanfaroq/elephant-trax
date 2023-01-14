import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import plus from '../assets/plus.png'
import down from '../assets/down.png'
import product from '../assets/productimage.png'
import location from '../assets/location.png'
import attach from '../assets/attached.png'
import camera from '../assets/camera.png'


const Boxes = ({plus,product,attach,camera,location,location1}) => {
  return (
    <LinearGradient style={{marginTop:20,borderRadius:8}} colors={['rgba(255, 255, 255,0.8)','rgba(243, 238, 247,0.4)']} start={[0,0]} end={[1,1]}  >
    <View style={styles.box3}>
      <View style={styles.smallbox}>
        <Image style={{height:30,width:25}} source={plus} />
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
          <Text style={{fontSize:18,marginTop:-60}}>Box no:03</Text>
        </View>
        <View style={styles.locationview}>
          <Image style={{height:16,width:13,marginRight:6}} source={location1}/>
          <Text style={{color:'rgba(0, 0, 0, 0.5)'}}>Rawalpindi,Pakistan</Text>
        </View>
        <View style={styles.icons}>
          {attach && 
          <View style={styles.attach}>
          <Image style={{height:30,width:20}} source={attach}/>
          </View>
            }
            {camera &&

              <View style={styles.camera}>
         <Image style={{height:30,width:20,resizeMode:'contain'}} source={camera}/>
         </View>
          }
          {location &&

            <View  style={styles.locat}>
         <Image style={{height:20,width:15}} source={location}/>
         </View>
        }
        </View>
        <Text></Text>
        </View>
     
    </LinearGradient>
  )
}

export default Boxes

const styles = StyleSheet.create({
    box3:{
        height:30,
        width:310,
        flexDirection:'row',
        // justifyContent:'flex-end',
        marginTop:15,
        // borderRadius:6,
        // backgroundColor:'red',
        justifyContent:'space-between',
        
      },
      smallbox:{
        height:30,
        width:25,
        backgroundColor:'white',
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        // justifyContent:'flex-start',
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
})

