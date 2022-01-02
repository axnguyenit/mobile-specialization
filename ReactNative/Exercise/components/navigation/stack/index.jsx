import React from "react";
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import { Login } from "../../account";
import TabsNavigator from "../tabs";
import DrawerNavigator from "../drawer";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ 
                headerShown: false
            }}
            initialRouteName="Users"
        >
            <Stack.Screen 
                name="Login"
                component={Login}
            />
            <Stack.Screen 
                name="Records"
                component={TabsNavigator}
            />
            <Stack.Screen 
                name="Users"
                component={DrawerNavigator}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator