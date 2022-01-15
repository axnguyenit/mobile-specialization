import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import styles from './CentreDetailsStyles';
import SummaryImg from '../../assets/images/summary/summary-img.png';
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

function Summary(props) {
  const [expanded, setExpanded] = useState(false);
  const [rotateX, setRotateX] = useState('180deg');

  const handleCollapse = () => {
    setExpanded(!expanded);
    rotateX === '0deg' ? setRotateX('180deg') : setRotateX('0deg');
  };
  return (
    <ScrollView style={styles.tabView}>
      <View style={styles.tabViewContent}>
        <TouchableOpacity
          onPress={handleCollapse}
          style={styles.summaryCollapse}
        >
          <Image source={SummaryImg} style={styles.summaryImg} />
          <View style={styles.summaryName}>
            <Text style={styles.summaryCentre}>
              Goodstart Early Learning ABC
            </Text>
            <Text style={styles.summaryStatus}>• Active</Text>
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
                  221 Ferrars Street, South Melbourne, VIC 3205
                </Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconCentre} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>
                  Goodstart Early Learning
                </Text>
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
                <Text style={styles.summaryGeneralText}>01 January 2012</Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconKindi} style={styles.summaryGeneralIcon} />
                <Text
                  style={styles.summaryGeneralText}
                  style={[
                    styles.summaryType,
                    { backgroundColor: '#E9F4FF', color: '#32A4FC' },
                  ]}
                >
                  KindiCare Basic
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.summaryHeading}>Contact Info</Text>
              <View style={styles.summaryGeneral}>
                <Image source={IconPhone} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>1300 001 154</Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconMail} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>
                  kha.nguyen01.it@gmail.com
                </Text>
              </View>
              <View style={styles.summaryGeneral}>
                <Image source={IconArrow} style={styles.summaryGeneralIcon} />
                <Text style={styles.summaryGeneralText}>
                  https://movies-ax.netlify.app/
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>

      {enquiries && <SummaryItem title="Enquiries Summary" items={enquiries} />}
      {applications && (
        <SummaryItem title="Applications Summary" items={applications} />
      )}
      <CentrePhotos />
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
        <Photos />
      </View>
    </View>
  );
}

export default Summary;
