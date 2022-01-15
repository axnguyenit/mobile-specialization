import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import IconKindiCare from '../../assets/icons/ratings-reviews/ic-kindi-care.png';
import Icon, { Icons } from '../icons';

function KindiCareRating(props) {
  const [expanded, setExpanded] = useState(false);
  const [icon, setIcon] = useState('chevron-down');

  const handleCollapse = () => {
    setExpanded(!expanded);
    icon === 'chevron-up' ? setIcon('chevron-down') : setIcon('chevron-up');
  };
  return (
    <View style={styles.rating}>
      <TouchableOpacity onPress={handleCollapse} style={styles.ratingHeader}>
        <View style={styles.row}>
          {!expanded && (
            <Image source={IconKindiCare} style={styles.ratingHeaderImg} />
          )}
          <View style={styles.ratingHeaderTitle}>
            <Text style={styles.ratingHeaderTitle}>KindiCare Rating</Text>
            {!expanded && (
              <Text style={styles.ratingFeedbackSmall}>Very Good</Text>
            )}
          </View>
        </View>
        <Icon type={Icons.Feather} name={icon} size={22} color="#857E7F" />
      </TouchableOpacity>
      {expanded && (
        <View style={styles.ratingExpanded}>
          <View>
            <Text style={styles.ratingPoint}>8.4</Text>
            <Text style={styles.ratingFeedback}>Very Good</Text>
          </View>
          <View style={styles.ratingChart}>
            <View style={styles.ratingChartService}>
              <View style={styles.ratingChartCircle} />
              <Text style={styles.ratingChartInfo1}>7.9</Text>
              <Text style={styles.ratingChartInfo}>8.4</Text>
            </View>
            <View style={styles.ratingChartAverage}>
              <View style={styles.ratingChartCircle}></View>
            </View>
            <View style={styles.ratingChartOther}>
              <Text style={styles.ratingChartInfo1}>8.6</Text>
              <Text style={styles.ratingChartInfo2}>9.3</Text>
            </View>
          </View>
          <View style={styles.ratingChartNote}>
            <View style={styles.ratingChartNoteItem}>
              <View style={styles.ratingChartNoteSquare1} />
              <Text>Average</Text>
            </View>
            <View style={styles.ratingChartNoteItem}>
              <View style={styles.ratingChartNoteSquare2} />
              <Text>This Service</Text>
            </View>
          </View>
          <View>
            <Text style={styles.ratingDesc}>
              The KindiCare Rating for this service of{' '}
              <Text style={styles.ratingDescHighLine}>8.4</Text> is lower than
              the average KindiCare Rating for the area of{' '}
              <Text style={styles.ratingDescHighLine}>8.6</Text>, and represents
              the good quality of service provided
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

export default KindiCareRating;
