import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import IconNQSRating from '../../assets/icons/ratings-reviews/NQS-rating.png';
import NQSRatingImg from '../../assets/images/ratings-reviews/NQS-image.png';
import Icon, { Icons } from '../icons';
import ratings from '../../fake-db/centre-details/ratings';

function NQSRating({ rating }) {
  console.log(rating);
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
            <Image source={IconNQSRating} style={styles.ratingHeaderImgNqs} />
          )}
          <View style={styles.ratingHeaderTitle}>
            <Text style={styles.ratingHeaderTitle}>NQS Rating</Text>
            {!expanded && (
              <Text style={styles.ratingFeedbackSmall}>
                Last reviewed {rating.createdAt.toDate().toLocaleDateString()}
              </Text>
            )}
          </View>
        </View>
        <Icon type={Icons.Feather} name={icon} size={22} color='#857E7F' />
      </TouchableOpacity>
      {expanded && (
        <View>
          <View style={styles.ratingExpanded}>
            <Image source={NQSRatingImg} style={styles.ratingImgNqs} />
            <Text style={styles.ratingFeedbackSmall}>
              Last Reviewed {rating.createdAt.toDate().toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.ratingINqsList}>
            {rating?.ratings &&
              rating?.ratings.map((item, i) => (
                <View key={i} style={styles.ratingINqsItem}>
                  <Text style={styles.ratingINqsLabel}>{`${i + 1}. ${
                    item.label
                  }`}</Text>
                  <Text style={styles.ratingINqsValue}>{item.value}</Text>
                </View>
              ))}
          </View>
        </View>
      )}
    </View>
  );
}

export default NQSRating;
