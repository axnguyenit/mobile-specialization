import React from 'react';
import { ScrollView } from 'react-native';
import styles from './CentreDetailsStyles';
import services from '../../fake-db/centre-details/services';
import { ServiceItem } from '../../components/centres';

function Services(props) {
  return (
    <ScrollView style={styles.tabView}>
      {services &&
        services.map((item, i) => <ServiceItem key={i} item={item} />)}
    </ScrollView>
  );
}

export default Services;
