import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Icon, { Icons } from '../icons';

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Icon type={Icons.AntDesign} name='arrowleft' color='#000' size={24} />
      </TouchableOpacity>

      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

export default Header;
