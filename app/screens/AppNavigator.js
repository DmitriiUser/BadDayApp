import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './StartScreen';
import DisplayDataScreen from './DisplayDataScreen';
import SelectCalendarDate from './SelectCalendarDate';
import DurationPicker from './DurationPicker';
import ExistingUserScreen from './ExistingUserScreen';

const {Navigator, Screen} = createNativeStackNavigator();

function AppNavigator() {
    return (
      <NavigationContainer>
        <Navigator screenOptions={{
            headerShown: false}}>
          <Screen name="Home" component={StartScreen} />
          <Screen name="SelectCalendarDate" component={SelectCalendarDate}></Screen>
          <Screen name="DurationPicker" component={DurationPicker}></Screen>
          <Screen name="DisplayDataScreen" component={DisplayDataScreen} />
          <Screen name="ExistingUserScreen" component={ExistingUserScreen}></Screen>
        </Navigator>
      </NavigationContainer>
    );
}

export default AppNavigator;