import express from 'express';
import { fetchHomeCarouselMovies } from '../controllers/homeCarouselMovies.js';
import { fetchHighestRatedMovies } from '../controllers/highestRatedMovies.js';
import { fetchLatestMovies } from '../controllers/latestMovies.js';

const router = express.Router();

router.get('/movies/home-carousel', fetchHomeCarouselMovies);
router.get('/movies/highest-rated', fetchHighestRatedMovies);
router.get('/movies/latest', fetchLatestMovies);

export default router;
