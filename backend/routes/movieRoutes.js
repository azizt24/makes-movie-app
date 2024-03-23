import express from 'express';

import {
  fetchHomeCarouselMovies,
  fetchHighestRatedMovies,
  fetchLatestMovies,
  searchMoviesAndCast,
  fetchMovieDetails,
  fetchMoviesByCast,
} from '../controllers/movies.js';

const router = express.Router();

router.get('/home-carousel', fetchHomeCarouselMovies);

router.get('/highest-rated/page/:page', fetchHighestRatedMovies);

router.get('/latest/page/:page', fetchLatestMovies);

router.get('/search', searchMoviesAndCast);

router.get('/movies/:id', fetchMovieDetails);
router.get('/:id', fetchMovieDetails);

router.get('/actors/:name/page/:page', fetchMoviesByCast);
export default router;
