import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import {fontOBJ} from '../../assets/fonts';

const {height} = Dimensions.get('window');
const {Montserrat} = fontOBJ;

const CustomCommonBackButton = ({handlePress}: {handlePress: ()=>void}) => {
  return (
    <View style={styles.parentContainer}>
      <Pressable onPress={handlePress}>
        <Ionicons name="chevron-back" color="#000" size={30} />
      </Pressable>
    </View>
  );
};

export default CustomCommonBackButton;

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 10
  },
});
