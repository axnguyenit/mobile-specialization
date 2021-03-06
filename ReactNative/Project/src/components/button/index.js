import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = (props) => {
  const { bg, color, label, onPress, disabled } = props;
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: bg }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.label, { color: color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
