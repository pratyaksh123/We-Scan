import { DefaultTheme } from 'react-native-paper'

const spacingUnit = 8

const gray = {
  100: '#F7FAFC',
  200: '#EDF2F7',
  300: '#E2E8F0',
  400: '#CBD5E0',
  500: '#A0AEC0',
  600: '#718096',
  700: '#4A5568',
  800: '#2D3748',
  900: '#1A202C',
}

const blue = {
  100: '#EBF8FF',
  200: '#BEE3F8',
  300: '#90CDF4',
  400: '#63B3ED',
  500: '#4299E1',
  600: '#3182CE',
  700: '#2B6CB0',
  800: '#2C5282',
  900: '#2A4365',
}

const green = {
  100: '#F0FFF4',
  200: '#C6F6D5',
  300: '#9AE6B4',
  400: '#68D391',
  500: '#48BB78',
  600: '#38A169',
  700: '#2F855A',
  800: '#276749',
  900: '#22543D',
}

const yellow = {
  100: '#FFFFF0',
  200: '#FEFCBF',
  300: '#FAF089',
  400: '#F6E05E',
  500: '#ECC94B',
  600: '#D69E2E',
  700: '#B7791F',
  800: '#975A16',
  900: '#744210',
}

const red = {
  100: '#FFF5F5',
  200: '#FED7D7',
  300: '#FEB2B2',
  400: '#FC8181',
  500: '#F56565',
  600: '#E53E3E',
  700: '#C53030',
  800: '#9B2C2C',
  900: '#742A2A',
}

const indigo = {
  100: '#EBF4FF',
  200: '#C3DAFE',
  300: '#A3BFFA',
  400: '#7F9CF5',
  500: '#667EEA',
  600: '#5A67D8',
  700: '#4C51BF',
  800: '#434190',
  900: '#3C366B',
}

const borderRadius = {
  0: 0,
  100: 2,
  200: 4,
  300: 8,
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: blue[600],
    accent: yellow[500],
    blue,
    red,
    gray,
    green,
    yellow,
    indigo,
    background: 'white',
  },
  borderRadius,
  spacing: (size) => {
    // mimics website's theme spacing function
    // can be provided with only one arg unlike website which supports upto to 4
    // because react native doesn't support padding: '2 3', '2 3 4', '4 5 6 7'
    if (!Number.isInteger(size) && size !== 0.5) {
      throw Error(
        'Invalid size passed to theme.spacing (only ints and 0.5 allowed)'
      )
    }
    return size * spacingUnit
  },
}

export default theme
