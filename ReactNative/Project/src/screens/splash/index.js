import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

function Splash(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.icon} size='large' color='#DB147F' />
    </View>
  );
}

export default Splash;
