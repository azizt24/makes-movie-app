import { useEffect, useState } from 'react';

import imdbIcon from '../../moviePage/images/IMDB_Logo.png';
import redTomatoesIcon from '../../moviePage/images/red-tomato_logo.png';
import metaIcon from '../../moviePage/images/meta_Logo.png';

import {
  RatingText,
  RatingPair,
  LogoImage,
  RatingRow,
  MovieTitle,
  SubTitle,
  DetailContainer,
} from './movieDetailsStyles';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const MovieDetails = ({ movie }) => { 
  const [progress, setProgress] = useState(0);
  const targetProgress = parseFloat(movie.ratings.tmdb) * 10 || 0;

 

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= targetProgress) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [targetProgress,progress]);

 
  return (
    <>
    <DetailContainer>
      <MovieTitle>{movie.title} ({movie.year})</MovieTitle>
      <SubTitle>{movie.genre} | {movie.runTime} mins | {movie.language}</SubTitle>
    
   {movie.ratings && ( 
      <RatingRow>
    {movie.ratings.imdb && (  <RatingPair>
          <LogoImage src={imdbIcon} alt="IMDb" />
          <RatingText>{movie.ratings.imdb}</RatingText>
        </RatingPair>)}

      {movie.ratings.tmdb && (  <RatingPair>
          <LogoImage src={redTomatoesIcon} alt="Rotten Tomatoes" />
          <RatingText>{movie.ratings.tmdb}</RatingText>
        </RatingPair>)}

       {movie.ratings.metaCritic && ( <RatingPair>
          <LogoImage src={metaIcon} alt="Metacritic" />
          <RatingText>{movie.ratings.metaCritic}</RatingText>
        </RatingPair>)}
       {movie.ratings.imdb && ( <div
          style={{
            width: 80,
            height: 80,
            overflow: 'hidden',
            backgroundColor: 'rgb(110, 202, 238)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgressbarWithChildren
            value={progress}
            styles={{
              path: {
                stroke: `rgba(50, 170, 222, ${progress / 100})`,
                strokeWidth: '40',
              },
              trail: {
                stroke: '#0c3675',
                strokeWidth: '40',
              },
            }}
          >
            <strong style={{ color: 'rgb(6, 57, 117)', fontSize: '1.8rem' }}>
              {progress}%
            </strong>
          </CircularProgressbarWithChildren>
        </div>)}
      </RatingRow>)}
    </DetailContainer>
    
    </>
  );
};

export default MovieDetails;
