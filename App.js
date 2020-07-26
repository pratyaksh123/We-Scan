import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import Navigator from './App/Navigator/index'
import theme from './App/Theme/theme'

export default () => {
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  )
}
