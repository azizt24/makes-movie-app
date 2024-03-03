import { useState, useEffect } from 'react';
import '../../styles/global.css';
import MovieDetails from '../../components/moviePage/movieDetails/MovieDetails';
import TagLineAndPlot from '../../components/moviePage/tagLineAndPlot/TagLineAndPlot';

import {
  PageContainer,
  MovieContainer,
  OverlayContainer,
} from './MoviePageStyles';
import Reviews from '../../components/moviePage/Reviews/Reviews';
import DirectorAndWriters from '../../components/moviePage/DirectorAndWriters/DirectorAndWriters';
import TrailerWidget from '../../components/moviePage/TrailerWidget/TrailerWidget';
import MovieCastCarouel from '../../components/moviePage/MovieCastCarouel/MovieCastCarouel';
import { useParams } from 'react-router-dom';
const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const [movieByrthem, setmovieByrthem] = useState({});
  const [error, setError] = useState('');
  const params = useParams();

  const id = params.id;
  // dotenv.config({ path: '../../../config.env' });
  // const OMBD_API_KEY = process.meta.env.REACT_APP_TMDB_API_KEY;
  //const themoviedb_API_KEY = import.meta.env.TMDB_API_KEY;
  const themoviedb_API_KEY = '2a5b2bfab3731d2da0e262fb42a86194';

  useEffect(() => {
    // const url = `https://www.omdbapi.com/?apikey=${OMBD_API_KEY}&i=${id}`;
    const url = `https://www.omdbapi.com/?apikey=6a3dabb2&i=${id}`;
    //const url = `https://www.omdbapi.com/?apikey=6a3dabb2&i=tt2527338`;
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
  useEffect(() => {
    // https://api.themoviedb.org/3/movie/tt2527338?api_key=2a5b2bfab3731d2da0e262fb42a86194
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${themoviedb_API_KEY}`;
    //const url = `https://www.omdbapi.com/?apikey=6a3dabb2&i=tt2527338`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setmovieByrthem(data);
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
      <TrailerWidget movie={movie} id={id} />
      <MovieContainer>
        <OverlayContainer poster={movieByrthem.backdrop_path}>
          <MovieDetails movie={movie} />
        </OverlayContainer>

        <TagLineAndPlot movie={movie} moviebythembd={movieByrthem} />

        <Reviews id={id} />
        <DirectorAndWriters movie={movie} />

        <MovieCastCarouel id={id} />
      </MovieContainer>
    </PageContainer>
  );
};

export default MoviePage;
