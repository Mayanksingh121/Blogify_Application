import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import {GetStartedProps} from '../../types/navigation';
import LinearGradient from 'react-native-linear-gradient';
import imagesOBJ from '../../assets/images';
import {fontOBJ} from '../../assets/fonts';
import {onGoogleSigninPress} from '../../services/signInOptions';
import {signinWithGoogle} from '../../services/accountApis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setUserLoginStatus } from '../../redux/slices/authSlice';
import CustomLoadingIndicator from '../../components/common/CustomLoadingIndicator';

const {width, height} = Dimensions.get('window');
const {Montserrat, Lato} = fontOBJ;

const GetStarted = ({navigation}: GetStartedProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const loadingRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(()=>{
    return()=> clearTimeout(loadingRef?.current);
  },[])

  const handleGoogleSign = async () => {
    const token = await onGoogleSigninPress();
    if (token) {
      setLoading(true);
     let data =  await signinWithGoogle(token);
     if(!data){
      Alert.alert('Something Went Wrong', 'Try Again After Some Time', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      setLoading(false);
     }else{
      await AsyncStorage.setItem("userSessionToken", data?.token);
      if(loadingRef?.current){
        clearTimeout(loadingRef.current);
      }
      loadingRef.current = setTimeout(()=>{
        setLoading(false);
        dispatch(setUserLoginStatus(true));
      },1500)
     }
    }
  };

  return (
    <View style={styles.parentContainer}>
      {loading && <CustomLoadingIndicator/>}
      <View style={styles.aboveContainer}>
        <Text style={styles.tagLine}>Your Stories, Anywhere. Anytime</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Image
          resizeMode="contain"
          style={styles.getStartedImage}
          source={imagesOBJ?.getStarted}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#7ec850', '#65b741', '#4e944f']}>
              <Text style={styles.button}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={[
                styles.button,
                {color: '#69aa21', borderColor: '#69aa21', borderWidth: 1},
              ]}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginMethodParent}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{borderBottomWidth: 1, width: '45%', borderColor: "#D3D3D3"}} />
              <Text style={{width: '10%', textAlign: 'center'}}>OR</Text>
              <View style={{borderBottomWidth: 1, width: '45%', borderColor: '#D3D3D3'}} />
            </View>
            <View style={styles.loginMethodsContainer}>
              <TouchableOpacity onPress={handleGoogleSign} style={styles.logoContainer}>
                <Image
                  style={styles.loginLogos}
                  source={imagesOBJ.googleImage}
                />
                <Text style={styles.loginText}>Sign in with Google</Text>
              </TouchableOpacity>
              { Platform.OS==="ios" && (
                <TouchableOpacity style={styles.logoContainer}>
                  <Image
                    style={styles.loginLogos}
                    source={imagesOBJ.appleImage}
                  />
                  <Text style={styles.loginText}>Sign in with Apple</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.05,
    gap: height * 0.05,
    backgroundColor: 'white',
  },
  aboveContainer: {
    display: 'flex',
    gap: width * 0.025,
  },
  tagLine: {
    color: '#4e944f',
    fontSize: width * 0.075,
    textAlign: 'left',
    fontFamily: Montserrat.bold,
  },
  subHeading: {
    textAlign: 'left',
    color: '#9b9898',
    fontFamily: Montserrat.medium,
  },
  bottomContainer: {
    display: 'flex',
    flex: 1,
    width: '100%',
    gap: height * 0.04,
  },
  getStartedImage: {
    width: '100%',
    height: height * 0.32,
  },
  button: {
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.038,
    paddingVertical: height * 0.011,
    fontFamily: Montserrat.semiBold,
  },
  buttonContainer: {
    gap: 10,
  },
  loginMethodParent: {
    gap: height * 0.03
  },
  loginMethodsContainer: {
    width: '100%',
    gap: 10,
    display: 'flex',
    position: Platform.OS == 'ios' ? 'absolute' : 'static',
    bottom: Platform.OS == 'ios' ? 0 : null,
    justifyContent: 'space-evenly',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
    borderColor: '#666666',
    borderWidth: 0.5,
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
    width: '100%',
  },
  loginLogos: {
    width: height * 0.038,
    height: height * 0.038,
  },
  loginText: {
    fontFamily: Lato.bold,
    fontSize: height * 0.017,
  },
});
