//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'

const screen_height = Dimensions.get('window').height
const screen_width = Dimensions.get('window').width

// create a component
class MyClass extends Component {
    render() {

        return (
            <ImageBackground resizeMode={'cover'} source={require('../resources/images/wallpaper2.jpg')} style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.view1}>
                        <Icon style={{ padding: 10 }} name={"md-mail"} size={24}></Icon>
                        <TextInput underlineColorAndroid={""} style={styles.textinput} placeholder={"Email"}></TextInput>
                    </View>

                    <View style={styles.view1}>
                        <Icon style={{ padding: 13 }} name={"md-lock"} size={24}></Icon>
                        <TextInput underlineColorAndroid={""} style={styles.textinput} placeholder={"Password"}></TextInput>
                    </View>

                    <View style={{ width: "100%", margin: 5, marginTop: 10, alignItems: "center" }}>

                        <TouchableOpacity style={styles.touch}
                        // onPress={() => this.props.navigation.navigate('Menu')}> 
                        >
                            <Text style={{ fontSize: 23, color: "#fff", fontFamily: 'Roboto', }}> SIGN UP </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <TouchableOpacity style={{ marginTop: 14 }}>
                    <Text style={{ color: "#fff", fontSize: 17, backgroundColor: '#89b6f3ed' }}> Need Help? </Text>
                </TouchableOpacity> */}
            </ImageBackground>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    textinput: {
        width: "80%",
    },

    view1: {
        flexDirection: "row",
        margin: 5,
    },

    touch: {
        borderWidth: 1,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#8a0868",
        borderColor: "#8a0868"

    },

    box: {
        borderWidth: 1,
        margin: 10,
        height: screen_height / 4,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "#eceff3ed",
        borderColor: "#f3e5e566"

    }
});

//make this component available to the app
export default MyClass;
