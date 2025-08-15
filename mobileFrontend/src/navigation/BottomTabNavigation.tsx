import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountStackNavigation from './AccountStackNavigation';
import NotificationStackNavigatior from './NotificationStackNavigatior';
import HomeStackNavigator from './HomeStackNavigator';
import Icon from '@react-native-vector-icons/ionicons';
import Dashboard from '../screens/dashboard/Dashboard';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const TabIcon = ({
    size,
    focused,
    color,
    iconName,
  }: {
    size: number;
    focused: boolean;
    color: string;
    iconName: any;
  }) => {
    return focused ? (
      <View
        style={{
          height: '100%',
          width: '100%',
          borderColor: '#31b4fc',
          borderTopWidth: 2,
        }}>
        <Icon
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          name={iconName}
          color={color}
          size={size}
        />
      </View>
    ) : (
      <Icon name={iconName} color={color} size={size} />
    );
  };

  const getTabBarStyle = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    const hiddenRoutes = ['Blogdetails'];
    if (hiddenRoutes.includes(routeName)) {
      return {display: 'none'};
    }
    return {backgroundColor: '#f2f2f2'};
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, focused}) => {
          const size = focused ? 20 : 18;
          let iconName: any = 'refresh';
          if (route.name === 'Home') {
            iconName = 'home-sharp';
          } else if (route.name === 'Notification') {
            iconName = 'notifications';
          } else {
            iconName = 'person';
          }
          return (
            <TabIcon
              size={size}
              focused={focused}
              color={color}
              iconName={iconName}
            />
          );
        },
        tabBarStyle: {backgroundColor: '#f2f2f2'},
        tabBarActiveTintColor: '#31b4fc',
        tabBarInactiveTintColor: '#828282',
      })}>
      <Tab.Screen
        options={({route}) => {
          const result = getTabBarStyle(route);
          return {
            tabBarStyle: result ? result : {},
          };
        }}
        name="Home"
        component={HomeStackNavigator}
      />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen
        name="Notification"
        component={NotificationStackNavigatior}
        options={({route}) => {
          const result = getTabBarStyle(route);
          return {
            tabBarStyle: result ? result : {},
          };
        }}
      />
      <Tab.Screen name="Account" component={AccountStackNavigation} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
