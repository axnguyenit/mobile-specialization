import React from "react";

import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaView, Image } from "react-native";

import StackNavigator from "./components/navigation/stack";
import DrawerNavigator from "./components/navigation/drawer";
import TabsNavigator from "./components/navigation/tabs";

import Calc from "./components/calc";
import Posts from "./components/posts";
import Jobs from "./components/jobs";
import { Profile, Login } from "./components/account";
import {Records} from "./components/records";


export default function App() {
  return (
    <>
    {/* <SafeAreaView> */}
      <NavigationContainer>
      {/* <Records /> */}
      {/* <TabsNavigator /> */}
      <StackNavigator />
    </NavigationContainer>
    {/* </SafeAreaView> */}
    </>
  );
}