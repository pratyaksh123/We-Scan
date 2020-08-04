import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeScreen from '../Screens/HomeScreen'
import CustomDrawer from './CustomDrawer'
import DocumentScanner from '../Screens/Scanner'
import ImageView from '../Screens/ProcessedDocument'

const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    contentComponent: CustomDrawer,
  }
)

export default Drawer
