import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountSettings from '../screens/account/AccountSettings';
import EditProfile from '../screens/account/EditProfile';


const AccountStack = createNativeStackNavigator();
const AccountStackNavigation = () => {
  return (
    <AccountStack.Navigator screenOptions={{headerShown: false}}>
        <AccountStack.Screen name="AccountSetting" component={AccountSettings}/>
        <AccountStack.Screen name="EditProfile" component={EditProfile}/>
    </AccountStack.Navigator>
  )
}

export default AccountStackNavigation

const styles = StyleSheet.create({})