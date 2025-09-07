import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  useAnimatedValue,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {QuizQuestion} from '../../utils/constants';
import {fontOBJ} from '../../assets/fonts';

const {Montserrat} = fontOBJ;
const {height, width} = Dimensions.get('screen');

const QuizContainer = () => {
  const [questionNum, setQuestionNum] = useState<number>(0);
  const [answersSelected, setAnswersSelected] = useState([]);
  const activePosition = useAnimatedValue(0);

  useEffect(() => {
    activePosition.setValue(width - 32);
  }, []);

  const handleButtonClick = (type: 'previous' | 'next') => {
    if (type === 'previous') {
      setQuestionNum(prevState => prevState - 1);
    } else {
      if (questionNum == 4) {
        return;
      }
      setQuestionNum(prevState => prevState + 1);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.progressBarContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.progressText}>Question {questionNum+1} of 5</Text>
          <Text style={styles.progressText}>10%</Text>
        </View>
        <Animated.View style={[styles.progressTab]}></Animated.View>
      </View>
      <View style={[styles.questionContainer]}>
        <Text style={styles.questionStyle}>{questionNum + 1}.</Text>
        <Text style={styles.questionStyle}>
          {' '}
          {QuizQuestion[questionNum]?.question}
        </Text>
      </View>
      <View style={styles.container}>
        {QuizQuestion[questionNum]?.options?.map(
          (options: string, index: number) => {
            return (
              <TouchableOpacity
                style={[styles.optionContainer]}
                key={options + '_' + index}>
                <Text style={styles.optionStyle}>
                  {String.fromCharCode(65 + index)}.
                </Text>
                <Text style={styles.optionStyle}>{options}</Text>
              </TouchableOpacity>
            );
          },
        )}
      </View>
      <View style={[styles.buttonContainer]}>
        {questionNum ? (
          <TouchableOpacity onPress={() => handleButtonClick('previous')}>
            <Text style={styles.button}>Previous</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity onPress={() => handleButtonClick('next')}>
          <Text style={styles.button}>
            {questionNum === 4 ? 'Submit' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default QuizContainer;

const styles = StyleSheet.create({
  progressBarContainer: {
    backgroundColor: 'white',
    height: height * 0.06,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f4f5',
    paddingHorizontal: 16
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4
  },
  progressTab: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressText: {
    fontFamily: Montserrat.semiBold
  },
  questionContainer: {
    flexDirection: 'row',
    gap: 3,
    marginVertical: height * 0.03,
    paddingHorizontal: 16
  },
  questionStyle: {
    fontFamily: Montserrat.bold,
    fontSize: height * 0.02,
  },
  container: {
    gap: 20,
    paddingHorizontal: 16
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
    borderWidth: 0.2,
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 10,
  },
  optionStyle: {
    fontFamily: Montserrat.semiBold,
    color: '#666666',
    fontSize: height * 0.018,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'flex-end',
    gap: 10,
    paddingHorizontal: 16
  },
  button: {
    backgroundColor: '#2591d1',
    paddingHorizontal: 14,
    color: 'white',
    paddingVertical: 8,
    fontSize: height * 0.017,
    fontFamily: Montserrat.bold,
    borderRadius: 4,
  },
});
