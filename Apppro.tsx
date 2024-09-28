import React from 'react'
import { View, Text, useColorScheme, StyleSheet } from 'react-native'
const Apppro = () => {
    const isDarkMode = useColorScheme() === "light";
  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello World</Text>
    </View>
  )
}
const styles= StyleSheet.create({
    whiteText:{
        color: 'white',
    },
    blackText:{
        color: 'black',
    },
    darkContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    lightContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})

export default Apppro