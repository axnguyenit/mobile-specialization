import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, Image, Text } from 'react-native';

import styles from './styles';
import Dashboard from '../../../screens/dashboard';
import { Centres } from '../../../screens/centres';
import { MoreScreen } from '../../../screens/more';
import IconHome from '../../../assets/icons/navigation/ic-house.png';
import IconCentre from '../../../assets/icons/navigation/ic-centre.png';
import IconMore from '../../../assets/icons/navigation/ic-more.png';
import IconHomeFill from '../../../assets/icons/navigation/ic-house-fill.png';
import IconCentreFill from '../../../assets/icons/navigation/ic-centre-fill.png';
import IconMoreFill from '../../../assets/icons/navigation/ic-more-fill.png';

const tabs = [
  {
    route: 'Dashboard',
    label: 'Dashboard',
    icon: IconHome,
    iconFill: IconHomeFill,
    component: Dashboard,
  },
  {
    route: 'Centres',
    label: 'Centres',
    icon: IconCentre,
    iconFill: IconCentreFill,
    component: Centres,
  },
  {
    route: 'More',
    label: 'More',
    icon: IconMore,
    iconFill: IconMoreFill,
    component: MoreScreen,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.btn}>
          <Image
            source={focused ? item.iconFill : item.icon}
            style={styles.img}
          />
        </View>
        <Text style={[styles.text, { color: focused ? '#DB147F' : '#ACB2B8' }]}>
          {item.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        headerTitleAlign: 'center',
      }}
    >
      {tabs.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabsNavigator;
