import { StyleSheet, Text, View, LinearGradient } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const NewPassword = () => {
  return (
    <LinearGradient colors={['#7166F9','#C6E6FF']} start={[0,1]} end={[1,0]} locations={[0.38,1]} style={{flex:1}}>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.viewall}>
            <Text>Create New Password</Text>
        </View>
        </ScrollView>
    </LinearGradient>
  )
}

export default NewPassword

const styles = StyleSheet.create({})