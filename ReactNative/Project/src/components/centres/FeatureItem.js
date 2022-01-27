import React from 'react';
import { View, Text, Switch, Image } from 'react-native';
import { centreDetails, centresStore } from '../../firebase/services';
import styles from './styles/FeatureItemStyles';

function FeatureItem({ feature }) {
  const handleActiveFeature = async () => {
    await centresStore.updateDoc(centreDetails.features, feature.id, {
      status: !feature.status,
    });
  };

  return (
    <View style={styles.featureItem}>
      <View style={styles.row}>
        <Image style={styles.featureIcon} source={feature.icon} />
        <Text style={styles.featureTitle}>{feature.name}</Text>
      </View>
      <Switch
        style={styles.featureSwitch}
        trackColor={{ false: '#BEBEBE', true: '#DB147F' }}
        thumbColor={feature.status ? '#E5E5E5' : '#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={handleActiveFeature}
        value={feature.status}
      />
    </View>
  );
}

export default FeatureItem;
