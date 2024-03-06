import axios from 'axios';
import dotenv from 'dotenv';
import asyncHandler from '../middleware/asyncHandler.js';
import ErrorResponse from './../utils/errorResponse.js';
import {
  HIGHEST_RATED_MOVIES,
  HOME_CAROUSEL_MOVIES,
  LATEST_MOVIES_URL,
  MOVIE_BIG_IMAGE,
  MOVIE_SMALL_IMAGE,
  CAST_QUERY_URL,
  MOVIES_FETCHER,
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
    movies,
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
    page: parseInt(page, 10),
    totalPages: data.total_pages,
    movies,
  });
});

export const fetchMoviesByCast = asyncHandler(async (req, res, next) => {
  const { name, page } = req.params;

  const pageNumber = parseInt(page);

  if (isNaN(pageNumber) || pageNumber < 1) {
    return next(new ErrorResponse('Invalid page number', 400));
  }

  const response = await axios.get(CAST_QUERY_URL(name, 1));
  const results = response.data.results;
  const totalPages = response.data.total_pages;

  if (results.length === 0) {
    return next(new ErrorResponse('Actor or director not found', 404));
  }

  const movies = [];
  for (let i = 1; i <= totalPages; i++) {
    const moviesResponse = await axios.get(
      MOVIES_FETCHER(response.data.results[0].id),
      {
        params: {
          api_key: API_KEY,
          language: 'en-US',
          page: i,
        },
      }
    );
    movies.push(...moviesResponse.data.cast);
  }

  const pageSize = 20;
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;
  const paginatedMovies = movies.slice(startIndex, endIndex);

  res.json({
    currentPage: page,
    totalPages: Math.ceil(movies.length / 20),
    movies: paginatedMovies,
  });
});
