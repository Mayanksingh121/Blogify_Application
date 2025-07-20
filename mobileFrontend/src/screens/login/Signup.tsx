import {
  ActivityIndicator,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomBackButton from '../../components/common/CustomBackButton';
import {SignupProps} from '../../types/navigation';
import imagesOBJ from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import {isValidEmail} from '../../utils/validation';
import {fontOBJ} from '../../assets/fonts';
import {signupWithEmail} from '../../services/accountApis';
import Toast from 'react-native-toast-message';

const {width, height} = Dimensions.get('window');
const {Montserrat} = fontOBJ;

const Signup = ({navigation}: SignupProps) => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleGetOTPPress = async () => {
    if (!isValidEmail(email)) {
        Toast.show({
            type: 'errorToast',
            props: {message: "Enter a valid email"},
        });
      return;
    }
    setLoading(true);
    const {success, message} = await signupWithEmail(email);
    if (success) {
      Toast.show({
        type: 'successToast',
        props: {message: message},
      });
      navigation.navigate('VerifyAccount', {email: email});
    } else {
      Toast.show({
        type: 'errorToast',
        props: {message: message},
      });
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.parentContainer}>
      <View style={styles.topContainer}>
        <CustomBackButton
          handleBackPress={handleBackButton}
          buttonData={{
            buttonText: 'Register Now',
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
          <Text style={styles.welcomeText}>Join the Storytellers</Text>
          <Text style={styles.accessAccountText}>
            Sign up to share your stories, insights, and ideas with the world
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.textInputStyle}
            placeholder="Enter Your Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={handleGetOTPPress} disabled={loading}>
            {loading? 
            (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator color="#3A7D44"/>
                    <Text style={[styles.signinButton, {color: '#3A3A3A', fontWeight: '600'}]}>Validating...</Text>
                </View>
            )
            : (<LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#7ec850', '#65b741', '#4e944f']}>
                <Text style={styles.signinButton}>GET OTP</Text>
            </LinearGradient>)}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

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
    gap: height * 0.04,
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
    gap: height * 0.02,
    width: '100%',
  },
  textInputStyle: {
    paddingVertical: height * 0.018,
    backgroundColor: '#f4f4f0',
    borderRadius: 1,
    paddingHorizontal: width * 0.02,
    width: '100%',
    color: 'black',
    fontFamily: Montserrat.medium,
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F0F0F0"
  },
  signinButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.045,
    paddingVertical: height * 0.02,
    fontFamily: Montserrat.bold,
  },
});
