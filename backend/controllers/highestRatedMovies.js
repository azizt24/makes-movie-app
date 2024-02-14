import axios from 'axios';
const ApiKey = '033a7d652a60b8f9fe88c99d78506501'; 
export const fetchHighestRatedMovies = async (req, res) => {
    const page = req.query.page || 1; 
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${page}`;

    try {
        const { data } = await axios.get(url);
        const movies = data.results.map(movie => ({
            image: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
            name: movie.title,
            overview: movie.overview,
            id: movie.id,
        }));

        res.json({ movies, page: data.page, total_pages: data.total_pages });
    } catch (error) {
        res.status(500).send({ message: 'Failed to fetch highest rated movies', error: error.message });
    }
};
