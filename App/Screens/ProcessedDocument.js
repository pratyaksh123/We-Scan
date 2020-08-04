import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const ProcessedDocumentScreen = ({ navigation }) => {
  console.log(navigation.getParam('image'))
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${navigation.getParam('image')}` }}
        style={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
          resizeMode: 'contain',
        }}
      />
    </View>
  )
}

export default ProcessedDocumentScreen
