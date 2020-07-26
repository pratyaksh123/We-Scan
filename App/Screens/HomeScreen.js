import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Appbar, Menu, Button, Divider, Text } from 'react-native-paper'
import EmptyDocumentComponent from '../Components/EmptyDocumentComponent'
import Fab from '../Components/FAB'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 150,
    width: 150,
  },
})

const HomeScreen = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false)

  const _handleSearch = () => console.log('Searching')

  const _handleMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)
  const _toggleDrawer = () => {
    navigation.toggleDrawer()
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.Action onPress={_toggleDrawer} icon="menu" />
        <Appbar.Content title="We Scan" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              color="white"
              onPress={_handleMenu}
            />
          }
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </Appbar.Header>
      <View style={styles.container}>
        <EmptyDocumentComponent />
        <Fab />
      </View>
    </>
  )
}

export default HomeScreen
