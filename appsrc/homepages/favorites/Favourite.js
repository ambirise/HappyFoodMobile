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

export default class Favorite extends Component {
  setValue = value => {
    // do something with value
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>
        <SafeAreaView style={{backgroundColor: '#B71C1C', flex: 1}}>
          <ScrollView style={{backgroundColor: '#B71C1C', flex: 1}}>
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
                  color: 'white',
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Favorite Items
              </Text>

              <Text
                style={{
                  flex: 1,
                  textAlign: 'right',
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                {/* Total: Rs. 600 */}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#ccb1b1',
                height: height,
                borderBottomEndRadius: 25,
                borderBottomStartRadius: 25,
                shadowOffset: {height: 2, width: 2},
                shadowColor: 'black',
                shadowRadius: 2,
                //   marginRight: 4,
                shadowOpacity: 0.5,
              }}>
              <FlatList
                data={[
                  'Chowmein with Coke',
                  'MoMo with Dew',
                  'French Fried and Pepsi',
                  'Tea and Cigarett',
                  'Milk and Oreo',
                  'Thukpa with Sprite',
                ]}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: 'white',
                      //   flexDirection: 'row',
                      marginLeft: 8,
                      marginRight: 8,
                      marginTop: 8,

                      marginTop: index == 0 ? 8 : 1,
                      padding: 8,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            alignSelf:'center',
                            backgroundColor: '#B71C1C',
                            width: 30,
                            height: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                          }}>
                          <Text style={{color: 'white'}}>{index + 1}</Text>
                        </View>
                      </View>
                      <View style={{flex: 1, padding: 8}}>
                        <Text style={{fontSize: 12, fontWeight: '200'}}>
                          2019/01/23
                        </Text>
                        <Text style={{fontSize: 18, fontWeight: '300'}}>
                          {item}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 14,
                            alignSelf: 'flex-end',
                            //   backgroundColor: 'red',
                          }}>
                          Rs. {Math.round(Math.random(1, 2) * 1000)}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        justifyContent: 'flex-end',
                        // backgroundColor: 'red',
                        width: '100%',
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#ffef08',
                          padding: 8,
                          margin: 4,
                          borderRadius: 15,
                          justifyContent: 'center',
                          alignItems: 'center',
                          shadowColor: 'black',
                          shadowOffset: {
                            width: 2,
                            height: 2,
                          },
                          shadowRadius: 2,
                          shadowOpacity: 0.8,
                          elevation: 3,
                        }}>
                        <Text style={{color: 'black'}}>Add To Cart</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          backgroundColor: '#494ed6',
                          padding: 8,
                          margin: 4,
                          borderRadius: 15,
                          justifyContent: 'center',
                          alignItems: 'center',
                          shadowColor: 'black',
                          shadowOffset: {
                            width: 2,
                            height: 2,
                          },
                          shadowRadius: 2,
                          shadowOpacity: 0.8,
                          elevation: 3,
                        }}>
                        <Text style={{color: 'white'}}>Order Now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                keyExtractor={item => item}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}
// =======
// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

// const phonenumbers =
//     [
//         { name: 'Police', number: '100' },
//         { name: 'Ambulance', number: '102' },
//         { name: 'Blood Bank-Pokhara', number: '061521091' },
//         { name: 'FishTail Hospital-Pokhara', number: '061536999' },
//         { name: 'Manipal Hospital-Pokhara', number: '061426416' },
//         { name: 'Tourist Police-Pokhara', number: '061462761' },
//         { name: 'Tourist Police-jhapa', number: '061462761' },
//         { name: 'Bikram', number: '100' },
//         { name: 'Bishal', number: '102' },
//         { name: 'hulu Bank-Pokhara', number: '061521091' },
//         { name: 'Tail Hospital-Pokhara', number: '061536999' },
//         { name: 'MOney Hospital-Pokhara', number: '061426416' },
//         { name: 'Kuirey Police-Pokhara', number: '061462761' },
//         { name: 'GORA Police-jhapa', number: '061462761' },
//         { name: 'Police', number: '100' },
//         { name: 'Ambulance', number: '102' },
//         { name: 'Blood Bank-Pokhara', number: '061521091' },
//         { name: 'FishTail Hospital-Pokhara', number: '061536999' },
//         { name: 'Manipal Hospital-Pokhara', number: '061426416' },
//         { name: 'Tourist Police-Pokhara', number: '061462761' },
//         { name: 'Tourist Police-jhapa', number: '061462761' },
//         { name: 'Bikram', number: '100' },
//         { name: 'Bishal', number: '102' },
//         { name: 'hulu Bank-Pokhara', number: '061521091' },
//         { name: 'Tail Hospital-Pokhara', number: '061536999' },
//         { name: 'MOney Hospital-Pokhara', number: '061426416' },
//         { name: 'Kuirey Police-Pokhara', number: '061462761' },
//         { name: 'Hangana Police-jhapa', number: '061462761' },
//     ]

// // create a component
// class MyClass extends Component {

//     constructor() {
//         super()
//         this.state = {
//             SearchArray: phonenumbers,
//         }
//     }
//     static navigationOptions = {
//         title: 'Cart',
//         headerStyle: {
//             backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold',
//         }
//     };
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View>
//                     <Text style={{ textAlign: "center" }}>YOUR CARTS ARE </Text>
//                 </View>

//                 <FlatList style={{ margin: 5 }} data={this.state.SearchArray}
//                     renderItem=
//                     {({ item }) =>
//                         <View style={{ flex: 1, }}>
//                             <TouchableOpacity style={styles.touch}
//                                 onPress={() => { this.makecall(item.number) }}>

//                                 <View style={styles.mainView}>
//                                     <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', }}>
//                                         <Image
//                                             style={{ height: 50, width: 50 }}
//                                             resizeMode={'contain'}
//                                             source={require('../../resources/images/burger.png')}></Image>
//                                     </View>
//                                     <View style={{ flex: 4, padding: 6 }}>
//                                         <View style={{ flex: 1 }}>
//                                             <Text>{item.name}</Text>
//                                         </View>
//                                         <View style={{ flex: 1 }}>
//                                             <Text style={{ color: "blue" }}>{item.number}</Text>
//                                         </View>
//                                     </View>
//                                 </View>
//                             </TouchableOpacity>
//                         </View>
//                     }
//                 />
//             </View>
//         );
//     }
// >>>>>>> origin/master
// }

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // backgroundColor: 'orange',
//     },

//     mainView:
//     {
//         flex: 1,
//         flexDirection: 'row',
//         borderWidth: 1,
//         margin: 3,
//         borderRadius: 10
//     }

// });

// //make this component available to the app
// export default MyClass;
