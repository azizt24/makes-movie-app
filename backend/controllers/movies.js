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
  SEARCH_PERSON_URL
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

export const searchMoviesAndCast = asyncHandler(async (req, res) => {
  
  await query('query', 'Search query cannot be empty').notEmpty().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   
    return res.status(400).json({ errors: errors.array() });
  }

  const { query } = req.query;

  try {
   
    const moviesResponse = await axios.get(SEARCH_MOVIE_URL, {
      params: {
        api_key: API_KEY,
        query: query,
        page: 1
      },
    });
   
    const movies = moviesResponse.data.results.slice(0, 4).map(movie => ({
      title: movie.title,
      image: `${MOVIE_SMALL_IMAGE}${movie.poster_path}`,
      year: movie.release_date.slice(0, 4),
      rating: movie.vote_average.toFixed(1),
      id: movie.id,
    }));

   
    const peopleResponse = await axios.get(SEARCH_PERSON_URL, {
      params: {
        api_key: API_KEY,
        query: query,
        page: 1
      },
    });
   
    const people = peopleResponse.data.results.slice(0, 2).map(person => ({
      name: person.name,
      profile_path: `${MOVIE_SMALL_IMAGE}${person.profile_path}`,
      popularity: person.popularity,
      id: person.id,
    }));

   
    res.json({ movies, people });
  } catch (error) {
   
    console.error(`Error fetching data from TMDB: ${error.message}`);
    res.status(500).json({ message: 'Server error while processing your request' });
  }
});