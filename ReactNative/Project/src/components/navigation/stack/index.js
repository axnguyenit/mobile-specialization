import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

import TabsNavigator from '../tabs'
import { CentreDetails } from '../../../screens/centres'
import { Login, Register } from '../../../screens/account'
import { MoreScreen } from '../../../screens/more'
import { MoreItem } from '../../../screens/more/MoreItem'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  const navigation = useNavigation()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigation.navigate('Home')
      else navigation.navigate('Login')
    })
    return unsubscribe
  }, [])
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={TabsNavigator} />
      <Stack.Screen name="CentreDetails" component={CentreDetails} />
      <Stack.Screen name="MoreScreen" component={MoreScreen} />
      <Stack.Screen name="MoreItem" component={MoreItem} />
    </Stack.Navigator>
  )
}

export default StackNavigator
