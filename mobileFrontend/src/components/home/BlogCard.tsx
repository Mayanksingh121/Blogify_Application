import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontOBJ} from '../../assets/fonts';

const {height, width} = Dimensions.get('screen');
const {Montserrat, Lato, OpenSans} = fontOBJ;

const BlogCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.parentContainer}>
      <View style={{width: width - 200, gap :10}}>
        <Text numberOfLines={2} style={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, labore!</Text>
        <Text numberOfLines={1} style={styles.author}>
         By Mayank Singh 
        </Text>
      </View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: 'https://justenergy.com/wp-content/uploads/2016/10/Winter-preparation-home-house-image.jpg',
        }}
      />
    </TouchableOpacity>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  parentContainer: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 0.4,
    paddingVertical: 15
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  title: {
    fontFamily: OpenSans.semiBold,
    fontSize: height * 0.017,
  },
  author: {
    color: '#5ec5fd',
    fontFamily: Montserrat.medium,
    fontSize: height * 0.013,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
