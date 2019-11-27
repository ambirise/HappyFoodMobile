/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './appintro';
import App from './appsrc/homepages/Home';
// import App from './appsrc/homepages/menu/MenuStack';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
