import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function DiscoverScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Decouvrir</Text>
    </View>
  )
}

export default DiscoverScreen

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
  