import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

const API_KEY = process.env.TMDB_API_KEY;
const OMDB_API_KEY = process.env.OMDB_API_KEY;



export const HIGHEST_RATED_MOVIES =
  'https://api.themoviedb.org/3/discover/movie';

export const HOME_CAROUSEL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&vote_average.gte=7&&vote_count.gte=1000&include_adult=false&include_video=false&total_results=1&page=1`;

export const LATEST_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular';
export const MOVIE_SMALL_IMAGE = 'https://image.tmdb.org/t/p/w185/';
export const REVIEWS = 'https://api.themoviedb.org/3';
export const MOVIE_BIG_IMAGE = 'https://image.tmdb.org/t/p/w1280/';
export const ORIGINAL_IMG = 'https://image.tmdb.org/t/p/original';
export const PROFILE_IMG = 'https://image.tmdb.org/t/p/w500';
export const YOUTUBE = 'https://www.youtube.com/watch?v=';
export const  getTmbdbUrl = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,credits,reviews`;
export const getOmdbUrl = (movieId) => `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movieId}`;
