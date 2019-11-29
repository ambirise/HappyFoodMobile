import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
import image from '../../resources/images/salad.png';
import NumberStepper from 'react-native-custom-stepper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ItemDetails extends Component {
  static navigationOptions = {
    title: 'Salad',
  };

  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            height: height / 3,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 4,
          }}>
          <ImageLoad
            style={{
              height: '100%',
              backgroundColor: '#f2f3f5',
              width: width - 8,
            }}
            resizeMode={'contain'}
            source={image}></ImageLoad>
        </View>
        <View>
          <FlatList
            style={{
              marginTop: 1.5,
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 4,
              //   flex: 1,
              //   height: 30,
              backgroundColor: '#f2f3f5',
            }}
            horizontal={true}
            data={[1, 2, 4, 5, 6]}
            renderItem={({item}) => (
              <TouchableOpacity>
                <ImageLoad
                  style={{
                    width: width / 5,
                    height: width / 5,
                    margin: 2,
                    // backgroundColor: 'white',
                    borderColor: 'white',
                    borderWidth: 1,
                  }}
                  resizeMode={'contain'}
                  source={image}></ImageLoad>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
          />
        </View>
        <Text
          style={{padding: 10, fontWeight: '300', backgroundColor: 'white'}}>
          Salad, is one of the best foods we offer, we particularly chose the
          best of fruites and vegetables in order to present you the best salad
          in town, ingredients in salad can be selected as per the customers
          preferences.
        </Text>
        <View
          style={{
            alignSelf: 'center',
            height: 50,
            width: width / 2.5,
            padding: 4,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{height: '100%', flex: 1}}>
            <NumberStepper
              buttonsFontColor={'black'}
              borderWidth={1}
              labelBackgroundColor={'white'}
              labelFontColor={'black'}
              borderColor={'black'}
              buttonsBackgroundColor={'white'}></NumberStepper>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            padding: 14,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          Rs. 120
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffef08',
            padding: 12,
            margin: 12,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#red',
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowRadius: 2,
            shadowOpacity: 0.8,
          }}>
          <Text style={{color: 'black'}}>Add To Cart</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
