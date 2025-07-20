import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomLoadingIndicator = () => {
  return (
    <View style={styles.parentContainer}>
      <ActivityIndicator size="large"/>
    </View>
  )
}

export default CustomLoadingIndicator

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: '#b2b2b2',
        opacity: 0.5,
        alignContent: 'center',
        justifyContent: 'center',
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10
    },

})