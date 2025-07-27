import {FlatList, View} from 'react-native';
import React, { useState } from 'react';
import BlogCard from '../../components/home/BlogCard';
import {DUMMY_DATA} from '../../utils/constants';
import FlatListHeader from '../../components/home/FlatListHeader';
import FlatListFilter from '../../components/home/FlatListFilter';

const Home = () => {
  const [activeBlog, setActiveBlog] = useState<string>("All");


  const handleChange = (name: string)=>{
    setActiveBlog(name);
  }

  const renderItem = ({item}: any) => {
    return (
      <View style={{paddingHorizontal: 14, paddingVertical: 20}}>
        <BlogCard />
      </View>
    );
  };

  return (
    <FlatList
      style={{backgroundColor: 'white'}}
      ListHeaderComponent={() => (
        <>
          <FlatListHeader />
          <FlatListFilter activeBlog={activeBlog} handleChange={handleChange}/>
        </>
      )}
      data={DUMMY_DATA}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default Home;
