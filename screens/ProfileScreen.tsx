import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function ProfileScreen(){
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Profile</Text>
    </View>
  )
}

export default ProfileScreen

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
  