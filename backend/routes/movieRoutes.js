import express from 'express';
import { movieValidation } from '../utils/movieValidation.js';

import {
  fetchHomeCarouselMovies,
  fetchHighestRatedMovies,
  fetchLatestMovies,
  fetchMovieDetails,
  
  fetchMoviesByCast,
} from '../controllers/movies.js';

const router = express.Router();

router.get('/home-carousel', fetchHomeCarouselMovies);

router.get('/highest-rated/page/:page', fetchHighestRatedMovies);

router.get('/latest/page/:page', fetchLatestMovies);

router.get('/movie/:id',  fetchMovieDetails);

router.get('/actors/:name/page/:page', fetchMoviesByCast);
export default router;
