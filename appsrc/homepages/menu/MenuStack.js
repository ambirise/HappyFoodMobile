import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Menu from './Menu';
import Cart from '../cart/Cart';

const MenuStack = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null,
    },
  },
  Cart: {screen: Cart},
});

export default createAppContainer(MenuStack);
