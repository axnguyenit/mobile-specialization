import React from 'react';
import { View, TouchableOpacity, Text, Switch, Image } from 'react-native';
import styles from './styles';
import IconInfo from '../../assets/icons/marketing/ic-info-fill.png';

function MarketingItem(props) {
  const { label, price, onValueChange, status, onPress } = props;
  return (
    <View style={styles.marketingItem}>
      <View style={styles.marketingItemLeft}>
        <View style={styles.marketingItemHeader}>
          <Text style={styles.marketingItemTitle}>{label}</Text>
          <TouchableOpacity onPress={onPress}>
            <Image style={styles.marketingItemIconInfo} source={IconInfo} />
          </TouchableOpacity>
        </View>
        <View style={styles.marketingItemDesc}>
          <Text style={styles.marketingItemPrice}>${price}</Text>
          <Text>&nbsp;/&nbsp;per month</Text>
        </View>
      </View>
      <Switch
        style={styles.marketingItemSwitch}
        trackColor={{ false: '#BEBEBE', true: '#DB147F' }}
        thumbColor={status ? '#E5E5E5' : '#f4f3f4'}
        ios_backgroundColor="#DB147F"
        onValueChange={() => onValueChange}
        value={status}
      />
    </View>
  );
}

export default MarketingItem;
