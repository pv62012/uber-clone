import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { CovidMessage } from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';

function HomeScreen() {
    return (
      <View >
           <HomeMap/>
            
        <CovidMessage />
        <HomeSearch/>
      </View>
    );
}

export default HomeScreen
