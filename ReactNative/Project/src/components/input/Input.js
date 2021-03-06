import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Input = (props) => {
  const {
    value,
    onBlur,
    label,
    placeholder,
    keyboardType,
    secureTextEntry,
    onChangeText,
  } = props;
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText ? (text) => onChangeText(text) : () => {}}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
      />
    </View>
  );
};

export default Input;
