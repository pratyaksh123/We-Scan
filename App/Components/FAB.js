import * as React from 'react'
import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'

const Fab = () => (
  <FAB
    style={styles.fab}
    large
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
)

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: 0,
  },
})

export default Fab
