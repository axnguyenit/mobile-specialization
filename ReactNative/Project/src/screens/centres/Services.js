import React from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './CentreDetailsStyles';
import { ServiceItem } from '../../components/centres';
import useFireStore from '../../hooks/useFireStore';
import { centreDetails } from '../../firebase/services';

function Services(props) {
  const route = useRoute();
  const serviceList = useFireStore(
    centreDetails.services,
    route.params.centreId
  );

  return (
    <ScrollView style={styles.tabView}>
      {serviceList &&
        serviceList.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
    </ScrollView>
  );
}

export default Services;
