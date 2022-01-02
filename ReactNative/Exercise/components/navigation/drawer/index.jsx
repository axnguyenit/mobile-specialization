import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from "../../custom/customDrawer";
import { Profile, Login } from "../../account";
import Icon, { Icons } from '../../icons';
import TabsNavigator from "../tabs";
import Posts from "../../posts";
import Jobs from "../../jobs";
import Calc from "../../calc";

const Drawer = createDrawerNavigator();

const drawers = [
    {
        route: 'Home',
        label: 'Home',
        type: Icons.AntDesign,
        icon: 'home',
        sizeIcon: 22,
        component: Profile
    },
    { 
        route: 'Profile',
        label: 'Profile',
        type: Icons.FontAwesome,
        icon: 'user-o',
        sizeIcon: 25 ,
        component: Profile
    },
    {
        route: 'Posts',
        label: 'Posts',
        type: Icons.MaterialCommunityIcons,
        icon: 'post-outline',
        sizeIcon: 22,
        component: Posts
    },
    {
        route: 'Jobs',
        label: 'Jobs',
        type: Icons.MaterialIcons,
        icon: 'work-outline',
        sizeIcon: 22,
        component: Jobs
    },
    {
        route: 'Caculator',
        label: 'Caculator',
        type: Icons.Ionicons,
        icon: 'calculator-outline',
        sizeIcon: 22,
        component: Calc
    },
    {
        route: 'Records',
        label: 'Records',
        type: Icons.Entypo,
        icon: 'list',
        sizeIcon: 22,
        component: TabsNavigator
    },
]

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#D00C04',
                drawerActiveTintColor: '#fff',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#000',
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontSize: 15,
                },
                headerTitleAlign: "center"
            }}
        >
            {
                drawers && drawers.map((item, index) => (
                    <Drawer.Screen 
                        key={index}
                        name={item.route}
                        component={item.component} 
                        options={{ drawerIcon: config =>
                            <Icon
                                type={item.type}
                                name={item.icon}
                                color="#999"
                                size={item.sizeIcon}
                            />
                        }}
                    />
                ))
            }
        </Drawer.Navigator>
    )
}

export default DrawerNavigator