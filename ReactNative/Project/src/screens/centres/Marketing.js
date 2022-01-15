import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import styles from './CentreDetailsStyles';
import { MarketingItem } from '../../components/marketing';
import marketing from '../../fake-db/centre-details/marketing';
import { MarketingInfo } from '../../components/bottom-sheet';

function Marketing(props) {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');

  const toggleVisibleBottomSheet = (id = -1) => {
    if (id !== -1) {
      const item = marketing.find((item) => item.id === id);
      if (item) setTitle(item.label);
    }
    setVisible(!visible);
  };

  return (
    <>
      <ScrollView style={styles.marketing}>
        {marketing &&
          marketing.map((item, i) => (
            <MarketingItem
              key={i}
              label={item.label}
              price={item.price}
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
          <MarketingInfo title={title} onPress={toggleVisibleBottomSheet} />
        </BottomSheet>
      </View>
    </>
  );
}

export default Marketing;
