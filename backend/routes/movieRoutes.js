import express from 'express';
import { fetchHomeCarouselMovies } from '../controllers/MovieCont/homeCarouselMovies.js';
import { fetchHighestRatedMovies } from '../controllers/MovieCont/highestRatedMovies.js';
import { fetchLatestMovies } from '../controllers/MovieCont/latestMovies.js';

const router = express.Router();

router.get('/home-carousel', fetchHomeCarouselMovies);

router.get('/highest-rated', fetchHighestRatedMovies);

router.get('/latest', fetchLatestMovies);

export default router;
