import { useState, useEffect } from 'react';
import ReviewsCarousel from './ReviewsCarousel';
const Reviews = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews);

  return <ReviewsCarousel reviews={reviews} />;
};

export default Reviews;
