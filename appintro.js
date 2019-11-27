import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
});

const slides = [
    {
      key: 'somethun',
      title: 'Best service in town',
      text: 'The best and mosty healthy food delivery restaurant in town',
      image: require('./appsrc/resources/images/burger.png'),
      backgroundColor: '#87cafa',
    },
    {
      key: 'somethun-dos',
      title: 'Precious time',
      text: 'Customers are as precious as customers time',
      image: require('./appsrc/resources/images/grill.png'),
      backgroundColor: '#ffb82b',
    },
    {
      key: 'somethun1',
      title: 'Health and satisfaction',
      text: 'Customers health and satisfaction is our earning',
      image: require('./appsrc/resources/images/salad.png'),
      backgroundColor: '#ff392b',
    }
  ];
  

export default class App extends React.Component {
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text>Next</Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text>Done</Text>
      </View>
    );
  };
  _renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text>Skip</Text>
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        onDone={()=>{alert("Done")}}
        onSkip={()=>{alert('Skip')}}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderSkipButton={this._renderSkipButton}
      />
    );
  }
}