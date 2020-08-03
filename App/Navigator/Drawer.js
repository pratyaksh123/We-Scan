import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeScreen from '../Screens/HomeScreen'
import CustomDrawer from './CustomDrawer'
import DocumentScanner from '../Screens/Scanner'
import ImageView from '../Screens/imageView'

const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Scanner: { screen: DocumentScanner },
    Image: { screen: ImageView },
  },
  {
    contentComponent: CustomDrawer,
  }
)

export default Drawer
