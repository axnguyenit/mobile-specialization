import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { useRoute } from '@react-navigation/native';

import styles from './CentreDetailsStyles';
import { MarketingItem } from '../../components/marketing';
import { MarketingInfo } from '../../components/bottom-sheet';
import useFireStore from '../../hooks/useFireStore';
import { centreDetails } from '../../firebase/services';

function Marketing(props) {
  const route = useRoute();
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
      <ScrollView style={styles.marketing}>
        {marketingList &&
          marketingList.map((item) => (
            <MarketingItem
              key={item.id}
              label={item.name}
              price={item.price}
              status={item.status}
              onPress={() => toggleVisibleBottomSheet(item.id)}
            />
          ))}
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
