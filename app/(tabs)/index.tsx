import React from 'react';
import WaveHomeLoader from '@/components/WaveHomeLoader';
import { SafeAreaView } from 'react-native';


const App = () => {
  return (
      <WaveHomeLoader /> //il appelle le HomeScreens qui lui appele la page d'acceuil
  );
};

export default App;
