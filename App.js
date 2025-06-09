import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import AccountDetailsScreen from './Screens/AccountDetailsScreen';
import ReadMeterScreen from './Screens/ReadMeterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Account Details" component={AccountDetailsScreen} />
        <Stack.Screen name="Read Meter" component={ReadMeterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
