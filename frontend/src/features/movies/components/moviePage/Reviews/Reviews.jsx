import { useState, useEffect } from 'react';
import ReviewsCarousel from './ReviewsCarousel';
const Reviews = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews);

  return (
  <>
  
  {reviews && ( <ReviewsCarousel reviews={reviews} />)}
  </>
    
    );
};

export default Reviews;
