import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WaveLoader from '../app/(tabs)/WaveLoader';  // Importation du loader
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const WaveHomeLoader = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="WaveLoader">
        <Stack.Screen
          name="WaveLoader"
          component={WaveLoader}  // Composant Loader
          options={{ headerShown: false }} // Masquer l'entête du navigateur
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}  // Composant Onboarding
          options={{ headerShown: false }} // Masquer l'entête du navigateur
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WaveHomeLoader;
