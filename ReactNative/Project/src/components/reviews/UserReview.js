import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import IconStar from '../../assets/icons/ratings-reviews/ic-star-fill.png';
import Icon, { Icons } from '../icons';
import UserReviewItem from './UserReviewItem';
import reviews from '../../fake-db/centre-details/reviews';

function UserReview({ userReview }) {
  const { userList } = userReview;
  const [expanded, setExpanded] = useState(false);
  const [icon, setIcon] = useState('chevron-down');

  const handleCollapse = () => {
    setExpanded(!expanded);
    icon === 'chevron-up' ? setIcon('chevron-down') : setIcon('chevron-up');
  };
  return (
    <View style={styles.review}>
      <TouchableOpacity onPress={handleCollapse} style={styles.reviewHeader}>
        <View style={styles.row}>
          {!expanded && (
            <Image source={IconStar} style={styles.reviewHeaderImg} />
          )}
          <View style={styles.reviewHeaderTitle}>
            <Text style={styles.reviewHeaderTitle}>User Review</Text>
            {!expanded && <Text style={styles.reviewFeedbackSmall}>4.5/5</Text>}
          </View>
        </View>
        <Icon type={Icons.Feather} name={icon} size={22} color='#857E7F' />
      </TouchableOpacity>
      {expanded && (
        <ScrollView>
          <View style={styles.reviewExpanded}>
            {userList?.map((item, i) => (
              <UserReviewItem key={i} review={item} />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default UserReview;
