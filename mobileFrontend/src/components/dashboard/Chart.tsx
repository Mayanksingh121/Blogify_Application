import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {fontOBJ} from '../../assets/fonts';
import {LineChart} from 'react-native-chart-kit';

const {height, width} = Dimensions.get('window');
const {Montserrat,Lato} = fontOBJ;
const Chart = () => {
  const [currChart, setCurrentChart] = useState<'Views' | 'Likes'>('Views');

  const handleChartChange = (txt: 'Views' | 'Likes') => {
    if (currChart == txt) {
      return;
    }
    setCurrentChart(txt);
  };
  return (
    <View style={styles.parentContainer}>
      <View>
        <Text style={styles.headingText}>Analytics Overview</Text>
      </View>
      <View style={styles.chartButtonContainer}>
        <Pressable onPress={() => handleChartChange('Views')}>
          <Text
            style={[
              styles.button,
              currChart === 'Views' && {
                backgroundColor: '#2463eb',
                color: 'white',
              },
            ]}>
            Views
          </Text>
        </Pressable>
        <Pressable onPress={() => handleChartChange('Likes')}>
          <Text
            style={[
              styles.button,
              currChart === 'Likes' && {
                backgroundColor: '#2463eb',
                color: 'white',
              },
            ]}>
            Likes
          </Text>
        </Pressable>
      </View>
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={width * 0.88}
          height={180}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  );
};
const chartConfig = {
  backgroundColor: '#FFFFFF',
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#FFFFFF',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
};

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 500],
      color: (opacity = 1) => `rgba(36, 99, 235, ${opacity})`,
    },
  ],
};

export default Chart;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 20,
    justifyContent: 'center',
    // elevation: 1,
  },
  headingText: {fontFamily: Lato.bold, fontSize: height * 0.023},
  chartButtonContainer: {flexDirection: 'row', gap: 20},
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontFamily: Lato.bold,
    fontSize: height * 0.016,
    color: '#000',
    borderRadius: 8,
  },
  chartContainer: {width: '100%', alignItems: 'center'},
});
