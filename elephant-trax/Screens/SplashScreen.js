import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const SplashScreen = () => {
  return (

    <View style={styles.container}>
        <Image style={styles.Logo} source={require("../assets/logo.png")} />
        <Text style={styles.Text}>Elephant Trax</Text>
        
     
    </View>
    
    
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
       
         flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1889"
        
    },
    Logo:{
        height: 170,
        width: 158,
        // flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    Text:{
        color:"white",
        fontSize:24,
        
    
    }
})