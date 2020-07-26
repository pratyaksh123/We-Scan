import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeScreen from '../Screens/HomeScreen'
import CustomDrawer from './CustomDrawer'

const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    contentComponent: CustomDrawer,
  }
)

export default Drawer
