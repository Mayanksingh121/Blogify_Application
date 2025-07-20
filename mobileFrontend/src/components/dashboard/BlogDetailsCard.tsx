import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import imagesOBJ from '../../assets/images';
import { fontOBJ } from '../../assets/fonts';

const {maleAvatar} = imagesOBJ;
const {Montserrat,Lato} = fontOBJ;
const {height, width} = Dimensions.get("screen");
const BlogDetailsCard = (item: any, handleDelete: ()=>void) => {
  return (
    <View
      style={styles.parentContainer}>
      <Image
        source={maleAvatar}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.heading}>BlogDetailsCard</Text>
        <View style={styles.sideContainer}>
          <Text style={styles.numbers}>2.4k views</Text>
          <Text style={styles.numbers}>156 likes</Text>
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.button}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BlogDetailsCard;

const styles = StyleSheet.create({
    parentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 15,
        width: width * 0.9,
        borderRadius: 10,
        elevation: 0.7,
        backgroundColor: 'white',
        borderWidth: 0.1
      },
      image: {width: 50, height: 50, borderRadius: 10, overflow: 'hidden'},
      detailsContainer: {justifyContent: 'center',gap: 8, flexShrink: 1},
      heading: {fontFamily: Lato.bold, fontSize: height * 0.018},
      sideContainer: {flexDirection: 'row', gap: 20, alignItems: 'center'},
      numbers: {fontFamily: Montserrat.medium, color: '#6b7280'},
      button: {paddingHorizontal: 15, paddingVertical: 8, backgroundColor: '#2463eb', color:'white', borderRadius: 4,fontFamily: Lato.bold}
});
