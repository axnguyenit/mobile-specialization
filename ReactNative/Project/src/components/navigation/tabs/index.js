import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, View, Image, Text } from 'react-native'

import styles from './styles'
import Dashboard from '../../../screens/dashboard'
import { Centres } from '../../../screens/centres'
import IconHome from '../../../assets/images/ic-house.png'
import IconCentre from '../../../assets/images/ic-centre-tab.png'
import IconApplication from '../../../assets/images/ic-file.png'
import IconMail from '../../../assets/images/ic-envelop.png'
import IconMore from '../../../assets/images/ic-more.png'
import IconHomeFill from '../../../assets/images/ic-house-fill.png'
import IconCentreFill from '../../../assets/images/ic-centre-fill.png'
import IconApplicationFill from '../../../assets/images/ic-file-fill.png'
import IconMailFill from '../../../assets/images/ic-envelop-fill.png'
import IconMoreFill from '../../../assets/images/ic-more-fill.png'
import { MoreScreen } from '../../../screens/more'

const tabs = [
  {
    route: 'Dashboard',
    label: 'Dashboard',
    icon: IconHome,
    iconFill: IconHomeFill,
    component: Dashboard
  },
  {
    route: 'Centres',
    label: 'Centres',
    icon: IconCentre,
    iconFill: IconCentreFill,
    component: Centres
  },
  // {
  //     route: 'Applications',
  //     label: 'Applications',
  //     icon: IconApplication,
  //     iconFill: IconApplicationFill,
  //     component: Centres
  // },
  // {
  //     route: 'Mailbox',
  //     label: 'Mailbox',
  //     icon: IconMail,
  //     iconFill: IconMailFill,
  //     component: Centres
  // },
  {
    route: 'MoreScreen',
    label: 'MoreScreen',
    icon: IconMore,
    iconFill: IconMoreFill,
    component: MoreScreen
  }
]

const Tab = createBottomTabNavigator()

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props
  const focused = accessibilityState.selected
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
  )
}

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        headerTitleAlign: 'center'
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
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default TabsNavigator
