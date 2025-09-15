import {StyleSheet} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginNavigationStack from './LoginNavigationStack';
import BottomTabNavigation from './BottomTabNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {setUserLoginStatus} from '../redux/slices/authSlice';
import SplashScreen from 'react-native-splash-screen';

const MainNavigationStack = createNativeStackNavigator();
const MainStackNavigation = () => {
  const {isUserLoggedIn} = useSelector(
    (store: RootState) => store.authentication,
  );
  const dispatch = useDispatch<AppDispatch>();
  const splashScreenTimer = useRef<null | NodeJS.Timeout>(null);

  useLayoutEffect(() => {
    getToken();

    if (splashScreenTimer?.current) {
      clearTimeout(splashScreenTimer?.current);
    }

    splashScreenTimer.current = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => {
      if (splashScreenTimer?.current) clearTimeout(splashScreenTimer?.current);
    };
  }, []);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('userSessionToken');
      if (token) {
        dispatch(setUserLoginStatus(true));
      } else {
        dispatch(setUserLoginStatus(false));
      }
    } catch (e) {
      console.log('Error while getting the user session token ', e);
    }
  };

  return (
    <MainNavigationStack.Navigator screenOptions={{headerShown: false}}>
      {!isUserLoggedIn ? (
        <MainNavigationStack.Screen
          name="LoginStack"
          component={LoginNavigationStack}
        />
      ) : (
        <MainNavigationStack.Screen
          name="HomeStack"
          component={BottomTabNavigation}
        />
      )}
    </MainNavigationStack.Navigator>
  );
};

export default MainStackNavigation;

const styles = StyleSheet.create({});
