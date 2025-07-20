import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from '@react-native-firebase/auth';
import {
  GoogleSignin,
  SignInResponse,
} from '@react-native-google-signin/google-signin';

export const onGoogleSigninPress = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const signInResult: SignInResponse = await GoogleSignin.signIn();
    let idToken = signInResult?.data?.idToken;
    if (!idToken) {
      throw new Error('No ID token found');
    }
    //commenting this as of now this is used if you want to delegate full auth to the firebase i'll use my own backend for that
    // const googleCredential = GoogleAuthProvider.credential(
    //   signInResult?.data?.idToken,
    // );
    // return signInWithCredential(getAuth(), googleCredential);
    return idToken;
  } catch (e) {
    console.log('Error at google signin' + e);
    return null;
  }
};


export const revokeGoogleAccess = async()=> {
  try {
    await GoogleSignin.revokeAccess();
    console.log('Google access revoked!');
  } catch (error) {
    console.error('Error revoking Google access:', error);
  }
}
