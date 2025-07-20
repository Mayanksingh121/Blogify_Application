import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import imagesOBJ from '../../assets/images';
import {fontOBJ} from '../../assets/fonts';

const {maleAvatar} = imagesOBJ;
const {height} = Dimensions.get('screen');
const {Lato} = fontOBJ;
const HeaderComponent = () => {
  return (
    <View style={styles.parentContainer}>
      <View>
        <Image
          resizeMode="contain"
          style={styles.imageStyle}
          source={maleAvatar}
        />
      </View>
      <View>
        <Text style={styles.welcomeText}>Welcome back, Mayank👋</Text>
        <Text style={styles.bottomText}>Let's create something amazing</Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  parentContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    elevation: 1,
  },
  imageStyle: {width: 50, height: 50, borderRadius: 50},
  welcomeText: {fontFamily: Lato.bold, fontSize: height * 0.02},
  bottomText: {fontFamily: Lato.bold, color: '#6b7280'},
});
