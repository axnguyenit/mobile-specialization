import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './CentreDetailsStyles';
import { ServiceItem } from '../../components/centres';
import useFireStore from '../../hooks/useFireStore';
import { centreDetails } from '../../firebase/services';

function Services(props) {
  const route = useRoute();
  const navigation = useNavigation();
  const serviceList = useFireStore(
    centreDetails.services,
    route.params.centreId
  );

  return (
    <ScrollView style={styles.tabView} showsVerticalScrollIndicator={false}>
      {serviceList.length > 0 &&
        serviceList.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}

      {serviceList.length < 5 && (
        <View>
          <TouchableOpacity
            style={styles.addService}
            onPress={() =>
              navigation.navigate('AddService', {
                centreId: route.params.centreId,
              })
            }
          >
            <Text style={styles.white}>Add new Service</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

export default Services;
