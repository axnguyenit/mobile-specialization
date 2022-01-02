import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';

import styles from './tabsStyles';
import Icon, { Icons } from '../../icons';
import {Records, AddRecord, RecordDetails} from "../../records"

const tabs = [
    {
        route: 'Home',
        label: 'Home',
        type: Icons.Feather,
        icon: 'home',
        component: Records 
    },
    { 
        route: 'RecordDetails',
        label: 'Details',
        type: Icons.MaterialCommunityIcons,
        icon: 'details',
        component: RecordDetails 
    },
    { 
        route: 'AddRecord',
        label: 'Add',
        type: Icons.Feather,
        icon: 'plus-square',
        component: AddRecord
    },
    { 
        route: 'Like',
        label: 'Like',
        type: Icons.Feather,
        icon: 'heart',
        component: Records 
    },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, 1: { scale: 1, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }
const circle1 = { 0: { scale: 0 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate(animate1);
            circleRef.current.animate(circle1);
            textRef.current.transitionTo({ scale: 1 });
        } else {
            viewRef.current.animate(animate2);
            circleRef.current.animate(circle2);
            textRef.current.transitionTo({ scale: 0 });
        }
    }, [focused])

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}
        >
            <Animatable.View
                ref={viewRef}
                duration={1000}
                style={styles.container}
            >
                <View style={styles.btn}>
                    <Animatable.View
                        ref={circleRef}
                        style={styles.circle}
                    />
                    <Icon type={item.type} name={item.icon} color={focused ? "#fff" : "#D00C04"} />
                </View>
                <Animatable.Text
                    ref={textRef}
                    style={styles.text}
                >
                    {item.label}
                </Animatable.Text>
            </Animatable.View>
        </TouchableOpacity>
    )
}

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                headerTitleAlign: "center"
            }}
        >
            {tabs.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                        tabBarShowLabel: false,
                        tabBarButton: (props) => <TabButton {...props} item={item} />
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

export default TabsNavigator