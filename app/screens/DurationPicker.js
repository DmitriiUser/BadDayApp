import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import colors from '../config/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

class DurationPicker extends Component {

    constructor(){
        super()
        this.state={
            PickerValue: "28",
            ready: false
        }
    }

    changeScreens=()=>{
        var data = this.state.PickerValue
        this.saveDate()
        this.state.ready = true
        this.forceUpdate()
    }

    saveDate(){
        let user = this.state.PickerValue;
        AsyncStorage.setItem("occurency", user)
    }

    render(){
        const {navigate} = this.props.navigation;
        const { PickerValue, ready } = this.state;
        if(ready == true){
            navigate('DisplayDataScreen')
          }
        return (
            <View style = {styles.background}>
                <Image style = {styles.logo} source={require("../assets/background_icon.jpg")}></Image>
                
                <View style={styles.header}>
                    <Text style={styles.text}>Select how often your bad day Occurs</Text>
                    <Picker
                        selectedValue={this.state.PickerValue}
                        style={styles.picker}
                        onValueChange={(itemValue,itemIndex)=> this.setState({PickerValue:itemValue})}
                        >
                        <Picker.Item label='28' value="28"></Picker.Item>
                        <Picker.Item label="21" value="21" />
                        <Picker.Item label="22" value="22" />
                        <Picker.Item label="23" value="23" />
                        <Picker.Item label="24" value="24" />
                        <Picker.Item label="25" value="25" />
                        <Picker.Item label="26" value="26" />
                        <Picker.Item label="27" value="27" />
                        <Picker.Item label="29" value="29" />
                        <Picker.Item label="30" value="30" />
                    </Picker>
                    <Text style={styles.label}>For most people it occurs every 28 days</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={this.changeScreens}><Text style={styles.buttonText}>Save</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: 'center',
        backgroundColor:'rgba(255,255,255,1)',
    },
    header:{
        bottom: 40,
    },
    calendar:{
        margin: 0,
    },
    button:{
        backgroundColor: colors.secondary,
        width: 300,
        height: 40,
        borderRadius: 15,
    },
    logo: {
        width: 200,
        height: 200,
    },
    picker:{
        height: 100,
        fontSize: 18,
        textAlign: 'center',
    },
    buttonText:{
        color: colors.white,
        fontSize: 24,
        fontWeight: '400',
        textAlign: 'center',
    },
    text:{
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'center'
    },
    textContent:{
        flex: 0.4,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    label:{
        fontSize: 12,
        color: colors.grey,
        textAlign: 'center',
    }
})

export default DurationPicker;