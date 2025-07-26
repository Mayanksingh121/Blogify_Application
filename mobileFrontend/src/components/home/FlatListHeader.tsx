import {Dimensions, Image, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import imagesOBJ from '../../assets/images';
import FeaturingCard from './FeaturingCard';
import {fontOBJ} from '../../assets/fonts';
import QuizCard from './QuizCard';
import AboutCard from './AboutCard';
import {AboutCardData} from '../../utils/constants';
import {AboutCardItem} from '../../types/homeScreen.types';

const {height, width} = Dimensions.get('window');
const {Montserrat,Lato} = fontOBJ;
const FlatListHeader = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.inputBoxContainer}>
          <Icon name="search-outline" size={20} />
          <Text style={styles.textInput}>Search article...</Text>
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.notificationImage}
          source={imagesOBJ.appleImage}
        />
      </View>
      <View style={styles.featureContainer}>
        <Text style={{fontFamily: Montserrat.bold, fontSize: height*0.023}}>Featured Blogs</Text>
        <FeaturingCard />
      </View>
      <Text
        style={{
          fontFamily: Montserrat.bold,
          textAlign: 'center',
          fontSize: height * 0.021,
        }}>
        Why Choose Blogify?
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: Montserrat.medium,
          fontSize: height * 0.015,
          color: '#555',
        }}>
        Discover what makes us the top choice for content creators everywhere.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 14,
          paddingVertical: 14,
          gap: 8,
        }}>
        {AboutCardData.map((item: AboutCardItem, index) => {
          return <AboutCard key={index} cardData={item} />;
        })}
      </View>
      <QuizCard/>
    </View>
  );
};

export default FlatListHeader;

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
    justifyContent: 'space-between',
  },
  notificationImage: {
    height: height * 0.05,
    width: height * 0.05,
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
    justifyContent: 'center'
  },
  featureContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 14,
    gap: 10,
  },
});
