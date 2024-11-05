import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function SearchScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Recherche</Text>
    </View>
  )
}

export default SearchScreen

// Styles
const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
  