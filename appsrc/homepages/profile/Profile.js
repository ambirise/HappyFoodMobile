import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  renderHeader() {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#E64A19',
            height: height * 0.3,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
          }}>
          <ImageBackground
            resizeMode={'cover'}
            style={{
              justifyContent: 'center',
              height: '100%',
              width: '100%',
            }}
            // source={require('../../resources/images/abs2.png')}
          >
            <Image
              style={{
                alignSelf: 'center',
                height: 0.15 * height,
                width: 0.15 * height,
                borderRadius: (0.15 * height) / 2,
                backgroundColor: 'white',
              }}
              source={require('../../resources/images/face.jpg')}></Image>
            <Icon
              style={{
                position: 'absolute',
                alignSelf: 'center',
                left: width / 2 + (height * 0.15) / 4,
                borderRadius: 12,
              }}
              size={28}
              color={'#33ebff'}
              name={'verified-user'}
            />

            <View
              style={{alignSelf: 'center', padding: 12, alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 16}}>Ram Adhikari</Text>
              <Text style={{color: 'white', fontSize: 16}}>9867655654</Text>
              <Text style={{color: 'white', fontSize: 16}}>Pokhara-30</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#e8cdc5'}}>
        <View style={{flex: 1, paddingBottom: 10}}>
          <FlatList
            data={[
              'Cheese',
              'Pizza',
              'MoMo',
              'Burger',
              'Chowmein',
              'Thukpa',
              'French Fries',
              'Aalu Sadeko',
              'Coke',
              'Sekuwa',
            ]}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={() => {
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 8,
                  }}>
                  <Text>--</Text>
                  <View style={{backgroundColor:'white',width:'110%',height:1,margin:12}}></View>
                </View>
              );
            }}
            renderItem={({item, index}) => (
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  //   margin: 8,
                  marginLeft: 8,
                  marginRight: 8,
                  marginTop: index == 0 ? 8 : 1,
                  padding: 8,
                }}>
                <View
                  style={{
                    // flex: 1,
                    backgroundColor: '#E64A19',
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                  }}>
                  <Text style={{color: 'white'}}>{index + 1}</Text>
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
                    Rs. {Math.round(Math.random(1,2)*1000)}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={item => item}
          />
          <View style={{padding: 4, margin: 4, flexDirection: 'row'}}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 4,
                }}>
                <Text style={{fontWeight: '300'}}>Total Orders</Text>
                <Text>10</Text>
              </View>
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: 'green',
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 4,
                }}>
                <Text style={{fontWeight: '300'}}>Total Amount</Text>
                <Text>3,200</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
{
  /* <Button title="Go to Jane's profile" onPress={() => navigate('Cart')} />
        <Text style={{fontSize:59}}>Hello menu</Text> */
}

const styles = StyleSheet.create({
  badgeItems: {
    marginRight: 12,
    padding: 2,
    fontWeight: '200',
    backgroundColor: '#ededed',
    // borderWidth: 1,
    // borderColor: 'green',
  },
  itemTypesText: {
    color: 'orange',
    fontWeight: '500',
    fontSize: 18,
    alignSelf: 'center',
  },
  menuItemsView: {
    padding: 5,
    justifyContent: 'space-between',
    // backgroundColor:'red',
    flexDirection: 'row',
  },
});
