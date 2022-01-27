import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './CentreDetailsStyles';
import { HourItem } from '../../components/centres';

function Hours(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.tabView}>
        <HourItem title='Normal' />
        <HourItem title='School Term' />
        <HourItem title='School Holidays' />
      </View>
    </ScrollView>
  );
}

export default Hours;
