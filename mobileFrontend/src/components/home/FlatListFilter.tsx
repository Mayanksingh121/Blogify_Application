import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {fontOBJ} from '../../assets/fonts';
import {IFlatListFilter} from '../../types/homeScreen.types';
import {BlogTypes} from '../../utils/constants';

const {Montserrat, Lato} = fontOBJ;
const {height} = Dimensions.get('window');
const FlatListFilter = ({activeBlog, handleChange}: IFlatListFilter) => {

  const renderItem = ({item}: {item: string}) => {
    return (
      <Pressable onPress={() => handleChange(item)}>
        <Text
          style={[
            styles.itemStyle,
            item === activeBlog && {backgroundColor: '#2db3fc', color: 'white'},
          ]}>
          {item}
        </Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.parentComponent}>
      <Text style={styles.heading}>From Around the Web</Text>
      {/* <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListStyle}
          horizontal
          data={BlogTypes}
          renderItem={renderItem}
          keyExtractor={(item,index)=>item+" "+index}
        />
      </View> */}
    </View>
  );
};

export default FlatListFilter;

const styles = StyleSheet.create({
  parentComponent: {
    paddingHorizontal: 16,
    gap: 14,
  },
  heading: {
    fontFamily: Montserrat.bold,
    fontSize: height * 0.02,
  },
  flatListStyle: {
    gap: 10,
  },
  itemStyle: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 10,
    fontFamily: Montserrat.medium,
    color: 'black',
    backgroundColor: '#eeeeef',
    borderWidth: 0.1,
    elevation: 1
  },
});
