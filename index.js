/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './appintro';
import App from './appsrc/homepages/Home';
// import App from './appsrc/homepages/menu/MenuStack';
// import App from './appsrc/homepages/cart/Cart'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
