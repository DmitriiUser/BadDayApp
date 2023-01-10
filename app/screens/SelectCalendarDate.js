import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../config/colors';
/*

*/
class SelectCalendarDate extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      ready: false,
    };

    this.onDateChange = this.onDateChange.bind(this);//binding it
    this.changeScreens = this.changeScreens.bind(this)
  }

  //Just displays it in the console.log after the date is clicked on
  //e.g. set the variable here to "2022-10-31T12:00:00.000Z"

  //handles onChange
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    })
  }

  changeScreens(){
    this.setState({
      ready: true,
    })
    let badDayStart = this.state.selectedStartDate;
    //AsyncStorage.setItem("badDayStart", JSON.stringify(badDayStart));
    const startDate = badDayStart ? badDayStart.toString() : ''
    AsyncStorage.setItem("startDate", startDate)
  }

  render() {
    const { selectedStartDate, ready } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const {navigate} = this.props.navigation;
    const maxDate = new Date();
    if(ready == true && selectedStartDate !== null){
      navigate('DurationPicker')
    }


    return (
      <View style={styles.background}>
        <Image style = {styles.logo} source={require("../assets/logoTransparent.png")}></Image>

        <View style={styles.calendar}>
            <Text style={styles.text}>Select the Date when it started</Text>
            <CalendarPicker
            todayBackgroundColor="#cafcca"
            selectedDayColor={colors.primary}
            selectedDayTextColor="#000000"
            scaleFactor={375}
            onDateChange={this.onDateChange}//on change
            firstDay={1}
            maxDate={maxDate}
            previousTitle="Previous Month"
            nextTitle="Next Month"
            />         
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.changeScreens}><Text style={styles.textButton}>Continue</Text></TouchableOpacity>
        </View>
    </View>
    );
  }
}



//
const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      margin: 100,

  },
    logo: {
      width: 100,
      height: 100,
  },
  calendar:{
    margin: 20,
  },
  button:{
    backgroundColor: colors.secondary,
    width: 250,
    height: 50,
    borderRadius: 10,
    left: 0,
    bottom: 0,
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textButton:{
    color: colors.white,
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
  textContent:{
    flex: 0.4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

});

export default SelectCalendarDate;