import {Dimensions, Image, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import {fontOBJ} from '../../assets/fonts';
import BlogCard from '../../components/home/BlogCard';
import imagesOBJ from '../../assets/images';
import FeaturingCard from '../../components/home/FeaturingCard';
import { Text } from 'react-native-gesture-handler';

const {Montserrat, Lato} = fontOBJ;
const {height, width} = Dimensions.get('window');

const Home = () => {
  return (
    <>
      <ScrollView style={styles.parentContainer}>
        <View style={styles.topContainer}>
          <View style={styles.inputBoxContainer}>
            <Icon name="search-outline" size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Search article..."
            />
          </View>
          <Image resizeMode='contain' style={styles.notificationImage} source={imagesOBJ.appleImage}/>
        </View>
        <View style={styles.featureContainer}>
          <FeaturingCard/>
        </View>
        <View style={{padding: 20}}>
          <BlogCard/>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  topContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: height * 0.018,
    width: '100%',
    elevation: 1,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
    justifyContent: 'space-between'
  },
  notificationImage: {
    height: height * 0.05,
    width: height * 0.05
  },
  inputBoxContainer: {
    width: '84%',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 40,
  },
  textInput: {
    width: '95%',
    paddingVertical: height * 0.015,
    fontFamily: Montserrat.semiBold,
    color: 'black',
  },
  featureContainer: {
    flex: 1,
    padding: 20,
    gap: 20
  },
});
