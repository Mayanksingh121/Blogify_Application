import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { fontOBJ } from '../../assets/fonts';
import imagesOBJ from '../../assets/images';

const { Montserrat } = fontOBJ;
const { width, height } = Dimensions.get('window');

const CustomToastConfig = {
  successToast: ({ props }: any) => (
    <View style={[styles.toastContainer, styles.successBackground]}>
      <Image
        source={imagesOBJ?.successGif}
        style={styles.icon}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.message}>{props?.message}</Text>
      </View>
    </View>
  ),

  errorToast: ({ props }: any) => (
    <View style={[styles.toastContainer, styles.errorBackground]}>
      <Image
        source={imagesOBJ?.errorGif}
        style={styles.icon}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.message}>{props?.message}</Text>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: 'row',
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 16,
    padding: 16,
    marginTop: height * 0.02,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 1,
    alignItems: 'center',
  },
  successBackground: {
    backgroundColor: 'white', 
  },
  errorBackground: {
    backgroundColor: 'white', 
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  textContainer: {
    flexShrink: 1,
  },
  message: {
    fontSize: width * 0.04,
    color: 'black',
    fontWeight: '400',
    fontFamily: Montserrat.medium,
  },
});

export default CustomToastConfig;