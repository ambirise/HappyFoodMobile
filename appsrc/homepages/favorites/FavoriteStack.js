import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Favourite from './Favourite';

const FavouriteStack = createStackNavigator({
  Favourite: {
    screen: Favourite,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(FavouriteStack);
