import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { DUMMY_DATA } from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import { fontOBJ } from '../../assets/fonts';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Icon from '@react-native-vector-icons/ionicons';

const { width, height } = Dimensions.get('screen');
const { Montserrat} = fontOBJ;

const FeaturingCard = () => {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.cardWrapper}>
        <TouchableOpacity style={styles.card} activeOpacity={0.95}>
          <ImageBackground
            source={{
              uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            }}
            style={styles.image}
            imageStyle={styles.imageStyle}
          >
            <LinearGradient
              colors={['transparent', 'rgba(15,23,42,0.6)', 'rgba(15,23,42,0.9)']}
              style={styles.gradient}
            >
              <View style={styles.contentContainer}>
                <View style={styles.topRow}>
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>Featured</Text>
                  </View>
                </View>
                
                <Text style={styles.title} numberOfLines={2}>
                  {item.title}
                </Text>
                
                <View style={styles.metaRow}>
                  <View style={styles.authorSection}>
                    <View style={styles.avatarContainer}>
                      <Text style={styles.avatarText}>JD</Text>
                    </View>
                    <View>
                      <Text style={styles.authorName}>John Doe</Text>
                      <Text style={styles.publishDate}>2 hours ago</Text>
                    </View>
                  </View>
                  <View style={styles.readInfo}>
                    <Icon name="time-outline" size={14} color="#cbd5e1" />
                    <Text style={styles.readTime}>5 min</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.headerSection}>
        <Text style={styles.sectionTitle}>Featured Stories</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <Icon name="arrow-forward" size={16} color="#0ea5e9" />
        </TouchableOpacity>
      </View>
      
      <SwiperFlatList
        data={DUMMY_DATA}
        renderItem={renderItem}
        autoplay
        autoplayDelay={5}
        autoplayLoop
        autoplayLoopKeepAnimation
        showPagination
        paginationStyle={styles.pagination}
        paginationStyleItem={styles.paginationItem}
        paginationStyleItemActive={styles.paginationItemActive}
      />
    </View>
  );
};

export default FeaturingCard;

const CARD_WIDTH = width * 0.92;
const IMAGE_HEIGHT = height * 0.23;

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 14
  },
  sectionTitle: {
    fontFamily: Montserrat.bold,
    fontSize: 22,
    color: '#0f172a',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontFamily: Montserrat.semiBold,
    fontSize: 14,
    color: '#0ea5e9',
  },
  cardWrapper: {
    width: width,
    alignItems: 'center'
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
  },
  imageStyle: {
    borderRadius: 10,
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  categoryText: {
    color: 'white',
    fontSize: 11,
    fontFamily: Montserrat.bold,
    letterSpacing: 0.5,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: Montserrat.bold,
    lineHeight: 26,
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: 12,
    fontFamily: Montserrat.bold,
  },
  authorName: {
    color: '#ffffff',
    fontSize: 13,
    fontFamily: Montserrat.semiBold,
  },
  publishDate: {
    color: '#cbd5e1',
    fontSize: 11,
    fontFamily: Montserrat.medium,
  },
  readInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  readTime: {
    color: '#cbd5e1',
    fontSize: 12,
    fontFamily: Montserrat.medium,
  },
  pagination: {
    bottom: 20,
  },
  paginationItem: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 4,
  },
  paginationItemActive: {
    backgroundColor: '#ffffff',
    width: 16,
    borderRadius: 3,
  },
});
