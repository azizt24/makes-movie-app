import axios from 'axios';
import { HOME_CAROUSEL_MOVIES, MOVIE_BIG_IMAGE } from '../../config/constants.js';

export const fetchHomeCarouselMovies = async (req, res) => {
    try {
        const response = await axios.get(HOME_CAROUSEL_MOVIES);
        const movies = response.data.results.slice(0, 5).map(movie => ({
            image: `${MOVIE_BIG_IMAGE}${movie.backdrop_path}`,
            name: movie.title,
            overview: movie.overview,
            id: movie.id
        }));

        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies', error: error.message });
    }
};
