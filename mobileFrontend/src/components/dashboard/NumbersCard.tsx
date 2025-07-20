import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DASHBOARD_ICONS } from '../../utils/constants'
import { fontOBJ } from '../../assets/fonts';

const {height, width} = Dimensions.get("window");
const {Montserrat} = fontOBJ;
const NumbersCard = ({icon}: {icon: string}) => {
  const Component = DASHBOARD_ICONS[icon];
  return (
    <View style={styles.parentContainer}>
      <View style={[styles.iconContainer, {backgroundColor: Component.color}]}>
        <Component.name/>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.numbers}>24</Text>
          <Text style={styles.cardText}>Total Blogs</Text>
        </View>
    </View>
  )
}

export default NumbersCard

const styles = StyleSheet.create({
  parentContainer: {borderRadius: 10, backgroundColor: '#ffffff', width: (width/3) - 21, padding: 15, justifyContent: 'center', alignItems: 'center', elevation: 2, gap: 10},
  iconContainer: {paddingVertical: 8, width: 38 , borderRadius: 10, justifyContent: 'center', alignItems: 'center'},
  bottomContainer: {justifyContent:'center', alignItems: 'center'},
  numbers: {fontFamily: Montserrat.bold, fontSize: height * 0.027},
  cardText: {color: '#6b7280', fontSize: height * 0.013, fontFamily: Montserrat.semiBold}
})