import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './CentreDetailsStyles';
import { FeatureItem } from '../../components/centres';
import features from '../../fake-db/centre-details/features';
function Features(props) {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView style={styles.tabView}>
      <View style={styles.features}>
        {features &&
          features.map((item, i) => (
            <FeatureItem
              key={i}
              iconImg={item.icon}
              label={item.label}
              status
              onValueChange
            />
          ))}
      </View>
    </ScrollView>
  );
}

export default Features;
