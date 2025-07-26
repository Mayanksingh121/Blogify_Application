import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {fontOBJ} from '../../assets/fonts';

const {Montserrat, Lato} = fontOBJ;
const {height} = Dimensions.get('window');
const QuizCard = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.innerContainer}>
        <View style={{gap: 10}}>
          <Text style={styles.heading}>Blog Discovery Quiz</Text>
          <Text style={styles.subHeading}>
            Find blogs tailored to your interests
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.button}>Take Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizCard;

const styles = StyleSheet.create({
  parentContainer: {padding: 14},
  innerContainer: {
    backgroundColor: '#eeeeef',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 14,
    justifyContent: 'space-between',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: '#c4c4c6'
  },
  heading: {fontFamily: Lato.bold, fontSize: height * 0.02},
  subHeading: {
    fontFamily: Lato.bold,
    fontSize: height * 0.015,
    color: '#4b5563',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    fontFamily: Montserrat.semiBold,
  },
});
