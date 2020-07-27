import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Drawer from './Drawer'
import CameraScreen from '../Screens/CameraScreen'

const AppStack = createStackNavigator(
  {
    Drawer: {
      screen: Drawer,
    },
    Camera: {
      screen: CameraScreen,
    },
  },
  {
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(AppStack)

export default () => {
  return <AppContainer />
}
