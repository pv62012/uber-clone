import { View, Text } from 'react-native'
import React from "react";
import styles from './styles/CovidMessageStyles'

export const CovidMessage = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if neccessary</Text>
            <Text style={styles.text}>hello this is something u dont know mind your own buisness </Text>
        </View>
    )
}
