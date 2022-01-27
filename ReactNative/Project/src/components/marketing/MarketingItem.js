import React from 'react';
import { View, TouchableOpacity, Text, Switch, Image } from 'react-native';
import styles from './styles';
import IconInfo from '../../assets/icons/marketing/ic-info-fill.png';
import { centreDetails, centresStore } from '../../firebase/services';

function MarketingItem(props) {
  const { marketing, onPress } = props;

  const handleActiveMarketing = async () => {
    await centresStore.updateDoc(centreDetails.marketing, marketing.id, {
      status: !marketing.status,
    });
  };

  return (
    <View style={styles.marketingItem}>
      <View style={styles.marketingItemLeft}>
        <View style={styles.marketingItemHeader}>
          <Text style={styles.marketingItemTitle}>{marketing.name}</Text>
          <TouchableOpacity onPress={onPress}>
            <Image style={styles.marketingItemIconInfo} source={IconInfo} />
          </TouchableOpacity>
        </View>
        <View style={styles.marketingItemDesc}>
          <Text style={styles.marketingItemPrice}>
            ${marketing.price.toFixed(2)}
          </Text>
          <Text>&nbsp;/&nbsp;per month</Text>
        </View>
      </View>
      <Switch
        style={styles.marketingItemSwitch}
        trackColor={{ false: '#BEBEBE', true: '#DB147F' }}
        thumbColor={marketing.status ? '#E5E5E5' : '#f4f3f4'}
        ios_backgroundColor='#DB147F'
        onValueChange={handleActiveMarketing}
        value={marketing.status}
      />
    </View>
  );
}

export default MarketingItem;
