import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../Screens/HomeScreen'
import { createAppContainer } from 'react-navigation'

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
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
