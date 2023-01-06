import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Screens/SplashScreen';

import LoginScreen from './Screens/LoginScreen';
import SignUp from './Screens/SignUp';
import ResetPassword from './Screens/ResetPassword'
import NewPassword from './Screens/NewPassword';
import Home from './Screens/Home'
import CreatePackage from './Screens/CreatePackage'
import SavePackage from './Screens/SavePackage';
import OopsPackage from './Screens/OopsPackage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    {/* // <SplashScreen/>
  //  <LoginScreen/>
  // <SignUp/>
  // <ResetPassword/>
  // <NewPassword/>
  //  <Home/> */}
    <Stack.Navigator initialRouteName='Save' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Package' component={CreatePackage}/>
      <Stack.Screen name='Save' component={SavePackage}/>
      {/* <Stack.Screen name='Oops' component={OopsPackage}/> */}

    </Stack.Navigator>
    {/* <CreatePackage/> */}
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
