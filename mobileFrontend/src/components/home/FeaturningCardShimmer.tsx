import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const FeaturningCardShimmer = () => {
  return (
    <View>
      <Text>FeaturningCardShimmer</Text>
    </View>
  )
}

export default FeaturningCardShimmer

const styles = StyleSheet.create({})