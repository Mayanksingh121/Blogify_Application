import { StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home/Home';
import BlogDetails from '../screens/home/BlogDetails';


const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
   <HomeStack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
    <HomeStack.Screen name='HomeScreen' component={Home}/>
    <HomeStack.Screen name="Blogdetails" component={BlogDetails}/>
   </HomeStack.Navigator>
  )
}

export default HomeStackNavigator;

const styles = StyleSheet.create({})