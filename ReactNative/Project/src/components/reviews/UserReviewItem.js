import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Photos } from '../centres';
import IconStarFill from '../../assets/icons/ratings-reviews/ic-star-fill.png';
import IconStar from '../../assets/icons/ratings-reviews/ic-star.png';

function UserReviewItem(props) {
  const { review } = props;

  const renderStar = (n) => {
    let i = 0;
    let stars = [];
    let surplus = n % 1;
    n = Math.floor(n / 1);
    while (i < n) {
      stars.push(<Image source={IconStarFill} style={styles.reviewItemStar} />);
      i++;
    }
    if (surplus) {
      stars.push(<Image source={IconStar} style={styles.reviewItemStar} />);
    }
    n = 5 - n;
    i = surplus ? 1 : 0;
    while (i < n) {
      i++;
      stars.push(<Image source={IconStar} style={styles.reviewItemStar} />);
    }
    return stars;
  };

  return (
    <View>
      <View style={styles.reviewItemHeader}>
        {!!review?.avatar ? (
          <Image
            source={{ uri: review?.avatar }}
            style={styles.reviewItemAvatar}
          />
        ) : (
          <Text style={styles.reviewItemAvatarChar}>
            {review?.name.charAt(0)?.toUpperCase()}
          </Text>
        )}
        <View>
          <View style={styles.reviewItemInfo}>
            <Text style={styles.reviewItemName}>{review?.name}</Text>
            <Text style={styles.reviewItemCircle} />
            {renderStar(review.stars)}
          </View>

          <View style={styles.row}>
            <Text
              style={[
                styles.reviewItemFrom,
                {
                  color: review.reviewFrom === 'google' ? '#32A4FC' : '#DB147F',
                },
              ]}
            >
              {review?.reviewFrom === 'google'
                ? 'Google Review'
                : `Kindi's User Review`}
            </Text>
            <Text style={styles.reviewItemDate}>
              {review?.date.toDate().toLocaleDateString()}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.reviewItemMessage}>{review?.message}</Text>

      <View style={styles.reviewItemPhotos}>
        <Photos photos={review?.photos} />
      </View>
    </View>
  );
}

export default UserReviewItem;
