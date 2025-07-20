import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NumbersCard from './NumbersCard';
import Chart from './Chart';
import {fontOBJ} from '../../assets/fonts';

const {Lato} = fontOBJ;
const {height} = Dimensions.get('screen');
const FlatListHeaderDashboard = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.numberCard}>
        <NumbersCard icon="Document" />
        <NumbersCard icon="Heart" />
        <NumbersCard icon="Views" />
      </View>
      <Chart />
      <View>
        <Text style={styles.heading}>Your Blogs</Text>
      </View>
    </View>
  );
};

export default FlatListHeaderDashboard;

const styles = StyleSheet.create({
  parentContainer: {
    gap: 20,
  },
  numberCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: Lato.bold,
    fontSize: height * 0.023,
  },
});
