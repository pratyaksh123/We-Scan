import React from 'react'
import Navigator from './App/Navigator/index'
import { Provider as PaperProvider } from 'react-native-paper'
import theme from './theme'

export default () => {
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  )
}
