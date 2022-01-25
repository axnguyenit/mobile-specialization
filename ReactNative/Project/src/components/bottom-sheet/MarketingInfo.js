import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon, { Icons } from '../icons';
import styles from './styles';

const MarketingInfo = (props) => {
  const { onPress, marketing } = props;
  return (
    <View style={styles.viewMarketingInfo}>
      <View style={styles.header}>
        <Text style={styles.heading}>{marketing.name}</Text>
        <TouchableOpacity style={styles.closeMarketingInfo} onPress={onPress}>
          <Icon type={Icons.Ionicons} name='close' color='#2D1F21' size={24} />
        </TouchableOpacity>
      </View>

      <Text style={styles.descMarketingInfo}>{marketing.info}</Text>
    </View>
  );
};
export default MarketingInfo;
