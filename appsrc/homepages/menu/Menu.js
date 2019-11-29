import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import StarRating from 'react-native-star-rating';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Menu extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  renderHeader() {
    return (
      <View>
        <View style={{height: 0.3 * height}}>
          <Image
            style={{
              height: '70%',
              width: '100%',
              backgroundColor: 'green',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            source={require('../../resources/images/burger1.png')}></Image>

          <View
            style={{
              borderRadius: 5,
              flex: 1,
              backgroundColor: 'white',
              height: 0.16 * height,
              width: 0.9 * width,
              position: 'absolute',
              top: 0.13 * height,
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{height: '100%', width: '25%'}}
              resizeMode={'contain'}
              source={require('../../resources/images/logo.png')}></Image>
            <View
              style={{flex: 1, padding: 12, justifyContent: 'space-evenly'}}>
              <Text
                style={{
                  fontSize: 18,
                  // fontWeight: '200',
                  textShadowColor: 'red',
                  textShadowOffset: {width: 1, height: 1},
                  textShadowRadius: 0.5,
                }}>
                Happy Food Restaurant
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.badgeItems}>Chicken</Text>
                <Text style={styles.badgeItems}>Buff</Text>
                <Text style={styles.badgeItems}>Veg</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <StarRating
                  starSize={15}
                  disabled={true}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={4.5}
                  selectedStar={rating => null}
                  fullStarColor={'red'}
                />
                <Text style={{fontSize: 12, fontWeight: '100'}}>
                  4.8 rating
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon size={20} color="red" name={'clock'} />
                <Text style={{paddingLeft: 8, fontWeight: '200'}}>
                  30 Minutes Delivery*
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'space-around',
            height: 48,
            width: width,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[styles.itemTypesText, {}]}>All Items</Text>
            <View
              style={{
                height: 4,
                backgroundColor: 'red',
                width: 60,
                bottom: 0,
                position: 'absolute',
              }}></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[styles.itemTypesText, {}]}>Veg</Text>
            {/* <View
              style={{
                height: 4,
                backgroundColor: 'red',
                width: 40,
                bottom: 0,
                position: 'absolute',
              }}></View> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[styles.itemTypesText, {}]}>Non-Veg</Text>
            {/* <View
              style={{
                height: 4,
                backgroundColor: 'red',
                width: 40,
                bottom: 0,
                position: 'absolute',
              }}></View> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[styles.itemTypesText, {}]}>Drinks and Others</Text>
            {/* <View
              style={{
                height: 4,
                backgroundColor: 'red',
                width: 40,
                bottom: 0,
                position: 'absolute',
              }}></View> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#e4e8e3'}}>
        <View style={{flex: 1, paddingBottom: 10}}>
          <FlatList
            data={[
              'Cheese',
              'Pizza',
              'MoMo',
              'Burger',
              'Cheese',
              'Pizza',
              'MoMo',
              'Burger',
              'Cheese',
              'Pizza',
              'MoMo',
              'Burger',
              'Cheese',
              'Pizza',
              'MoMo',
              'Burger',
            ]}
            ListHeaderComponent={this.renderHeader}
            numColumns={2}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  margin: 8,
                }}
                onPress={()=>{navigate('ItemDetails')}}>
                <Image
                  style={{
                    overflow: 'hidden',
                    width: width / 2 - 16,
                    height: width / 2,
                  }}
                  resizeMode={'contain'}
                  source={require('../../resources/images/salad.png')}></Image>
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, left: 10}}>
                  <Icon
                    size={24}
                    color={index % 3 == 0 ? 'red' : 'grey'}
                    name={'heart-circle-outline'}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: 10}}>
                  <Icon
                    size={24}
                    color={index % 2 == 0 ? 'orange' : 'grey'}
                    name={'cart'}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                  }}>
                  <View style={styles.menuItemsView}>
                    <Text style={{fontWeight: '300'}}>Chowmein</Text>
                    <Text style={{alignSelf: 'flex-end', fontWeight: '300'}}>
                      Rs. 120
                    </Text>
                  </View>
                  {/* <View style={styles.menuItemsView}>
                    <Text>Third</Text>
                    <Text>Forth</Text>
                  </View>
                  <View></View> */}
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
          />
          <View
            style={{
              position: 'absolute',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              padding: 8,
              backgroundColor: '#a2a1a175',
            }}>
            <TouchableOpacity style={{}}>
              <Icon size={32} color="white" name={'chevron-left'} />
            </TouchableOpacity>

            <TouchableOpacity style={{}}>
              <EvilIcons size={32} color="white" name={'search'} />
            </TouchableOpacity>
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
