import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GetStarted from '../screens/login/GetStarted';
import Login from '../screens/login/Login';
import { LoginStackParamList } from '../types/navigation';
import Signup from '../screens/login/Signup';
import VerifyAccount from '../screens/login/VerifyAccount';
import CreateProfile from '../screens/login/CreateProfile';


const LoginStackNavigator = createNativeStackNavigator<LoginStackParamList>();
const LoginNavigationStack = () => {
  return (
    <LoginStackNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName='GetStarted'>
        <LoginStackNavigator.Screen name='GetStarted' component={GetStarted}/>
        <LoginStackNavigator.Screen name="Login" component={Login}/>
        <LoginStackNavigator.Screen name="Signup" component={Signup}/>
        <LoginStackNavigator.Screen name="VerifyAccount" component={VerifyAccount}/>
        <LoginStackNavigator.Screen name="CreateProfile" component={CreateProfile}/>
    </LoginStackNavigator.Navigator>
  )
}

export default LoginNavigationStack;