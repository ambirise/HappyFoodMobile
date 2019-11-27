import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';

export default class Menu extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1}}>
        <Button title="Go to Jane's profile" onPress={() => navigate('Cart')} />
        <Text style={{fontSize:59}}>Hello menu</Text>
      </View>
    );
  }
}
