import {
  Dimensions,
  Image,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomBackButton from '../../components/common/CustomBackButton';
import imagesOBJ from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import {VerifyAccountProps} from '../../types/navigation';
import {fontOBJ} from '../../assets/fonts';
import Toast from 'react-native-toast-message';
import { verifyOTP } from '../../services/accountApis';

const {height, width} = Dimensions.get('window');
const {Montserrat} = fontOBJ;

const VerifyAccount = ({navigation, route}: VerifyAccountProps) => {
  const [inputArray, setInputArray] = useState<any[]>(new Array(4).fill(null));
  const inputArrayRef = useRef<any>([]);
  const [focusIndex, setFocusIndex] = useState<number>(0);
  const [countDown, setCountDown] = useState<number>(60);
  const [resetCountDown, setResetCountDown] = useState<boolean>(false);
  const timerId = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown(prevValue => {
        return prevValue - 1;
      });
    }, 1000);
    return () => {
      if (timerId.current) clearInterval(timerId.current);
    };
  }, [resetCountDown]);

  useEffect(() => {
    if (countDown == 0 && timerId.current) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  }, [countDown]);

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleSubmit = async() => {
    const isAnyValueNull = inputArray.every(isValueNull);
    if (isAnyValueNull) {
      Toast.show({
        type: 'errorToast',
        props: {message: 'OTP Not Valid'},
      });
      return;
    }

    const response = await verifyOTP(route?.params?.email, Number(inputArray.join('')));
    if(response?.success){
      navigation.navigate("CreateProfile", {
        email: route?.params?.email,
        token: response?.token,
        authType: "local"
      });
    }else{
      Toast.show({
        type: 'errorToast',
        props: {message: response?.message},
      });
    }
  };

  const isValueNull = (ele: null | number) => {
    return ele == null;
  };

  const handleOTPFilling = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const key: string = e.nativeEvent.key;
    if (key == 'Backspace') {
      if (inputArray[index] == null && index > 0) {
        setFocusIndex(prevValue => {
          return prevValue - 1;
        });
        inputArrayRef?.current[index - 1].focus();
      } else {
        setInputArray(prevValue => {
          const newValue = [...prevValue];
          newValue[index] = null;
          return newValue;
        });
      }
    } else {
      if (focusIndex < inputArray.length - 1) {
        setFocusIndex(prevValue => {
          return prevValue + 1;
        });
        inputArrayRef.current[index + 1].focus();
      }

      if (focusIndex <= inputArray.length - 1) {
        setInputArray(prevValue => {
          const newValue = [...prevValue];
          newValue[index] = key;
          return newValue;
        });
      }
    }
  };

  const handleResetCountDown = () => {
    setResetCountDown(prevValue => !prevValue);
    setCountDown(60);
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.topContainer}>
        <CustomBackButton
          handleBackPress={handleBackButton}
          buttonData={{
            buttonText: 'Verify Account',
          }}
        />
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={imagesOBJ?.otpImage}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.welcomeText}>Enter Verification Code</Text>
          <Text style={styles.accessAccountText}>
            Enter the OTP sent to the email{' '}
            <Text style={styles.emailID}>{route.params.email}</Text>
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <View style={styles.textInputArray}>
            {inputArray.map((item, index) => {
              return (
                <TextInput
                  key={index}
                  ref={(el: any) => (inputArrayRef.current[index] = el)}
                  value={inputArray[index]}
                  focusable={focusIndex == index}
                  onKeyPress={e => handleOTPFilling(e, index)}
                  maxLength={1}
                  style={[
                    styles.individualInputStyle,
                    {
                      backgroundColor:
                        focusIndex == index ? '#a7e06a' : '#f4f4f0',
                    },
                  ]}
                  onFocus={() => setFocusIndex(index)}
                  keyboardType="number-pad"
                  autoFocus={index == focusIndex}
                />
              );
            })}
          </View>
          <View>
            <TouchableOpacity onPress={handleSubmit}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#7ec850', '#65b741', '#4e944f']}>
                <Text style={styles.signinButton}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.receiveOTPTextContainer}>
              {countDown ? (
                <Text style={styles.countDownText}>
                  Didn't receive OTP?{' '}
                  <Text style={styles.countDown}>
                    Resend in {countDown} seconds
                  </Text>
                </Text>
              ) : (
                <TouchableOpacity onPress={handleResetCountDown}>
                  <Text style={styles.resendOTP}>Resend OTP</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VerifyAccount;

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
  emailID: {
    fontFamily: Montserrat.bold,
  },
  textInputContainer: {
    display: 'flex',
    gap: height * 0.02,
    width: '100%',
  },
  textInputArray: {
    display: 'flex',
    flexDirection: 'row',
    gap: width * 0.04,
    justifyContent: 'center',
  },
  individualInputStyle: {
    height: height * 0.07,
    width: height * 0.07,
    backgroundColor: '#a7e06a',
    textAlign: 'center',
    borderRadius: 2,
    fontFamily: Montserrat.bold,
  },
  signinButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.045,
    paddingVertical: height * 0.02,
    fontFamily: Montserrat.bold,
  },
  receiveOTPTextContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 12,
  },
  countDownText: {
    width: '100%',
    fontFamily: Montserrat.medium,
  },
  countDown: {
    fontFamily: Montserrat.bold,
  },
  resendOTP: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontFamily: Montserrat.bold,
  },
});
