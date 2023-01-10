import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

import colors from '../config/colors';

function ExistingUserScreen({navigation}){

    function changeScreenToDisplay(){
        navigation.navigate("DisplayDataScreen")
    }
    function changeScreenToEdit(){
        navigation.navigate("SelectCalendarDate")
    }

    return(
        <View style = {styles.background}>
            <Image style = {styles.logo} source={require("../assets/background_icon.jpg")}></Image>
            <Text style = {styles.title}>Welcome back</Text>
            <Text style={styles.text}></Text>
            <TouchableOpacity title="ViewD" style={styles.button2} onPress={changeScreenToDisplay}><Text style={styles.buttonText2}>View Days</Text></TouchableOpacity>
            <TouchableOpacity title="EditD" style={styles.button1} onPress={changeScreenToEdit}><Text style={styles.buttonText1}>Edit Date</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:'rgba(255,255,255,1)',
        justifyContent: 'center',
        alignItems: 'center',
  },
    logo: {
      width: 100,
      height: 100,
  },
  button1:{
    width: '80%',
    height: 85,
    backgroundColor: colors.primary,
    borderRadius: 15,
    padding: 15,
    margin: 20
    },
  button2:{
    width: '80%',
    height: 85,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    padding: 15,
    margin: 20,
    },
  buttonText1:{
    color: colors.white,
    fontSize: 26,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
    },
  buttonText2:{
    color: colors.black,
    fontSize: 26,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
    },
    title:{
        fontSize: 21,
        fontWeight: "bold",
        marginBottom: 40,
    },
    text:{
        top: 10,
        fontSize: 16,
        textAlign: 'center'
    },
});
export default ExistingUserScreen;