import React from "react";
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { CentreDetails } from "../../../screens/centres";
// import { useSelector } from "react-redux";

// import { Login } from "../../account";
import TabsNavigator from "../tabs";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    // const auth = useSelector(state => state.auth)
    return (
        <Stack.Navigator
            screenOptions={{ 
                headerShown: false
            }}
            initialRouteName="Users"
        >
            {/* {
                auth.isUserLoggedIn ? 
                    <> */}
                        <Stack.Screen 
                            name="Records"
                            component={TabsNavigator}
                        />
                        <Stack.Screen 
                            name="CentreDetails"
                            component={CentreDetails}
                        />
                    {/* </>
                : <Stack.Screen 
                    name="Login"
                    component={Login}
                />
            } */}
        </Stack.Navigator>
    )
}

export default StackNavigator