//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';




const phonenumbers =
    [
        { name: 'Police', number: '100' },
        { name: 'Ambulance', number: '102' },
        { name: 'Blood Bank-Pokhara', number: '061521091' },
        { name: 'FishTail Hospital-Pokhara', number: '061536999' },
        { name: 'Manipal Hospital-Pokhara', number: '061426416' },
        { name: 'Tourist Police-Pokhara', number: '061462761' },
        { name: 'Tourist Police-jhapa', number: '061462761' },
        { name: 'Bikram', number: '100' },
        { name: 'Bishal', number: '102' },
        { name: 'hulu Bank-Pokhara', number: '061521091' },
        { name: 'Tail Hospital-Pokhara', number: '061536999' },
        { name: 'MOney Hospital-Pokhara', number: '061426416' },
        { name: 'Kuirey Police-Pokhara', number: '061462761' },
        { name: 'GORA Police-jhapa', number: '061462761' },
        { name: 'Police', number: '100' },
        { name: 'Ambulance', number: '102' },
        { name: 'Blood Bank-Pokhara', number: '061521091' },
        { name: 'FishTail Hospital-Pokhara', number: '061536999' },
        { name: 'Manipal Hospital-Pokhara', number: '061426416' },
        { name: 'Tourist Police-Pokhara', number: '061462761' },
        { name: 'Tourist Police-jhapa', number: '061462761' },
        { name: 'Bikram', number: '100' },
        { name: 'Bishal', number: '102' },
        { name: 'hulu Bank-Pokhara', number: '061521091' },
        { name: 'Tail Hospital-Pokhara', number: '061536999' },
        { name: 'MOney Hospital-Pokhara', number: '061426416' },
        { name: 'Kuirey Police-Pokhara', number: '061462761' },
        { name: 'Hangana Police-jhapa', number: '061462761' },
    ]


// create a component
class MyClass extends Component {

    constructor() {
        super()
        this.state = {
            SearchArray: phonenumbers,
        }
    }
    static navigationOptions = {
        title: 'Cart',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ textAlign: "center" }}>YOUR CARTS ARE </Text>
                </View>

                <FlatList style={{ margin: 5 }} data={this.state.SearchArray}
                    renderItem=
                    {({ item }) =>
                        <View style={{ flex: 1, }}>
                            <TouchableOpacity style={styles.touch}
                                onPress={() => { this.makecall(item.number) }}>

                                <View style={styles.mainView}>
                                    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', }}>
                                        <Image
                                            style={{ height: 50, width: 50 }}
                                            resizeMode={'contain'}
                                            source={require('../../resources/images/burger.png')}></Image>
                                    </View>
                                    <View style={{ flex: 4, padding: 6 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text>{item.name}</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: "blue" }}>{item.number}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'orange',
    },

    mainView:
    {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        margin: 3,
        borderRadius: 10
    }

   
});

//make this component available to the app
export default MyClass;

