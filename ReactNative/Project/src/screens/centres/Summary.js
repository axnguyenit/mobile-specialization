import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import styles from './CentreDetailsStyles';
import IconMap from '../../assets/icons/summary/ic-map.png';
import IconCentre from '../../assets/icons/summary/ic-centre.png';
import IconOutdoor from '../../assets/icons/summary/ic-outdoor.png';
import IconCalendar from '../../assets/icons/summary/ic-calendar-blank.png';
import IconKindi from '../../assets/icons/summary/ic-kindi.png';
import IconPhone from '../../assets/icons/summary/ic-phone.png';
import IconMail from '../../assets/icons/summary/ic-mail.png';
import IconArrow from '../../assets/icons/summary/ic-arrow.png';
import IconCaret from '../../assets/icons/summary/ic-caret.png';
import { SummaryItem, Photos } from '../../components/centres';
import { applications, enquiries } from '../../fake-db/centre-details/summary';
import useFireStore from '../../hooks/useFireStore';
import { centreDetails } from '../../firebase/services';

const typeCentre = {
  basic: 'basic',
  essential: 'essential',
  enterprise: 'enterprise',
  premium: 'premium',
};

function Summary(props) {
  const route = useRoute();
  const { centres } = useSelector((state) => state.centres);
  const centre =
    centres && centres.find((centre) => centre.id === route.params.centreId);
  const summary = useFireStore(centreDetails.summary, route.params.centreId);
  const information = useFireStore(
    centreDetails.information,
    route.params.centreId
  );

  const [expanded, setExpanded] = useState(false);
  const [rotateX, setRotateX] = useState('180deg');

  const handleCollapse = () => {
    setExpanded(!expanded);
    rotateX === '0deg' ? setRotateX('180deg') : setRotateX('0deg');
  };

  const handleTypeCentre = (type) => {
    let backgroundColor,
      color = '';

    switch (type) {
      case typeCentre.basic:
        backgroundColor = '#E9F4FF';
        color = '#32A4FC';
        break;
      case typeCentre.essential:
        backgroundColor = '#FFF4EC';
        color = '#FB8429';
        break;
      case typeCentre.enterprise:
        backgroundColor = '#EDF9F0';
        color = '#36BF57';
        break;
      case typeCentre.premium:
        backgroundColor = '#FFF0FB';
        color = '#DB147F';
        break;
      default:
        break;
    }

    return (
      <Text
        style={styles.summaryGeneralText}
        style={[
          styles.summaryType,
          { backgroundColor: backgroundColor, color: color },
        ]}
      >
        KindiCare {centre?.type}
      </Text>
    );
  };

  return (
    <ScrollView style={styles.tabView} showsVerticalScrollIndicator={false}>
      <View style={styles.tabViewContent}>
        <TouchableOpacity
          onPress={handleCollapse}
          style={styles.summaryCollapse}
        >
          <Image source={{ uri: centre?.img }} style={styles.summaryImg} />
          <View style={styles.summaryName}>
            <Text style={styles.summaryCentre}>{centre?.name}</Text>
            <Text
              style={{
                color: summary && summary[0]?.active ? '#36BF57' : '#DB147F',
              }}
            >
              {summary && summary[0]?.active ? '• Active' : 'Close'}
            </Text>
          </View>
          <Image
            style={[
              styles.summaryIconCollapse,
              {
                transform: [{ rotateX: rotateX }],
              },
            ]}
            source={IconCaret}
          />
        </TouchableOpacity>
        {expanded && (
          <View>
            <View style={styles.summaryExpanded}>
              <Text style={styles.summaryHeading}>General Information</Text>
              <View style={styles.summaryGeneral}>
                <Image source={IconMap} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>
                  {centre?.location}
                </Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconCentre} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>{centre?.name}</Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconOutdoor} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>Centre-based Care</Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image
                  source={IconCalendar}
                  style={styles.summaryGeneralIcon}
                />
                <Text style={styles.summaryGeneralText}>
                  {summary && summary[0]?.openDay.toDate().toLocaleDateString()}
                </Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconKindi} style={styles.summaryGeneralIcon} />
                {handleTypeCentre(centre?.type)}
              </View>
            </View>

            <View>
              <Text style={styles.summaryHeading}>Contact Info</Text>
              <View style={styles.summaryGeneral}>
                <Image source={IconPhone} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>
                  {summary && summary[0]?.phone}
                </Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconMail} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>
                  {information && information[0]?.adminEmail}
                </Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconArrow} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>
                  {summary && summary[0]?.website}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>

      {enquiries && <SummaryItem title='Enquiries Summary' items={enquiries} />}
      {applications && (
        <SummaryItem title='Applications Summary' items={applications} />
      )}
      {/* <CentrePhotos /> */}
    </ScrollView>
  );
}

function CentrePhotos(props) {
  return (
    <View>
      <View style={styles.tabViewContent}>
        <Text style={[styles.summaryHeading, styles.border]}>
          Centre Photos
        </Text>
        {/* <Photos /> */}
      </View>
    </View>
  );
}

export default Summary;
