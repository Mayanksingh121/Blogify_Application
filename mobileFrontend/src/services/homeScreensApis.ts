import {BACKEND_HOST_FOR_ANDROID, BACKEND_HOST_FOR_IOS} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Platform} from 'react-native';

const backendURL =
  Platform.OS === 'ios' ? BACKEND_HOST_FOR_IOS : BACKEND_HOST_FOR_ANDROID;

export const fetchUserSearch = async (userText: string, signal: AbortSignal) => {
  try {
    const token = await AsyncStorage.getItem('token');

    const results = await axios.get(
      `${backendURL}blog/autosuggest?prefix=${userText}`,
      {
        signal,
        headers: {
          Authorization: token,
        },
      },
    );
    return results?.data;
  } catch (e) {
    console.log('@errro while fetching the user search results ', e);
    return null;
  }
};
