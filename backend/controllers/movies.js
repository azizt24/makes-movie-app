import axios from 'axios';
import asyncHandler from '../middleware/asyncHandler.js';
import {
  HIGHEST_RATED_MOVIES,
  HOME_CAROUSEL_MOVIES,
  LATEST_MOVIES_URL,
  MOVIE_BIG_IMAGE,
  MOVIE_SMALL_IMAGE,
} from '../config/constants.js';
import logger from '../config/logger.js';


export const fetchHomeCarouselMovies = asyncHandler(async (req, res) => {
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

  const { data } = await axios.get(HIGHEST_RATED_MOVIES + page);

  const movies = data.results.map(movie => ({
    image: `${MOVIE_SMALL_IMAGE}${movie.poster_path}`,
    title: movie.title,
    year: movie.release_date.slice(0, 4),
    rating: movie.vote_average,
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
  const url = new URL(LATEST_MOVIES_URL);
  logger.info(url);  
  url.searchParams.set('page', page.toString());  

  const { data } = await axios.get(url.toString());
  const movies = data.results.map(movie => ({
    image: `${MOVIE_SMALL_IMAGE}${movie.poster_path}`,
    title: movie.title,
    year:  movie.release_date.slice(0,4),
    rating: movie.vote_average,
    id: movie.id,
  }));

  res.json({ movies, currentPage: page, totalPages: data.total_pages });

});
