import axios from 'axios';
import dotenv from 'dotenv';

// Configure dotenv to load environment variables
dotenv.config();
let genreList = [];
const API_KEY = process.env.TMDB_API_KEY;

export const API_BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchGenreList() {
  try {
    const response = await axios.get(`${API_BASE_URL}/genre/movie/list`, {
      params: { api_key: API_KEY },
    });
    genreList = response.data.genres; // Cache the genre list
  } catch (error) {
    console.error('Failed to fetch genre list:', error);
  }
}

export function getGenreList() {
  return genreList;
}
