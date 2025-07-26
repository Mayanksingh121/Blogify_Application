import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { DUMMY_DATA } from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import { fontOBJ } from '../../assets/fonts';
import SwiperFlatList from 'react-native-swiper-flatlist';

const { width, height } = Dimensions.get('window');
const { Montserrat, Lato } = fontOBJ;

const FeaturingCard = () => {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg',
          }}
          style={styles.image}
          imageStyle={styles.imageStyle}
        >
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.5)']}
            style={styles.gradient}
          >
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.content}>
          <Text style={styles.tag}>{item.tag}</Text>
          <Text style={styles.author}>Writte by {item.author}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SwiperFlatList
        data={DUMMY_DATA}
        renderItem={renderItem}
        autoplay
        autoplayDelay={2}
        autoplayLoop
        autoplayLoopKeepAnimation
      />
    </View>
  );
};

export default FeaturingCard;

const CARD_WIDTH = width * 0.82;
const IMAGE_HEIGHT = height * 0.20;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 12,
    marginRight: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
    elevation: 2
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  gradient: {
    padding: 10,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontFamily: Montserrat.semiBold,
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
  },
  tag: {
    fontSize: 13,
    fontFamily: Montserrat.bold,
    color: '#444',
    marginBottom: 4,
  },
  author: {
    fontSize: 12,
    fontFamily: Lato.bold,
    color: '#888',
  },
});
