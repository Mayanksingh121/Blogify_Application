import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontOBJ} from '../../assets/fonts';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '@react-native-vector-icons/ionicons';

const {Montserrat} = fontOBJ;

const QuizCard = () => {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={['#31b4fc', '#2591d1', '#1a79b2']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.parentContainer}>
        <View style={styles.backgroundPattern}>
          <View style={styles.circle1} />
          <View style={styles.circle2} />
          <View style={styles.circle3} />
          <View style={styles.decorativeLine} />
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.nestedContainer}>
            <View style={styles.contentSection}>
              <View style={styles.textContainer}>
                <Text style={styles.heading}>Blog Quiz</Text>
                <Text style={styles.subHeading}>
                  Discover personalized blog recommendations
                </Text>
              </View>
            </View>

            <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>Start Quiz</Text>
                <Icon name="arrow-forward" size={16} color="#1f1f1f" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default QuizCard;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
  },
  parentContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle1: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  circle2: {
    position: 'absolute',
    bottom: -25,
    left: -25,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  circle3: {
    position: 'absolute',
    top: '60%',
    left: -20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  decorativeLine: {
    position: 'absolute',
    top: '30%',
    right: 20,
    width: 2,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 1,
  },
  innerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contentSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  heading: {
    fontFamily: Montserrat.bold,
    fontSize: 20,
    color: '#ffffff',
    lineHeight: 26,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  subHeading: {
    fontFamily: Montserrat.medium,
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  buttonWrapper: {
    borderRadius: 28,
    elevation: 4,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: 120,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  buttonText: {
    fontFamily: Montserrat.bold,
    color: '#1f1f1f',
    fontSize: 14,
    marginRight: 8,
  },
  nestedContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    gap: 10,
  },
});
