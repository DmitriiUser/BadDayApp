import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'

import colors from '../config/colors';

function StartScreen({navigation}) {

    function ToNewUserScreen(){
        navigation.navigate('SelectCalendarDate')
    }
    function ToExistingUserScreen(){
        navigation.navigate("ExistingUserScreen")
    }

  return (
    <View 
        style = {styles.backGround}
    >
        <Image
        style = {styles.icon}
        source={require("../assets/background_icon.jpg")}
        >
        </Image>
        <TouchableHighlight style={styles.newUser} onPress={ToNewUserScreen} underlayColor='white'><Text style={styles.primaryStyle}>New User</Text></TouchableHighlight>
        <TouchableHighlight style={styles.existingUser} onPress={ToExistingUserScreen} underlayColor='white'><Text style={styles.secondaryStyle}>Existing User</Text></TouchableHighlight>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    backGround:{
        flex: 1,
        backgroundColor:'rgba(255,255,255)',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },

    icon: {
        width: 175,
        height: 175,
    },

    newUser: {
        width: '80%',
        height: 85,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        padding: 15,
    },

    existingUser: {
        width: '80%',
        height: 85,
        backgroundColor: colors.primary,
        borderRadius: 15,
        padding: 15,
    },

    primaryStyle:{
        fontSize: 28,
        textAlign: 'center',
        color: colors.black,
    },

    secondaryStyle:{
        fontSize: 28,
        textAlign: 'center',
        color: colors.white,
    },
})