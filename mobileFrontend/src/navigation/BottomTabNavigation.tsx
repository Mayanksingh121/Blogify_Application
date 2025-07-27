import React from 'react'
import { StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountStackNavigation from './AccountStackNavigation';
import NotificationStackNavigatior from './NotificationStackNavigatior';
import HomeStackNavigator from './HomeStackNavigator';
import Icon from '@react-native-vector-icons/ionicons';
import Dashboard from '../screens/dashboard/Dashboard';


const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={({route})=>({
      headerShown: false,
      tabBarIcon: ({color, size})=>{
        let iconName: any = "refresh";
        if (route.name === 'Home') {
          iconName = "home-sharp"
        } else if (route.name === 'Notification') {
         iconName="notifications"
        }else{
          iconName="person"
        }
        return <Icon name={iconName} color={color} size={size}></Icon>
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: '#D3D3D3',
      
    })}>
        <Tab.Screen name="Home" component={HomeStackNavigator}/>
        <Tab.Screen name="Dashboard" component={Dashboard}/>
        <Tab.Screen name="Notification" component={NotificationStackNavigatior}/>
        <Tab.Screen name="Account" component={AccountStackNavigation}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})