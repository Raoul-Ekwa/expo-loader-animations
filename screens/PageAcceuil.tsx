import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function PageAcceuil(){
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Acceuil</Text>
    </View>
  )
}

export default PageAcceuil

// Styles
const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eb529a'
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color:'white'
    },
  });
  