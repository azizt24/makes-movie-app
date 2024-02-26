import axios from 'axios';
import {
  LATEST_MOVIES_URL,
  MOVIE_SMALL_IMAGE,
} from '../../config/constants.js';

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
