// homeCarouselMoviesController.js
import axios from 'axios';

const ApiKey = '033a7d652a60b8f9fe88c99d78506501'; 

export const fetchHomeCarouselMovies = async (req, res) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&vote_average.gte=7&vote_count.gte=1000&include_adult=false&include_video=false&total_results=1&page=1`;

    try {
        const response = await axios.get(url);
        const movies = response.data.results.slice(0, 5).map(movie => ({
            image: `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`,
            name: movie.title,
            overview: movie.overview,
            id: movie.id
        
        }));

        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching movies', error: error.message });
    }
};
