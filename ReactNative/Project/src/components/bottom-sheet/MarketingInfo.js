import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon, { Icons } from '../icons';
import styles from './styles';

const MarketingInfo = (props) => {
  const { onPress, title } = props;
  return (
    <View style={styles.viewMarketingInfo}>
      <View style={styles.header}>
        <Text style={styles.heading}>{title}</Text>
        <TouchableOpacity style={styles.closeMarketingInfo} onPress={onPress}>
          <Icon type={Icons.Ionicons} name="close" color="#2D1F21" size={24} />
        </TouchableOpacity>
      </View>

      <Text style={styles.descMarketingInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo erat
        tempor scelerisque sit adipiscing velit. Commodo erat tempor scelerisque
        sit adipiscing velit.
      </Text>
    </View>
  );
};
export default MarketingInfo;
