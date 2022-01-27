import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, ScrollView } from 'react-native';

import styles from './CentreDetailsStyles';
import useFireStore from '../../hooks/useFireStore';
import { centreDetails } from '../../firebase/services';

function CentreInformation(props) {
  const route = useRoute();

  const information = useFireStore(
    centreDetails.information,
    route.params.centreId
  );

  return (
    <ScrollView style={styles.tabView} showsVerticalScrollIndicator={false}>
      <View style={styles.tabViewContent}>
        <Text style={styles.infoTitle}>Centre Description</Text>
        <Text style={styles.lh20}>
          {information && information[0]?.description}
        </Text>
      </View>

      <View style={styles.tabViewContent}>
        <Text style={styles.infoTitle}>Additional Details</Text>
        <View>
          <View style={styles.infoDetails}>
            <Text style={styles.infoName}>Admin Email</Text>
            <Text style={styles.bold}>
              {information && information[0]?.adminEmail}
            </Text>
          </View>
          <View style={styles.infoDetails}>
            <Text style={styles.infoName}>Region</Text>
            <Text style={styles.bold}>
              {information && information[0]?.region}
            </Text>
          </View>
          <View style={styles.infoDetails}>
            <Text style={styles.infoName}>LGA</Text>
            <Text style={styles.bold}>
              {information && information[0]?.lga}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default CentreInformation;
