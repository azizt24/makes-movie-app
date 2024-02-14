import axios from 'axios';

const apiKey = '033a7d652a60b8f9fe88c99d78506501'; 

export const fetchLatestMovies = async (req, res) => {
    const page = req.query.page || 1;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${page}`;

    try {
        const response = await axios.get(url);
        const movies = response.data.results.map(movie => ({
            image: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
            name: movie.title,
            overview: movie.overview,
            id: movie.id,
        }));

        res.json({ movies, currentPage: page, totalPages: response.data.total_pages });
    } catch (error) {
        //handle ERROR
        res.status(500).json({ message: 'Failed to fetch latest movies', error: error.toString() });
    }
};
