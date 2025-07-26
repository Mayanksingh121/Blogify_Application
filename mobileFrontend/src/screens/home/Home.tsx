import {FlatList, View} from 'react-native';
import React from 'react';
import BlogCard from '../../components/home/BlogCard';
import {DUMMY_DATA} from '../../utils/constants';
import FlatListHeader from '../../components/home/FlatListHeader';

const Home = () => {
  const renderItem = ({item}: any) => {
    return (
      <View style={{paddingHorizontal: 14, paddingVertical: 20}}>
        <BlogCard />
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={FlatListHeader}
      data={DUMMY_DATA}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default Home;
