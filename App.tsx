// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/Authentication/onboarding';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return <AuthenticationStack.Navigator>
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>

}
export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}