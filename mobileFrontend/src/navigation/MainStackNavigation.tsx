import {StyleSheet} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginNavigationStack from './LoginNavigationStack';
import BottomTabNavigation from './BottomTabNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setUserLoginStatus } from '../redux/slices/authSlice';

const MainNavigationStack = createNativeStackNavigator();
const MainStackNavigation = () => {
  const {isUserLoggedIn} = useSelector((store: RootState)=>store.authentication);
  const dispatch = useDispatch<AppDispatch>();

  useLayoutEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('userSessionToken');
      if (token) {
        dispatch(setUserLoginStatus(true))
      }else{
        dispatch(setUserLoginStatus(false));
      }
    } catch (e) {
      console.log('Error while getting the user session token ', e);
    }
  };

  return (
    <MainNavigationStack.Navigator screenOptions={{headerShown:false}}>
        {!isUserLoggedIn ? <MainNavigationStack.Screen
          name="LoginStack"
          component={LoginNavigationStack}
        />: 
       <MainNavigationStack.Screen
         name="HomeStack"
         component={BottomTabNavigation}
        />}
    </MainNavigationStack.Navigator>
  );
};

export default MainStackNavigation;

const styles = StyleSheet.create({});
