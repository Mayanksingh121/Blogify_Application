import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontOBJ } from '../../assets/fonts'

const {Montserrat} = fontOBJ;
const PopularTags = ({tag}: {tag: string}) => {
  return (
    <View style={styles.background}>
      <Text style={styles.tag}>{tag}</Text>
    </View>
  )
}

export default PopularTags

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f9f9f9',
        paddingVertical: 4,
        paddingHorizontal: 7,
        borderRadius: 10
    },
    tag: {
        color: '#7f8796',
        fontFamily: Montserrat.medium
    }
})