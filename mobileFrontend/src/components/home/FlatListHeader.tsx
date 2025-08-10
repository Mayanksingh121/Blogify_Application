import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import FeaturingCard from './FeaturingCard';
import {fontOBJ} from '../../assets/fonts';
import QuizCard from './QuizCard';
import PopularTags from './PopularTags';

const {Montserrat, Lato} = fontOBJ;
const {height, width} = Dimensions.get('screen');

const FlatListHeader = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.inputBoxContainer}>
          <Icon name="search" size={20} color="#64748b" />
          <Text style={styles.textInput}>Search articles, topics...</Text>
          <Icon name="options" size={18} color="#0ea5e9" />
        </TouchableOpacity>
      </View>
      <View style={styles.popularTagsContainer}>
        <View style={styles.popularTagsHeader}>
          <Text style={styles.popularTagText}>Popular Tags</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tagsContainer}>
          <PopularTags tag="#socialmedia" />
          <PopularTags tag="#cricket" />
          <PopularTags tag="#artificalintelligence" />
          <PopularTags tag="#technology" />
          <PopularTags tag="#marketing" />
          <PopularTags tag="#sales" />
          <PopularTags tag="#operations" />
          <PopularTags tag="#nature" />
        </View>
      </View>
      <View style={styles.featureContainer}>
        <FeaturingCard />
      </View>
      {/* <View style={styles.benefitsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Why Choose Blogify?</Text>
          <Text style={styles.sectionSubtitle}>
            Everything you need for an amazing blogging experience
          </Text>
        </View>
        <View style={styles.aboutCardsContainer}>
          {AboutCardData.map((item: IAboutCardItem, index) => {
            return <AboutCard key={index} cardData={item} />;
          })}
        </View>
      </View> */}
      <QuizCard />
    </View>
  );
};

export default FlatListHeader;

const styles = StyleSheet.create({
  parentContainer: {
    paddingHorizontal: 16,
  },
  headerContainer: {
    paddingVertical: 20,
  },
  popularTagsContainer: {
    display: 'flex',
    gap: 10,
    paddingHorizontal: 5,
  },
  popularTagsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popularTagText: {
    fontFamily: Montserrat.bold,
    fontSize: height * 0.02,
  },
  viewAllText: {
    color: '#31b4fc',
    fontFamily: Lato.bold,
    fontSize: height * 0.015,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: width * 0.03,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dcdcdc',
  },
  inputBoxContainer: {
    backgroundColor: '#f8fafc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 12,
    borderWidth: 0.5,
    borderColor: '#e2e8f0',
  },
  textInput: {
    flex: 1,
    fontFamily: Montserrat.medium,
    color: '#64748b',
    fontSize: 15,
  },
  featureContainer: {
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dcdcdc',
  },
});
