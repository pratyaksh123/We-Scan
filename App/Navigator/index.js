import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../Screens/HomeScreen'

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
