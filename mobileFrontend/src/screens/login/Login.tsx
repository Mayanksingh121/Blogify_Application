import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import imagesOBJ from '../../assets/images';
import {Dimensions} from 'react-native';
import CustomBackButton from '../../components/common/CustomBackButton';
import {LoginProps} from '../../types/navigation';
import LinearGradient from 'react-native-linear-gradient';
import {fontOBJ} from '../../assets/fonts';

const {height, width} = Dimensions.get('window');
const {Montserrat,Lato} = fontOBJ;

const Login = ({navigation}: LoginProps) => {
  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.topContainer}>
        <CustomBackButton
          handleBackPress={handleBackButton}
          buttonData={{
            buttonText: 'Access Account',
          }}
        />
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={imagesOBJ?.loginImage}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.accessAccountText}>
            Please enter your email and password to access your blogify account
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Your Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Your Password"
            secureTextEntry
          />
          <TouchableOpacity>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#7ec850', '#65b741', '#4e944f']}>
              <Text style={styles.signinButton}>Sign in</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signupText}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.06,
  },
  topContainer: {
    width: '100%',
    gap: height * 0.05,
  },
  imageContainer: {
    height: height * 0.24,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  bottomContainer: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: height * 0.04,
    gap: height * 0.035,
    position: 'relative',
    flex: 1,
  },
  welcomeText: {
    fontSize: height * 0.03,
    textAlign: 'center',
    fontFamily: Montserrat.bold,
  },
  accessAccountText: {
    textAlign: 'center',
    color: '#666666',
    fontFamily: Montserrat.medium,
  },
  textInputContainer: {
    display: 'flex',
    gap: height * 0.015,
    width: '100%',
  },
  textInputStyle: {
    paddingVertical: height * 0.015,
    backgroundColor: '#f4f4f0',
    borderRadius: 1,
    paddingHorizontal: width * 0.02,
    width: '100%',
    fontFamily: Montserrat.medium,
    color: 'black'
  },
  signinButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.045,
    paddingVertical: height * 0.015,
    fontFamily: Montserrat.bold,
  },
  signupText: {
    fontWeight: 'bold',
    color: 'blue'
  },
});
