import express from 'express';

import {
  fetchHomeCarouselMovies,
  fetchHighestRatedMovies,
  fetchLatestMovies,
  fetchMovieDetails,
  fetchMoviesByCast,
  advancedSearch,
} from '../controllers/movies.js';

const router = express.Router();

router.get('/home-carousel', fetchHomeCarouselMovies);

router.get('/highest-rated/page/:page', fetchHighestRatedMovies);

router.get('/latest/page/:page', fetchLatestMovies);

router.get('/:id', fetchMovieDetails);

router.get('/actors/:name/page/:page', fetchMoviesByCast);

router.get('/search/advanced', advancedSearch);
export default router;
