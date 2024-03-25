import axios from 'axios';
import dotenv from 'dotenv';
import aggregateData from '../utils/aggregateData.js';
import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';

import { getGenreList } from '../utils/genreService.js';
import {
  HIGHEST_RATED_MOVIES,
  HOME_CAROUSEL_MOVIES,
  LATEST_MOVIES_URL,
  MOVIE_BIG_IMAGE,
  MOVIE_SMALL_IMAGE,
  getOmdbUrl,
  getTmbdbUrl,
  CAST_QUERY_URL,
  MOVIES_FETCHER,
  DISCOVER_MOVIE_URL,
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

  const sortedMovies = data.results.sort((a, b) =>
    b.release_date.localeCompare(a.release_date)
  );

  const movies = sortedMovies.map(movie => ({
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

export const fetchMovieDetails = asyncHandler(async (req, res, next) => {
  const { id: movieId } = req.params;

  const tmdbResponse = await axios.get(getTmbdbUrl(movieId));
  if (tmdbResponse.status !== 200 || !tmdbResponse.data) {
    return next(
      new ErrorResponse(
        `Error fetching data from TMDB: Status code ${tmdbResponse.status}`,
        500
      )
    );
  }
  const tmdbData = tmdbResponse.data;

  const omdbResponse = await axios.get(getOmdbUrl(tmdbData.imdb_id));

  if (omdbResponse.status !== 200 || !omdbResponse.data) {
    return next(
      new ErrorResponse(
        `Error fetching data from OMDB: Status code ${omdbResponse.status}`,
        500
      )
    );
  }
  const omdbData = omdbResponse.data;

  const movieData = aggregateData(tmdbData, omdbData, tmdbData.reviews);

  res.json(movieData);
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

// Utility function to map runtime descriptions to minutes
function parseRuntime(runtimeRange) {
  switch (runtimeRange) {
    case '1-1.5h':
      return 60;
    case '1.5-2h':
      return 90;
    case '2-3h':
      return 120;
    case 'over 3h':
      return 180;
    default:
      return 0;
  }
}

// Function to fetch TMDB person IDs by name
const fetchPersonIds = async names => {
  const ids = [];
  for (const name of names.split(',')) {
    const response = await axios.get(CAST_QUERY_URL(name.trim(), 1), {
      params: { api_key: API_KEY },
    });
    if (response.data.results.length > 0) {
      ids.push(response.data.results[0].id);
    }
  }
  return ids.join(',');
};

export const advancedSearch = asyncHandler(async (req, res) => {
  const {
    fromYear = '1903',
    toYear = '2024',
    minRating = '',
    minVotes = '',
    genre = '',
    minRuntime = '',
    actors = '',
    directors = '',
    writers = '',
    page = 1,
  } = req.query;

  const runtimeRange = parseRuntime(minRuntime);

  // Convert genre names to IDs
  const genreList = getGenreList();
  const genreIds = genre
    ? genre
        .split(',')
        .map(name => {
          const genre = genreList.find(
            genre => genre.name.toLowerCase() === name.trim().toLowerCase()
          );
          return genre ? genre.id : null;
        })
        .filter(id => id)
        .join(',')
    : '';

  const params = {
    api_key: process.env.TMDB_API_KEY,
    'primary_release_date.gte': `${fromYear}-01-01`,
    'primary_release_date.lte': `${toYear}-12-31`,
    'vote_average.gte': minRating || undefined,
    'vote_count.gte': minVotes || undefined,
    with_genres: genreIds,
    page,
  };

  if (runtimeRange) {
    params['with_runtime.gte'] = runtimeRange;
  }

  // Handle actors, directors, and writers
  if (actors) params.with_cast = await fetchPersonIds(actors);
  if (directors) params.with_crew = await fetchPersonIds(directors);
  if (writers)
    params.with_crew =
      (params.with_crew ? `${params.with_crew},` : '') +
      (await fetchPersonIds(writers));

  try {
    const response = await axios.get(DISCOVER_MOVIE_URL, { params });
    res.json({
      success: true,
      results: response.data.results,
      page: response.data.page,
      total_results: response.data.total_results,
      total_pages: response.data.total_pages,
    });
  } catch (error) {
    console.error('Advanced search failed:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});
