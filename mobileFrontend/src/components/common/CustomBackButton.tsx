import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons';
import { fontOBJ } from '../../assets/fonts';

const {height}  = Dimensions.get('window');
const {Montserrat} = fontOBJ;

const CustomBackButton = ({ handleBackPress, buttonData }: ILoginCustomBackButton) => {
  return (
    <View style={styles.parentContainer}>
      <Pressable style={styles.pressableStyle} onPress={handleBackPress}>
        <Ionicons name="chevron-back" color="#000" size={30} />
      </Pressable>
      <Text style={styles.screenName}>{buttonData?.buttonText}</Text>
    </View>
  )
}

export default CustomBackButton

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    position: 'relative'
  },
  pressableStyle: {
    position: 'absolute',
    zIndex: 1
  },
  screenName: {
    fontSize: height * 0.023,
    textAlign: 'center',
    width: '100%',
    fontFamily: Montserrat.bold
  }
})