import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { setUserLoginStatus } from '../../redux/slices/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { revokeGoogleAccess } from '../../services/signInOptions'

const AccountSettings = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View>
      <Text onPress={async()=>{
        dispatch(setUserLoginStatus(false))
        await revokeGoogleAccess();
        await AsyncStorage.removeItem("userSessionToken");

      }}>AccountSettings</Text>
    </View>
  )
}

export default AccountSettings

const styles = StyleSheet.create({})