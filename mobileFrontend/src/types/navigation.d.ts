import { NativeStackScreenProps } from "@react-navigation/native-stack";

type LoginStackParamList = {
   GetStarted: undefined;
   Login: undefined;
   Signup: undefined;
   VerifyAccount: {email: string};
   CreateProfile: {email: string, token: string, authType: string}
};


type GetStartedProps = NativeStackScreenProps<LoginStackParamList, 'GetStarted'>;
type LoginProps = NativeStackScreenProps<LoginStackParamList, 'Login'>;
type SignupProps = NativeStackScreenProps<LoginStackParamList, 'Signup'>;
type VerifyAccountProps = NativeStackScreenProps<LoginStackParamList, 'VerifyAccount'>;
type CreateProfileProps = NativeStackScreenProps<LoginStackParamList, 'CreateProfile'>;