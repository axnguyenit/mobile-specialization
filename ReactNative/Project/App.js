import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/components/navigation/stack';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
