import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import CustomCommonBackButton from '../../components/common/CustomCommonBackButton';
import {useNavigation} from '@react-navigation/native';
import {fontOBJ} from '../../assets/fonts';
import imagesOBJ from '../../assets/images';
import Ionicons from '@react-native-vector-icons/ionicons';
import ContentRender from '../../components/details/ContentRender';

const {Montserrat, Lato, OpenSans} = fontOBJ;
const {maleAvatar} = imagesOBJ;
const {height, width} = Dimensions.get('screen');
const BlogDetails = () => {
  const navigation = useNavigation();
  const [showButton, setShowButton] = useState(false);
  const scrollRef = useRef<any>(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleScroll = (event: any) => {
    if(event?.nativeEvent?.contentOffset?.y>250 && !showButton){
      setShowButton(true);
    }else if(event?.nativeEvent?.contentOffset?.y<250 && showButton){
      setShowButton(false)
    }
  };

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        ref={scrollRef}
        onScroll={handleScroll}
        style={styles.parentContainer}
        showsVerticalScrollIndicator={false}>
        <CustomCommonBackButton handlePress={handleBackPress} />
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: 'https://justenergy.com/wp-content/uploads/2016/10/Winter-preparation-home-house-image.jpg',
          }}
        />
        <View style={styles.bottomContainer}>
          <Text style={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            quod!
          </Text>
          <View style={styles.innerContainer}>
            <View style={styles.aboutAuthor}>
              <Image source={maleAvatar} style={styles.avatar} />
              <Text style={styles.authorName}>By Mayank Singh</Text>
            </View>
            <Text style={styles.date}>21-july-2025</Text>
          </View>
          <View style={styles.contentContainer}>
            <ContentRender/>
          </View>
        </View>
      </ScrollView>
      {showButton && <TouchableOpacity activeOpacity={0.6}  onPress={()=>scrollRef?.current?.scrollTo({x: 0, y:0,animated: true})} style={styles.upIcon}>
        <Ionicons
          name="arrow-up-circle-sharp"
          style={{backgroundColor: 'white', borderRadius: 50, color: '#2591d1'}}
          size={60}
        />
      </TouchableOpacity>}
    </View>
  );
};

export default BlogDetails;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: 'white',
  },
  scrollViewContainer: {
    gap: 10,
    paddingVertical: 10
  },
  image: {
    width: '100%',
    height: 215,
  },
  bottomContainer: {
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  title: {
    fontFamily: Lato.bold,
    letterSpacing: 0.3,
    lineHeight: height * 0.03,
    fontSize: height * 0.022,
    marginBottom: height * 0.03,
  },
  avatar: {
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  aboutAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  authorName: {
    fontFamily: Lato.bold,
    letterSpacing: 0.5,
    color: '#979797',
  },
  date: {
    fontFamily: Lato.bold,
    letterSpacing: 0.5,
    color: '#979797',
  },
  contentContainer: {
    paddingVertical: 20,
  },
  contentStyle: {
    fontFamily: Lato.regular,
    fontSize: height * 0.019,
    letterSpacing: 0.4,
    lineHeight: 25,
    textAlign: 'left',
  },
  upIcon: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    bottom: 10,
  },
});
