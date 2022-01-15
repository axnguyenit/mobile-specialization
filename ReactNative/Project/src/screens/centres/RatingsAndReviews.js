import React from 'react';
import { ScrollView } from 'react-native';
import { KindiCareRating, NQSRating } from '../../components/ratings';
import { UserReview } from '../../components/reviews';

function RatingsAndReviews(props) {
  return (
    <ScrollView>
      <KindiCareRating />
      <UserReview />
      <NQSRating />
    </ScrollView>
  );
}

export default RatingsAndReviews;
