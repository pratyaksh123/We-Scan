import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Text } from 'react-native-paper'

const styles = StyleSheet.create({
  imageStyle: {
    height: 150,
    width: 150,
  },
})

const EmptyDocumentComponent = () => {
  return (
    <>
      <Image
        style={styles.imageStyle}
        source={require('../Assets/empty.png')}
      />
      <Text>Start Scanning some fucking Documents!!</Text>
    </>
  )
}

export default EmptyDocumentComponent
