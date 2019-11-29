import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Menu from './Menu';
import ItemDetails from '../menu/ItemDetails'

const MenuStack = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null,
    },
  },
  ItemDetails: {screen: ItemDetails},
});

export default createAppContainer(MenuStack);
