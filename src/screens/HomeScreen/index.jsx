import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { CovidMessage } from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';

function HomeScreen() {
    return (
      <View >
           <HomeMap/>
            
            <CovidMessage/>
      </View>
    );
}

export default HomeScreen
