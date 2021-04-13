import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './src/containers/navigation/TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
