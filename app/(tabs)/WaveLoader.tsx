import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Importation du hook de navigation

const WaveLoader = () => {
  const [loading, setLoading] = useState(true);
  const waveAnimation = new Animated.Value(0);
  const navigation = useNavigation();  // Récupérer l'instance de navigation

  useEffect(() => {
    // Animation des ondes
    Animated.loop(
      Animated.sequence([
        Animated.timing(waveAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(waveAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Arrêter le loader après 2 secondes et naviguer vers OnboardingScreen
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('HomeScreen');  // Naviguer vers l'écran HomeScreen
    }, 2000);  // Temps de chargement de 2 secondes
  }, [loading, navigation]);

  return (
    <View style={styles.container}>
      {loading && (
        <Animated.View
          style={{
            transform: [
              { 
                translateX: waveAnimation.interpolate({ 
                  inputRange: [0, 1], 
                  outputRange: [0, 200] 
                })
              },
            ],
          }}
        >
          <View style={styles.wave} />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  wave: {
    width: 100,
    height: 10,
    backgroundColor: '#e3097e',
    margin: 10,
  },
});

export default WaveLoader;
