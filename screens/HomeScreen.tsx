import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import SearchScreen from './SearchScreen';
import SettingsScreen from './SettingsScreen';
import DiscoverScreen from './DiscoverScreen';
import PageAcceuil from './PageAcceuil';



// Importation des icônes
import { Ionicons } from '@expo/vector-icons';  // On peut simplement utiliser Ionicons pour les icônes

// Création des composants pour chaque écran

// Création de la Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            // Choisir l'icône en fonction de l'onglet
            let iconName;

            if (route.name === 'Accueil') {
              iconName = 'home';
            } else if (route.name === 'Recherche') {
              iconName = 'search';
            } else if (route.name === 'Paramètres') {
              iconName = 'settings';
            } else if (route.name === 'Découvrir') {
              iconName = 'compass';
            }

            // Utilisation d'Ionicons pour les icônes
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // Options pour la barre de navigation des onglets
          tabBarActiveTintColor: '#eb529a', // Couleur de l'icône active
          tabBarInactiveTintColor: '#2a0602',  // Couleur de l'icône inactive
          tabBarStyle: {
            display: 'flex',
          },
        })}
      >
        <Tab.Screen name="Accueil" component={PageAcceuil} options={{headerShown: false}}/>
        <Tab.Screen name="Recherche" component={SearchScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Paramètres" component={SettingsScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Découvrir" component={DiscoverScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
