import * as React from 'react'
import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: 0,
  },
})

const Fab = () => (
  <FAB
    style={styles.fab}
    large
    icon="camera"
    // eslint-disable-next-line no-console
    onPress={() => console.log('Pressed')}
  />
)

export default Fab
