import axios from 'axios';
import dotenv from 'dotenv';
import { validationResult } from 'express-validator';
import { aggregateData } from '../utils/aggregateData.js';
import asyncHandler from '../middleware/asyncHandler.js';
import {
  HIGHEST_RATED_MOVIES,
  HOME_CAROUSEL_MOVIES,
  LATEST_MOVIES_URL,
  MOVIE_BIG_IMAGE,
  MOVIE_SMALL_IMAGE,
  REVIEWS,
  getOmdbUrl ,
  getTmbdbUrl,
} from '../config/constants.js';

dotenv.config({ path: './config/config.env' });

const API_KEY = process.env.TMDB_API_KEY;

export const fetchHomeCarouselMovies = asyncHandler(async (_, res) => {
  const response = await axios.get(HOME_CAROUSEL_MOVIES);

  const movies = response.data.results.slice(0, 5).map(movie => ({
    image: `${MOVIE_BIG_IMAGE}${movie.backdrop_path}`,
    title: movie.title,
    year: movie.release_date.slice(0, 4),
    overview: movie.overview,
    rating: movie.vote_average,
    id: movie.id,
  }));

  res.json(movies);
});

export const fetchHighestRatedMovies = asyncHandler(async (req, res) => {
  const page = req.params.page || 1;

  const { data } = await axios.get(HIGHEST_RATED_MOVIES, {
    params: {
      api_key: API_KEY,
      sort_by: 'vote_average.desc',
      'vote_count.gte': 1000,
      include_adult: false,
      page,
    },
  });

  const movies = data.results.map(movie => ({
    image: `${MOVIE_SMALL_IMAGE}${movie.poster_path}`,
    title: movie.title,
    year: movie.release_date.slice(0, 4),
    rating: movie.vote_average.toFixed(1),
    id: movie.id,
  }));

  res.json({
    page: parseInt(page, 10),
    total_pages: data.total_pages,
    data: movies,
  });
});

export const fetchLatestMovies = asyncHandler(async (req, res) => {
  const page = req.params.page || 1;

  const { data } = await axios.get(LATEST_MOVIES_URL, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page,
    },
  });

  const movies = data.results.map(movie => ({
    image: `${MOVIE_SMALL_IMAGE}${movie.poster_path}`,
    title: movie.title,
    year: movie.release_date.slice(0, 4),
    rating: movie.vote_average.toFixed(1),
    id: movie.id,
  }));

  res.json({
    currentPage: page,
    totalPages: data.total_pages,
    movies,
  });
});



export const fetchMovieDetails = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array({ onlyFirstError: true }).map(error => ({
        type: "field",
        msg: error.msg,
        path: error.param,
        location: error.location
    })) });
  }
  const movieId = req.query.id;
  const [tmdbResponse, omdbResponse] = await Promise.all([
    axios.get(getTmbdbUrl(movieId)),
    axios.get(getOmdbUrl(movieId))
  ]);

  const movieData = aggregateData(tmdbResponse.data, omdbResponse.data);
  res.json(movieData);
});



export const fetchMovieReviews = asyncHandler(async (req, res) => {
  const movieId = req.params.id; 

  const response = await axios.get(`${REVIEWS}/movie/${movieId}/reviews`, {
    params: { api_key: API_KEY,
      language: 'en-US',
      page: 1
     }
  });

  // Assuming the response structure has a 'results' array containing the reviews
  const reviews = response.data.results;

  // Send the reviews back in the response
  res.json({
    success: true,
    count: reviews.length,
    data: reviews
  });
});