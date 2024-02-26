import axios from 'axios';
import asyncHandler from './../middleware/asyncHandler';
import {
  HIGHEST_RATED_MOVIES,
  HOME_CAROUSEL_MOVIES,
  LATEST_MOVIES_URL,
  MOVIE_BIG_IMAGE,
  MOVIE_SMALL_IMAGE,
} from '../config/constants';

export const fetchHighestRatedMovies = asyncHandler(async (req, res) => {
  const page = req.param.page || 1;

  const { data } = await axios.get(HIGHEST_RATED_MOVIES + page);

  const movies = data.results.map(movie => ({
    image: `${MOVIE_SMALL_IMAGE}${movie.poster_path}`,
    title: movie.title,
    year: movie.release_date.slice(0, 4),
    rating: movie.vote_average,
    id: movie.id,
  }));

  res.json({ movies, page: data.page, total_pages: data.total_pages });
});

export const fetchLatestMovies = async (req, res) => {
  const page = req.params.page || 1;
  try {
    const response = await axios.get(LATEST_MOVIES_URL + page);
    const movies = response.data.results.map(movie => ({
      image: `${MOVIE_SMALL_IMAGE}${movie.poster_path}`,
      name: movie.title,
      overview: movie.overview,
      id: movie.id,
    }));

    res.json({
      movies,
      currentPage: page,
      totalPages: response.data.total_pages,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to fetch latest movies', error: error.message });
  }
};

export const fetchHomeCarouselMovies = async (req, res) => {
  try {
    const response = await axios.get(HOME_CAROUSEL_MOVIES);
    const movies = response.data.results.slice(0, 5).map(movie => ({
      image: `${MOVIE_BIG_IMAGE}${movie.backdrop_path}`,
      name: movie.title,
      overview: movie.overview,
      id: movie.id,
    }));

    res.json(movies);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching movies', error: error.message });
  }
};
