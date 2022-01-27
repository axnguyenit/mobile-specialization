import React from 'react';
import { View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './CentreDetailsStyles';
import { FeatureItem } from '../../components/centres';
import useFireStore from '../../hooks/useFireStore';
import { centreDetails } from '../../firebase/services';
import featuresIcon from '../../fake-db/centre-details/features';

function Features(props) {
  const route = useRoute();
  const featureList = useFireStore(
    centreDetails.features,
    route.params.centreId
  );
  featureList && featureList.sort((a, b) => a.stt - b.stt);
  featureList &&
    featureList.map((item, i) => (item.icon = featuresIcon[i].icon));

  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView style={styles.tabView} showsVerticalScrollIndicator={false}>
      <View style={styles.features}>
        {featureList &&
          featureList.length > 0 &&
          featureList.map((feature) => (
            <FeatureItem key={feature.id} feature={feature} />
          ))}
      </View>
    </ScrollView>
  );
}

export default Features;
