import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import imagesOBJ from '../../assets/images';
import { fontOBJ } from '../../assets/fonts';

const { height, width } = Dimensions.get('window');
const { Montserrat, Lato } = fontOBJ;

const BlogCard = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={imagesOBJ.maleAvatar}
          resizeMode="cover"
          style={styles.coverImage}
        />
      </View>

      <View style={styles.bottomContainer}>

        <View style={styles.tagRow}>
          <View style={styles.tagPill}>
            <Text style={styles.tagText}>Technology</Text>
          </View>
          <View style={styles.tagPill}>
            <Text style={styles.tagText}>5 min read</Text>
          </View>
        </View>

        <Text style={{fontFamily: Lato.bold, fontSize: height * 0.02}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sint?</Text>
        <Text numberOfLines={2} style={styles.titleText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam, asperiores velit quidem aperiam laudantium corrupti dolorum.
        </Text>
        

        <View style={styles.authorContainer}>
          <Image style={styles.avatar} source={imagesOBJ.maleAvatar} />
          <View style={styles.authorTextContainer}>
            <Text style={styles.authorName}>Mayank Singh</Text>
            <Text style={styles.timestamp}>Author · Monday · 2:12 PM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  parentContainer: {
    height: height * 0.38,
    width: '100%',
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 1,
  },
  imageContainer: {
    height: '50%',
    width: '100%',
  },
  coverImage: {
    height: '100%',
    width: '100%',
  },
  bottomContainer: {
    padding: 14,
    gap: 12,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 10,
  },
  tagPill: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: {
    fontSize: height * 0.014,
    fontFamily: Lato.bold,
    color: '#333',
  },
  titleText: {
    fontFamily: Lato.regular,
    fontSize: height * 0.017,
    color: '#1c1c1e',
    lineHeight: height * 0.025,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    height: height * 0.05,
    width: height * 0.05,
    borderRadius: height * 0.025,
    borderWidth: 0.3,
    borderColor: '#ccc',
  },
  authorTextContainer: {
    flex: 1,
  },
  authorName: {
    fontFamily: Montserrat.bold,
    fontSize: height * 0.015,
    color: '#353935',
  },
  timestamp: {
    fontFamily: Lato.regular,
    fontSize: height * 0.013,
    color: '#a0a0a0',
  },
});
