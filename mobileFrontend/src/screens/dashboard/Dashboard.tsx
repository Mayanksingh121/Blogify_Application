import {Alert, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/dashboard/HeaderComponent';
import {DUMMY_DATA} from '../../utils/constants';
import BlogDetailsCard from '../../components/dashboard/BlogDetailsCard';
import FlatListHeaderDashboard from '../../components/dashboard/FlatListHeaderDashboard';

const Dashboard = () => {
  const handleDelete = ()=>{
    Alert.alert('Delete Blog', 'Do you want to delete this blog?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
  return (
    <>
      <HeaderComponent />
      <View style={Styles.parentView}>
      <FlatList
        ListHeaderComponent={() => (
          <FlatListHeaderDashboard/>
        )}
        showsVerticalScrollIndicator={false}
        data={DUMMY_DATA}
        renderItem={(item)=>BlogDetailsCard(item, handleDelete)}
        contentContainerStyle={{gap: 20,paddingBottom: 10}}
      />
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    paddingTop: 20,
    paddingHorizontal: 20
  },
})

export default Dashboard;
