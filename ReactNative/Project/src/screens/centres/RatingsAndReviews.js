import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import { KindiCareRating, NQSRating } from '../../components/ratings';
import { UserReview } from '../../components/reviews';
import { centreDetails } from '../../firebase/services';
import useFireStore from '../../hooks/useFireStore';

const ratings = {
  kindiCareRating: (data) => <KindiCareRating rating={data} />,
  userReview: (data) => <UserReview userReview={data} />,
  nqsRating: (data) => <NQSRating rating={data} />,
};

function RatingsAndReviews(props) {
  const route = useRoute();

  const ratingList = useFireStore(centreDetails.ratings, route.params.centreId);
  ratingList && ratingList.sort((a, b) => a.createdAt - b.createdAt);

  const renderRating = (rating) => {
    return ratings[rating.type](rating);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {ratingList &&
        ratingList.map((rating) => {
          return renderRating(rating);
        })}
    </ScrollView>
  );
}

export default RatingsAndReviews;
