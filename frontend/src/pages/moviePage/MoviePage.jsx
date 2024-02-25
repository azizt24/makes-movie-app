import { useState, useEffect } from 'react';
import '../../styles/global.css';
import imagetest1 from '../moviePage/imagestest/Star-Wars-IX-intro.webp';
import MovieDetails from '../../components/moviePage/movieDetails/MovieDetails';
import TagLineAndPlot from '../../components/moviePage/tagLineAndPlot/TagLineAndPlot';

import { PageContainer, MovieContainer, MovieImage } from './MoviePageStyles';
import Reviews from '../../components/moviePage/Reviews/Reviews';
import DirectorAndWriters from '../../components/moviePage/DirectorAndWriters/DirectorAndWriters';
import TrailerWidget from '../../components/moviePage/TrailerWidget/TrailerWidget';
import MovieCastCarouel from '../../components/moviePage/MovieCastCarouel/MovieCastCarouel';
const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');

  const id = 'tt2527338';
  const themoviedb_API_KEY = '2a5b2bfab3731d2da0e262fb42a86194';
  useEffect(() => {
    const url = 'https://www.omdbapi.com/?apikey=6a3dabb2&i=tt2527338';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.Response) {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError('Failed to fetch movie details');
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <PageContainer>
      <MovieContainer>
        {/* {movie.Poster && <MovieImage src={movie.Poster} alt={`${movie.Title} Poster`} />} */}
        <MovieImage src={imagetest1} alt="Star Wars Movie Poster" />

        <MovieDetails movie={movie} />
        <TagLineAndPlot movie={movie} />

        <Reviews id={id} />
        <DirectorAndWriters movie={movie} />

        <TrailerWidget movie={movie} />

        <MovieCastCarouel id={id} />
      </MovieContainer>
    </PageContainer>
  );
};

export default MoviePage;
