import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DUMMY_DATA} from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import {fontOBJ} from '../../assets/fonts';
import imagesOBJ from '../../assets/images';
import SwiperFlatList from 'react-native-swiper-flatlist';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const {Montserrat, Lato} = fontOBJ;
const FeaturingCard = () => {
  const renderItem = ({item}: {item: any}) => {
    return (
      <LinearGradient
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[item.startColor, item.midColor]}>
        <View style={styles.cardParent}>
          <View style={styles.topContainer}>
            <Text style={styles.tag}>{item.tag}</Text>
            <Text style={styles.readTime}>{item.readTime} min read</Text>
          </View>
          <Text
            style={{
              color: 'white',
              fontFamily: Lato.bold,
              fontSize: height * 0.018,
            }}>
            {item.title}
          </Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={imagesOBJ.maleAvatar}
            />
            <Text style={styles.authorName}>{item.author}</Text>
          </View>
        </View>
      </LinearGradient>
    );
  };

  return (
    <View style={{width: '100%'}}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2.5}
        autoplayLoop
        horizontal
        data={DUMMY_DATA}
        autoplayLoopKeepAnimation
        renderItem={renderItem}
      />
    </View>
  );
};

export default FeaturingCard;

const styles = StyleSheet.create({
  linearGradient: {borderRadius: 14, overflow: 'hidden', marginRight: 15},
  cardParent: {
    justifyContent: 'space-between',
    height: height * 0.17,
    padding: 20,
    width: width * 0.8 - 20,
  },
  topContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: width * 0.05,
  },
  tag: {
    fontFamily: Lato.bold,
    fontSize: height * 0.015,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(255, 255,255, 0.25)',
    borderRadius: 15,
    color: 'white',
  },
  readTime: {
    color: 'rgba(255, 255,255, 0.66)',
    fontSize: height * 0.015,
    fontFamily: Lato.bold,
  },
  imageContainer: {flexDirection: 'row', alignItems: 'center', gap: 20},
  image: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: 50,
  },
  authorName: {color: 'white'},
});
