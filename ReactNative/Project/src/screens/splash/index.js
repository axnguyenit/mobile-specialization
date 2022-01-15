import React from 'react';
import { View, Image } from 'react-native';
import IconSuccess from '../../assets/icons/auth/success.png';
import styles from './styles';

function Splash(props) {
  return (
    <View style={styles.container}>
      <Image source={IconSuccess} style={styles.icon} />
    </View>
  );
}

export default Splash;
