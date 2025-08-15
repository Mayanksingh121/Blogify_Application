import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {DUMMY_DATA} from '../../utils/constants';
import {fontOBJ} from '../../assets/fonts';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');
const {Montserrat, OpenSans} = fontOBJ;

const FeaturingCard = () => {

  const navigation = useNavigation();

  const handleNavigation = ()=>{
    navigation.navigate("Blogdetails");
  }

  const renderItem = ({item}: {item: any}) => {
    return (
      <TouchableOpacity onPress={handleNavigation} activeOpacity={0.5} style={styles.cardWrapper}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: 'https://justenergy.com/wp-content/uploads/2016/10/Winter-preparation-home-house-image.jpg',
          }}
        />
        <View style={styles.textWrapper}>
          <Text numberOfLines={2} style={styles.titleText}>
            {item.title}
          </Text>
          <View style={styles.row}>
            <Text style={styles.authorText}>{item.author}</Text>
            <Text style={styles.dot}>݀݀●</Text>
            <Text style={styles.readTimeText}>{item.readTime} min read</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.headerSection}>
        <Text style={styles.sectionTitle}>Featuring</Text>
      </View>

      <FlatList
        data={DUMMY_DATA}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={styles.swiperContentContainer}
      />
    </>
  );
};

export default FeaturingCard;

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontFamily: Montserrat.bold,
    fontSize: height * 0.02,
  },
  cardWrapper: {
    width: width * 0.7,
    gap: 8,
  },
  image: {
    width: '100%',
    height: 155,
    borderRadius: 10,
  },
  textWrapper: {
    paddingHorizontal: 2,
    gap: 12,
  },
  titleText: {
    fontFamily: OpenSans.semiBold,
    fontSize: height * 0.017,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  authorText: {
    color: '#5ec5fd',
    fontFamily: Montserrat.medium,
    fontSize: height * 0.013,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    color: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  readTimeText: {
    fontSize: height * 0.013,
    color: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperContentContainer: {
    gap: 20,
    paddingHorizontal: 6,
  },
});
