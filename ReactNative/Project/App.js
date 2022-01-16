import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/components/navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
