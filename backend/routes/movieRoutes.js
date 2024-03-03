import express from 'express';
import { movieValidation } from '../utils/validation.js';

import {
  fetchHomeCarouselMovies,
  fetchHighestRatedMovies,
  fetchLatestMovies,
  fetchMovieDetails,
  fetchMovieReviews,
} from '../controllers/movies.js';

const router = express.Router();

router.get('/home-carousel', fetchHomeCarouselMovies);

router.get('/highest-rated/page/:page', fetchHighestRatedMovies);

router.get('/latest/page/:page', fetchLatestMovies);
//Example how to see Movie
//http://localhost:5000/api/v1/movies/movie?id=438631
router.get('/movie', movieValidation, fetchMovieDetails);
//Example how to see Rev 
//http://localhost:5000/api/v1/movies/movie/787699/reviews
router.get('/movie/:id/reviews', movieValidation, fetchMovieReviews);

export default router;
