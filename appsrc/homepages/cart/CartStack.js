import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Cart from '../cart/Cart';

const CartStact = createStackNavigator({
  Cart: {
    screen: Cart,
    navigationOptions: {
      header: null,
    },
  },
//   ItemDetails: {screen: ItemDetails},
});

export default createAppContainer(CartStact);
