import axios from 'axios';
import { HIGHEST_RATED_MOVIES, MOVIE_SMALL_IMAGE } from '../../config/constants.js';

export const fetchHighestRatedMovies = async (req, res) => {
  const page = req.query.page || 1;

  try {
    const { data } = await axios.get(HIGHEST_RATED_MOVIES + page);
    const movies = data.results.map(movie => ({
      image: `${MOVIE_SMALL_IMAGE}${movie.poster_path}`,
      name: movie.title,
      overview: movie.overview,
      id: movie.id,
    }));

    res.json({ movies, page: data.page, total_pages: data.total_pages });
  } catch (error) {
    res.status(500).send({
      message: 'Failed to fetch highest rated movies',
      error: error.message,
    });
  }
};