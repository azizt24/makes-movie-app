import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

const API_KEY = process.env.TMDB_API_KEY;
const today = new Date().toISOString().split('T')[0]; // Gets today's date in YYYY-MM-DD format

export const HIGHEST_RATED_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_date.lte=2024-01-01&sort_by=vote_average.desc&include_adult=false&include_video=false&page=`;

export const HOME_CAROUSEL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&vote_average.gte=7&vote_count.gte=1000&include_adult=false&include_video=false&total_results=1&page=`;

export const LATEST_MOVIES_URL =` https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=10&primary_release_date.lte=${today}`;
export const MOVIE_SMALL_IMAGE = 'https://image.tmdb.org/t/p/w185/';

export const MOVIE_BIG_IMAGE = 'https://image.tmdb.org/t/p/w1280/';
