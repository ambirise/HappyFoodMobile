import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageLoad from 'react-native-image-placeholder';
import NumberStepper from 'react-native-custom-stepper';
import UIStepper from 'react-native-ui-stepper';
import {TextInput} from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Cart extends Component {
  setValue = value => {
    // do something with value
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
          <ScrollView style={{backgroundColor: '#8284d1', flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                padding: 8,
              }}>
              <TouchableOpacity style={{width: 48}}>
                <Icon size={32} color="white" name={'chevron-left'} />
              </TouchableOpacity>

              {/* <TouchableOpacity style={{}}>
            <EvilIcons size={32} color="white" name={'search'} />
          </TouchableOpacity> */}
              <Text
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Your Cart (3)
              </Text>

              <Text
                style={{
                  flex: 1,
                  textAlign: 'right',
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Total: Rs. 320
              </Text>
            </View>

            <View
              style={{
                backgroundColor: 'white',
                height: height - 240,
                borderBottomEndRadius: 25,
                borderBottomStartRadius: 25,
                shadowOffset: {height: 2, width: 2},
                shadowColor: 'black',
                shadowRadius: 2,
                //   marginRight: 4,
                shadowOpacity: 0.5,
              }}>
              <FlatList
                data={[1, 2, 3, 3, 2]}
                renderItem={({item}) => (
                  <View>
                      <View
                      style={{
                        height: 1,
                        width: '100%',
                        backgroundColor: 'black',
                      }}></View>
                    <View
                      style={{
                        flexDirection: 'row',
                        margin: 1,
                        // backgroundColor: '#f9fce6',
                      }}>
                      <ImageLoad
                        style={{width: width / 3, height: width / 3}}
                        resizeMode={'contain'}
                        source={require('../../resources/images/burger.png')}></ImageLoad>
                      <View
                        style={{
                          paddingLeft: 4,
                          justifyContent: 'space-evenly',
                          flexDirection: 'column',
                          width: width - width / 3,
                        }}>
                        <View style={{}}>
                          <Text style={{fontWeight: '300', fontSize: 18}}>
                            Chicken Burger
                          </Text>
                        </View>
                        <View
                          style={{alignSelf: 'flex-start', paddingRight: 0}}>
                          <View style={{width: width / 3}}>
                            <UIStepper
                              displayValue={true}
                              borderRadius={10}
                              onValueChange={value => {
                                this.setValue(value);
                              }}
                            />
                          </View>
                        </View>
                        <View style={{alignSelf: 'flex-end', paddingRight: 24}}>
                          <Text>Rs 120</Text>
                        </View>
                      </View>
                    </View>
                    
                  </View>
                )}
                keyExtractor={item => item}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
                margin: 4,
              }}>
              <TextInput
                style={{
                  width: '70%',
                  backgroundColor: 'white',
                  height: 42,
                  borderRadius: 12,
                  paddingLeft: 4,
                }}
                placeholder={'Remarks..'}></TextInput>

              <TouchableOpacity
                style={{
                  backgroundColor: '#494ed6',
                  padding: 12,
                  margin: 12,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: 'white',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowRadius: 2,
                  shadowOpacity: 0.8,
                }}>
                <Text style={{color: 'white'}}>Order Now</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}
