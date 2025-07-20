import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import NotificationScreen from '../screens/notifications/NotificationScreen';


const NotificationStack = createNativeStackNavigator();
const NotificationStackNavigatior = () => {
  return (
    <NotificationStack.Navigator screenOptions={{headerShown: false}}>
        <NotificationStack.Screen name='NotificationHome' component={NotificationScreen}/>
    </NotificationStack.Navigator>
  )
}

export default NotificationStackNavigatior;
