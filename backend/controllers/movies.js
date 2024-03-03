import axios from 'axios';
import dotenv from 'dotenv';
import asyncHandler from '../middleware/asyncHandler.js';
import {
  HIGHEST_RATED_MOVIES,
  HOME_CAROUSEL_MOVIES,
  LATEST_MOVIES_URL,
  MOVIE_BIG_IMAGE,
  MOVIE_SMALL_IMAGE,
  CAST_QUERY_URL,
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

export const fetchMoviesByCast = asyncHandler(async (req, res) => {
  try {
    const { name, page } = req.params;

    const pageNumber = parseInt(page);
    if (isNaN(pageNumber) || pageNumber < 1) {
      return res.status(400).json({ error: 'Invalid page number' });
    }

    const response = await axios.get(CAST_QUERY_URL(name, 1));
    const totalPages = response.data.total_pages;

    if (totalPages === 0) {
      return res.status(404).json({ error: 'Actor or director not found' });
    }

    let movies = [];
    for (let i = 1; i <= totalPages; i++) {
      const moviesResponse = await axios.get(
        `https://api.themoviedb.org/3/person/${response.data.results[0].id}/movie_credits`,
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

    res.json({ movies: paginatedMovies });
  } catch (error) {
    console.error('Error fetching movies by cast:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
