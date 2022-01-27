import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

import TabsNavigator from '../tabs';
import {
  CentreDetails,
  AddCentre,
  AddService,
  AddMarketing,
} from '../../../screens/centres';
import { Login, Register, ForgotPassword } from '../../../screens/account';
import { MoreScreen } from '../../../screens/more';
import { MoreItem } from '../../../screens/more/MoreItem';
import Splash from '../../../screens/splash';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigation.navigate('Home');
      else navigation.navigate('Login');
    });
    return unsubscribe;
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Login'
    >
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name='Home' component={TabsNavigator} />
      <Stack.Screen name='AddCentre' component={AddCentre} />
      <Stack.Screen name='AddService' component={AddService} />
      <Stack.Screen name='AddMarketing' component={AddMarketing} />
      <Stack.Screen name='CentreDetails' component={CentreDetails} />
      <Stack.Screen name='MoreScreen' component={MoreScreen} />
      <Stack.Screen name='MoreItem' component={MoreItem} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
