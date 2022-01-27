import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './CentreDetailsStyles';
import { MarketingItem } from '../../components/marketing';
import { MarketingInfo } from '../../components/bottom-sheet';
import useFireStore from '../../hooks/useFireStore';
import { centreDetails } from '../../firebase/services';

function Marketing(props) {
  const route = useRoute();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [marketing, setMarketing] = useState('');
  const marketingList = useFireStore(
    centreDetails.marketing,
    route.params.centreId
  );

  const toggleVisibleBottomSheet = (id = -1) => {
    if (id !== -1) {
      const item = marketingList.find((item) => item.id === id);
      item && setMarketing(item);
    }
    setVisible(!visible);
  };

  return (
    <>
      <ScrollView style={styles.marketing} showsVerticalScrollIndicator={false}>
        {marketingList &&
          marketingList.map((marketing) => (
            <MarketingItem
              key={marketing.id}
              marketing={marketing}
              onPress={() => toggleVisibleBottomSheet(marketing.id)}
            />
          ))}
        <View>
          <TouchableOpacity
            style={styles.addService}
            onPress={() =>
              navigation.navigate('AddMarketing', {
                centreId: route.params.centreId,
              })
            }
          >
            <Text style={styles.white}>Add new Marketing</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.container}>
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleVisibleBottomSheet}
          onBackdropPress={toggleVisibleBottomSheet}
        >
          <MarketingInfo
            marketing={marketing}
            onPress={toggleVisibleBottomSheet}
          />
        </BottomSheet>
      </View>
    </>
  );
}

export default Marketing;
