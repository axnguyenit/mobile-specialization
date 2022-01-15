import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Button from '../button';
import IconSuccess from '../../assets/icons/auth/success.png';

function SuccessAlert(props) {
  const { email, onPress } = props;
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={IconSuccess} style={styles.icon} />
        <Text style={styles.heading}>Success</Text>
        <Text style={styles.text}>Reset link has been sent to </Text>
        <Text style={styles.text}>"{email}"</Text>
        <View style={styles.button}>
          <Button color="#fff" bg="#DB147F" label="OK" onPress={onPress} />
        </View>
      </View>
    </View>
  );
}

export default SuccessAlert;
