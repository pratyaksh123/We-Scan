import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Drawer from './Drawer'

const AppStack = createStackNavigator(
  {
    Drawer: {
      screen: Drawer,
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
