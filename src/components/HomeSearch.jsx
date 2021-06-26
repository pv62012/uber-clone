import React from 'react'
import { Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles/HomeSearchStyle'
function HomeSearch() {
    return (
      <View>
        <View style={styles.container}>
          <Text>Where To? </Text>
          <View style={styles.innner_conteiner}>
            <AntDesign name="clockcircle" size={15} style={styles.icons} />
            <Text>Now</Text>
            <AntDesign name="caretdown" size={15} style={styles.icons} />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <AntDesign
              name="clockcircle"
              size={15}
              style={styles.iconsBottom}
            />
          </View>

          <Text>Spin NightClub</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <AntDesign
              name="home"
              size={15}
              style={styles.iconsBottom}
            />
          </View>

          <Text>Spin NightClub</Text>
        </View>

        
      </View>
    );
}

export default HomeSearch
