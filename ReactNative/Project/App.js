import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Register, Login, ForgotPassword } from './screens/account';
import { Centres, CentreDetails } from './screens/centres';
import StackNavigator from './components/navigation/stack';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}