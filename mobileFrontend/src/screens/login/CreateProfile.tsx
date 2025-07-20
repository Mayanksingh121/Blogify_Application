import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomBackButton from '../../components/common/CustomBackButton';
import {CreateProfileProps} from '../../types/navigation';
import {fontOBJ} from '../../assets/fonts';
import DatePicker from 'react-native-date-picker';
import {textInputsForCreateProfile} from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import imagesOBJ from '../../assets/images';
import CustomDropDown from '../../components/common/CustomDropDown.tsx';
import Icon from '@react-native-vector-icons/ionicons';
import { createProfile } from '../../services/accountApis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
const {Montserrat} = fontOBJ;

const CreateProfile = ({navigation, route}: CreateProfileProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedDOB, setSelectedDOB] = useState<null | string>(null);
  const [userName, setUserName] = useState<string>('');
  const [userPhoneNumber, setUserPhoneNumber] = useState<number | null>(null);
  const [userPassword, setUserPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Others' | null>(
    null,
  );

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleDatePicked = (e: Date) => {
    const date = e.getDate() < 10 ? '0' + e.getDate() : e.getDate();
    const month =
      e.getMonth() + 1 < 10 ? '0' + (e.getMonth() + 1) : e.getMonth() + 1;
    const year = e.getFullYear();
    setSelectedDOB(`${year}-${month}-${date}`);
    setModalOpen(false);
  };


  const handleTextInputChange = (txt:any, prop: string)=>{
    if(prop == 'name'){
      setUserName(txt);
    }else if(prop == 'phoneNo'){
      setUserPhoneNumber(txt);
    }else if(prop == 'password'){
      setUserPassword(txt);
    }else{
      setConfirmPassword(txt);
    }
  }

  const handleCreateProfile = async()=>{

    if(!selectedDOB || !userPhoneNumber || !gender){
      return;
    }

    


    const reqBody = {
      emailID:  route.params.email,
      name: userName,
      dob: new Date(selectedDOB), 
      gender: gender,
      password: userPassword, 
      authType: route.params.authType, 
      phoneNumber: userPhoneNumber
    }

    // const resp = await createProfile(reqBody,route.params.token);
    // if(resp?.success){
      // AsyncStorage.setItem("userSessionToken", resp.token).then(()=>{
        navigation.getParent()?.dispatch(
          CommonActions.navigate('HomeStack')
        );
      // }).catch((e)=>{
      //   console.log(e, "error while seeting userToken");
      // })
    // }else{
    //   console.log("hi")
    // }
  }

  return (
    <ScrollView
      contentContainerStyle={styles.parentContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.topContainer}>
        <CustomBackButton
          handleBackPress={handleBackButton}
          buttonData={{
            buttonText: 'Create Profile',
          }}
        />
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={imagesOBJ?.createProfile}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.textInputsContainer}>
        {textInputsForCreateProfile.map((item, index) => {
          return (
            <View key={`${item.label}-${index}`} style={styles.textInputParent}>
              <Text style={styles.labelStyle}>
                {item.label}
              </Text>
                <TextInput
                  editable={item.value=='confirmPassword' && userPassword==""? false: true}
                  secureTextEntry={item.value=="password" || item.value=="confirmPassword" ? true: false}
                  keyboardType={item.value=="phoneNo"? "number-pad": "email-address"}
                  onChangeText={(text:string)=>handleTextInputChange(text,item.value)}
                  placeholder={item.placeholder}
                  style={styles.textInput}
                />
            </View>
          );
        })}
        <CustomDropDown value={gender} setValue={setGender}/>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <View style={styles.datePickerTextInput}>
            <Icon name='calendar-sharp' size={20} color='#7ec850'/>
            <Text style={styles.selectedDateText}>
              {selectedDOB ? selectedDOB : 'Date of Birth'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateProfile}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#7ec850', '#65b741', '#4e944f']}>
            <Text style={styles.signinButton}>Create Profile</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        title="Select Your Birth Date"
        maximumDate={new Date()}
        mode="date"
        open={modalOpen}
        date={selectedDOB ? new Date(selectedDOB) : new Date()}
        onCancel={() => setModalOpen(false)}
        onConfirm={handleDatePicked}
      />
    </ScrollView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.06,
  },
  topContainer: {
    width: '100%',
    gap: height * 0.05
  },
  imageContainer: {
    height: height * 0.24,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  textInputsContainer: {
    width: '100%',
    flex: 1,
    gap: height * 0.03,
    paddingVertical: height * 0.05
  },
  textInputParent: {
    gap: height * 0.01,
    width: "100%"
  },
  labelStyle: {
    fontSize: height * 0.017,
    fontFamily: Montserrat.semiBold
  },
  textInput: {
    width: '100%',
    fontFamily: Montserrat.medium,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.018,
    backgroundColor: '#f4f4f0',
  },
  datePickerTextInput: {
    width: '100%',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.018,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: '#f4f4f0',
    gap: width * 0.07
  },
  selectedDateText: {
    fontFamily: Montserrat.semiBold,
  },
  signinButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.045,
    paddingVertical: height * 0.02,
    fontFamily: Montserrat.bold,
  },
});
