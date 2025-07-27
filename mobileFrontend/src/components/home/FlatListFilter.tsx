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
      <Pressable onPress={()=>handleChange(item)}>
        <Text
          style={[
            styles.itemStyle,
            item === activeBlog && {backgroundColor: 'black', color: 'white'},
          ]}>
          {item}
        </Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.parentComponent}>
      <Text style={styles.heading}>Recent Blogs</Text>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListStyle}
          horizontal
          data={BlogTypes}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default FlatListFilter;

const styles = StyleSheet.create({
  parentComponent: {
    paddingHorizontal: 14,
    paddingTop: 20,
    gap: 14,
  },
  heading: {
    fontFamily: Lato.bold,
    fontSize: height * 0.022,
  },
  flatListStyle: {
    gap: 10,
  },
  itemStyle: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 18,
    fontFamily: Montserrat.medium,
    color: 'black',
    backgroundColor: '#eeeeef',
    borderWidth: 0.1,
  },
});
