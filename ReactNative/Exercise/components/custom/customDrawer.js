import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import styles from './drawerStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}>
        <View
          style={styles.heading}>
          <View style={styles.logo}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logoImg}
            />
          
            <Text style={styles.logoText}>
              acciona
            </Text>
            <Text style={styles.logoBio}>
              LinkedSite
            </Text>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props}/>
        </View>
      </DrawerContentScrollView>
      <View>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15, backgroundColor: "#D00C04",}}>
          <View style={{paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', }}>
            <Ionicons name="exit-outline" size={22} style={{ color: "#fff" }} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 15,
                color: "#fff"
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
