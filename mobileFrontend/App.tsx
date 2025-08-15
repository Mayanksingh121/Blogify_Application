import {StatusBar, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import CustomToastConfig from './src/components/common/CustomToastConfig.tsx';
import MainStackNavigation from './src/navigation/MainStackNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store.ts';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID } from '@env';

const App = () => {

  useEffect(() => {
    GoogleSignin.configure({
        webClientId: GOOGLE_WEB_CLIENT_ID,
    });
}, [])

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.parent}>
          <StatusBar barStyle="dark-content" backgroundColor="#333" />
          <Provider store={store}>
            <NavigationContainer>
              <MainStackNavigation />
            </NavigationContainer>
          </Provider>
        </SafeAreaView>
      </SafeAreaProvider>
      <Toast config={CustomToastConfig} />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
});
