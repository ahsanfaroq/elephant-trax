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
import Add from './Screens/Add'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageePicker from './Components/ImageePicker';
import FindBox from './Screens/FindBox';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import Profile from './Screens/Profile';
import FindKeyword from './Screens/FindKeyword'
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
    <Stack.Navigator initialRouteName='PrivacyPolicy' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Package' component={CreatePackage}/>
      <Stack.Screen name='Save' component={SavePackage}/>
      <Stack.Screen name='Oops' component={OopsPackage}/>
      <Stack.Screen name='Add' component={Add}/>
      <Stack.Screen name='FindBox' component={FindBox}/>
      <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy}/>
      <Stack.Screen name='Profile' component={Profile}/>
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
