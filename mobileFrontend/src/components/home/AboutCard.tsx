import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AboutCardItem } from '../../types/homeScreen.types'
import { fontOBJ } from '../../assets/fonts';

const {width,height} = Dimensions.get("window");
const {Montserrat} = fontOBJ;
const AboutCard = ({cardData}: {cardData: AboutCardItem}) => {
  return (
    <View style={{backgroundColor: cardData.backgroundColor, width: width*0.5-18, alignItems: 'center', gap:8,paddingHorizontal: 14, paddingVertical: 10}}>
     <View style={{padding: 10, borderRadius: 100, backgroundColor: cardData.circleColor, overflow: 'hidden'}}>
        <Image style={{width: 30, height: 30, tintColor: cardData.color}} source={cardData.image}/>
     </View>
     <View style={{alignItems: 'center', gap: 6}}>
        <Text style={{fontFamily: Montserrat.bold, textAlign: 'center', width: width*0.3}}>{cardData.title}</Text>
        <Text style={{fontFamily: Montserrat.medium, textAlign: 'center'}}>{cardData.subTitle}</Text>
     </View>
    </View>
  )
}

export default AboutCard

const styles = StyleSheet.create({})