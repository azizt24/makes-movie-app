const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const HIGHEST_RATED_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=`;

export const HOME_CAROUSEL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&vote_average.gte=7&vote_count.gte=1000&include_adult=false&include_video=false&total_results=1&page=1`;

export const LATEST_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=`;

export const MOVIE_SMALL_IMAGE = 'https://image.tmdb.org/t/p/w185/';

export const MOVIE_BIG_IMAGE = 'https://image.tmdb.org/t/p/w1280/';
