import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import styles from './styles';
import IconSearch from '../../assets/images/ic-search.png';

export const InputSearch = (props) => {
  const { placeholder, onPress } = props;
  return (
    <View style={styles.inputSearch}>
      <Image source={IconSearch} style={styles.img} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onPress={onPress}
      />
    </View>
  );
};

export default InputSearch;
