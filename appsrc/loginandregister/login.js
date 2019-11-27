import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class login extends Component {
  render() {
    return (
      <View>
        <Text> This is changed by amit </Text>
      </View>
    );
  }
}
// all the files have been disappear

export default login;

//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class MyClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MyClass</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyClass;
