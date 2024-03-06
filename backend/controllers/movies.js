import axios from 'axios';
import dotenv from 'dotenv';
import asyncHandler from '../middleware/asyncHandler.js';
import {
  HIGHEST_RATED_MOVIES,
  HOME_CAROUSEL_MOVIES,
  LATEST_MOVIES_URL,
  MOVIE_BIG_IMAGE,
  MOVIE_SMALL_IMAGE,
  SEARCH_MOVIE_URL,
  SEARCH_CAST_URL,
} from '../config/constants.js';
import ErrorResponse from '../utils/errorResponse.js';
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

export const searchMoviesAndCast = asyncHandler(async (req, res, next) => {
  const inputSearch = req.params.query;

  if (!inputSearch) {
    return next(new ErrorResponse('Search query is required', 400));
  }

  const moviesResponse = await axios.get(SEARCH_MOVIE_URL, {
    params: {
      api_key: API_KEY,
      query: inputSearch,
      include_adult: false,
      page:1,
    },
  });
  const movies = moviesResponse.data.results.slice(0, 4).map(movie => ({
    title: movie.title,
    year: movie.release_date ? movie.release_date.slice(0, 4) : 'Unknown',
    rating: movie.vote_average,
    id: movie.id,
  }));

  const castResponse = await axios.get(SEARCH_CAST_URL, {
    params: {
      api_key: API_KEY,
      query: inputSearch,
      page:1,
    },
  });
  const cast = castResponse.data.results.slice(0, 2).map(person => ({
    name: person.name,
    known_for: person.known_for_department,
    id: person.id,
  }));

  res.json({
    movies,
    cast,
  });
});
