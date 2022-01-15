import React from 'react';
import { View, Text, Switch, Image } from 'react-native';
import styles from './styles/FeatureItemStyles';

function FeatureItem(props) {
  const { iconImg, label, onValueChange, status } = props;
  return (
    <View style={styles.featureItem}>
      <View style={styles.row}>
        <Image style={styles.featureIcon} source={iconImg} />
        <Text style={styles.featureTitle}>{label}</Text>
      </View>
      <Switch
        style={styles.featureSwitch}
        trackColor={{ false: '#BEBEBE', true: '#DB147F' }}
        thumbColor={status ? '#E5E5E5' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => onValueChange}
        value={status}
      />
    </View>
  );
}

export default FeatureItem;
