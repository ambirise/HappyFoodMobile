import BottomNavigation, {
  ShiftingTab,
} from 'react-native-material-bottom-navigation';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuStack from './menu/MenuStack';

export default class Home extends React.Component {
  tabs = [
    {
      key: 'menu',
      icon: 'food',
      label: 'Menu',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'fav',
      icon: 'heart',
      label: 'Favorite',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'cart',
      icon: 'cart',
      label: 'Cart',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'profile',
      icon: 'account',
      label: 'Profile',
      barColor: '#494ed6',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
  ];

  state = {
    activeTab: 'menu',
  };

  renderIcon = icon => ({isActive}) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({tab, isActive}) => (
    <ShiftingTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <MenuStack/>
        <BottomNavigation
          activeTab={this.state.activeTab}
          onTabPress={newTab => this.setState({activeTab: newTab.key})}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  }
}

// export default App;
