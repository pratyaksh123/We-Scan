import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Drawer from './Drawer'
import DocumentScanner from '../Screens/Scanner'
import ProcessedDocumentScreem from '../Screens/ProcessedDocument'

const AppStack = createStackNavigator(
  {
    Drawer: {
      screen: Drawer,
    },
    Scanner: { screen: DocumentScanner },
    ProcessedDocumentScreen: { screen: ProcessedDocumentScreem },
  },
  {
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(AppStack)

export default () => {
  return <AppContainer />
}
