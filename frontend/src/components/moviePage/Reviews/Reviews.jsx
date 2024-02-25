import { useState, useEffect } from 'react';
import ReviewsCarousel from './ReviewsCarousel';
const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  const themoviedb_API_KEY = '2a5b2bfab3731d2da0e262fb42a86194';

  useEffect(() => {
    const urlForReviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${themoviedb_API_KEY}&language=en-US&page=1`;

    fetch(urlForReviews)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          setReviews(data.results);
        } else {
          setError('Failed to fetch reviews');
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError('Failed to fetch reviews');
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ReviewsCarousel reviews={reviews} />;
};

export default Reviews;
