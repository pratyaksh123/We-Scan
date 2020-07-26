import React from 'react'
import { DrawerItems } from 'react-navigation-drawer'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Appbar.Header>
        <Appbar.Content title="Welcome" />
      </Appbar.Header>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

export default CustomDrawerContentComponent
