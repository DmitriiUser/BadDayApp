import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, BackHandler, Alert} from 'react-native';

import colors from '../config/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

class DisplayDataScreen extends Component {

    //act as global variables so I can access them in the calendar
    state = {
        called: false,
        daysToAdd: "",
        selectedDate: "",
        dateArray1: [],
        dateArray2: [],
        dateArray3: [],
    }

    convertDate=(date, daysToAdd)=>{
        //formats the date differently
        splitedDate = date.split(" ")
        month = splitedDate[1]
        day = splitedDate[2]
        year = splitedDate[3]
        monthNumber = new Date(`${month} 1, 2022`).getMonth() + 1
        nextDate = new Date(`${monthNumber}/${day}/${year}`)
        return nextDate.setDate(nextDate.getDate() + daysToAdd)
    }

    convertOutput(date){
        //converts the output
        date = date.split(" ")
        month = date[1]
        year = date[3]
        day = date[2]
        return [day, month, year]
    }

    displayData = async() =>{
        //retrieve data:
        try{
            const valueDaysToAdd = await AsyncStorage.getItem('occurency')
            const selectedDateValue = await AsyncStorage.getItem('startDate')//Tue Nov 01 2022 time..

            if(valueDaysToAdd !== null){
                this.setState({daysToAdd: valueDaysToAdd})
                this.setState({selectedDate: selectedDateValue})
            }
        }
        catch(error){
        }
        //convert the retrieved format:
        let date1 = this.convertOutput((new Date(this.convertDate(this.state.selectedDate, parseInt(this.state.daysToAdd)))).toString())
        this.setState({dateArray1: [date1[0],date1[1],date1[2]]})
        let date2 = this.convertOutput((new Date(this.convertDate(this.state.selectedDate, parseInt(this.state.daysToAdd)*2))).toString())
        this.setState({dateArray2: [date2[0],date2[1],date2[2]]})
        let date3 = this.convertOutput((new Date(this.convertDate(this.state.selectedDate, parseInt(this.state.daysToAdd)*3))).toString())
        this.setState({dateArray3: [date3[0],date3[1],date3[2]]})
    }
    returnValue(){
        if(this.state.called == false){
            this.displayData()
            this.state.called = true;
        }
    }

    render(){
        const {navigate} = this.props.navigation;
        const test = 24;
        this.returnValue()

        return (
            <View style = {styles.background}>
                <Image style = {styles.logo} source={require("../assets/background_icon.jpg")}></Image>
                <Text style={styles.title}>Dates For Your Upcoming Bad Days</Text>

                <View>
                    <View style={styles.row}><View style={styles.roundRectangleDayMonth}><Text style={styles.text}>{this.state.dateArray1[0]}</Text></View><View style={styles.roundRectangleDayMonth}><Text style={styles.text}>{this.state.dateArray1[1]}</Text></View><View style={styles.roundRectangleYear}><Text style={styles.text}>{this.state.dateArray1[2]}</Text></View></View>
                    <View style={styles.daysLeft}></View>
                    <View style={styles.row}><View style={styles.roundRectangleDayMonth}><Text style={styles.text}>{this.state.dateArray2[0]}</Text></View><View style={styles.roundRectangleDayMonth}><Text style={styles.text}>{this.state.dateArray2[1]}</Text></View><View style={styles.roundRectangleYear}><Text style={styles.text}>{this.state.dateArray2[2]}</Text></View></View>
                    <View style={styles.daysLeft}></View>
                    <View style={styles.row}><View style={styles.roundRectangleDayMonth}><Text style={styles.text}>{this.state.dateArray3[0]}</Text></View><View style={styles.roundRectangleDayMonth}><Text style={styles.text}>{this.state.dateArray3[1]}</Text></View><View style={styles.roundRectangleYear}><Text style={styles.text}>{this.state.dateArray3[2]}</Text></View></View>
                    <View style={styles.daysLeft}></View>
                </View>

                <TouchableOpacity title="Exit"  onPress={()=> BackHandler.exitApp()} style={styles.button}><Text style={styles.buttonText}>Exit</Text></TouchableOpacity>
            </View>
        );
    }
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
        justifyContent: 'flex-end',
        margin: 25
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

    row:{
        flexDirection: 'row'
    },
    roundRectangleDayMonth:{
        width: 65,
        height: 50,
        backgroundColor: '#ebeff5',
        borderRadius: 10,
        margin: 8,
    },

    daysLeft:{
        backgroundColor: colors.primary,
        width: 245,
        height: 30,
        justifyContent: 'center', 
        alignSelf: 'center',
        borderRadius: 10, 
    },

    roundRectangleYear:{
        width: 75,
        height: 50,
        backgroundColor: '#ebeff5',
        borderRadius: 10,
        margin: 8,
    },
    button:{
        backgroundColor: colors.secondary,
        width: 175,
        height: 40,
        borderRadius: 15,
        marginTop: 100,
    },
    buttonText:{
        color: colors.white,
        fontSize: 22,
        fontWeight: '400',
        textAlign: 'center',
    },

})

export default DisplayDataScreen;