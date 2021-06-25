import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeScreen from './src/screens/HomeScreen';
export default function App() {
  return (
    <View >
      <StatusBar barStyle="dark-content"/>
      <HomeScreen/>
    </View>
  );
}

