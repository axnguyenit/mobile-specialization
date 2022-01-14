import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Register, Login, ForgotPassword } from './src/screens/account'
import { Centres, CentreDetails } from './src/screens/centres'
import StackNavigator from './src/components/navigation/stack'

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}
