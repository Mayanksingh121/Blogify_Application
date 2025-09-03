import {BACKEND_HOST_FOR_ANDROID, BACKEND_HOST_FOR_IOS} from '@env';
import axios from 'axios';
import {Platform} from 'react-native';

const backendURL =
  Platform.OS === 'ios' ? BACKEND_HOST_FOR_IOS : BACKEND_HOST_FOR_ANDROID;
  
export const signupWithEmail = async (emailID: string) => {
  try {
    const response = await axios.post(`${backendURL}auth/signup`, {
      emailID,
    });
    return {
      success: true,
      message: 'OTP Sent To Your Email',
    };
  } catch (e: any) {
    console.log('@error at signup api', e);
    const message = e?.response?.data?.message || 'Something went wrong';
    return {
      success: false,
      message: message,
    };
  }
};

export const signinWithGoogle = async (token: string) => {
  try {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const response = await axios.post(
      `${backendURL}auth/google-login`,
      null,
      config,
    );
    return response?.data;
  } catch (e) {
    console.log('@error at google signin ', e);
    return null;
  }
};

export const verifyOTP = async (emailID: string, OTP: number) => {
  try {
    const response = await axios.post(`${backendURL}auth/verify-otp`, {
      emailID,
      OTP,
    });
    return {
      success: true,
      message: 'OTP verified successfully',
      token: response?.data?.token,
    };
  } catch (e: any) {
    console.log('@error at verify otp api', e);
    const message = e?.response?.data?.message || 'Something went wrong';
    return {
      success: false,
      message: message,
    };
  }
};

export const createProfile = async (
  reqBody: ICreateAccountBody,
  token: string,
) => {
  try {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    const response = await axios.post(
      `${backendURL}auth/create-profile`,
      reqBody,
      config,
    );
    return {
      success: true,
      message: 'Profile Created Successfully',
      token: response?.data?.token,
    };
  } catch (e: any) {
    console.log('@error at create profile api ', e);
    const message = e?.response?.data?.message || 'Something went wrong';
    return {
      success: false,
      messaeg: message,
    };
  }
};
