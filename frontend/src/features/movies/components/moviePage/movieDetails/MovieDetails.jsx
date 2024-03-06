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

const ratingSources = {
  'Internet Movie Database': imdbIcon,
  'Rotten Tomatoes': redTomatoesIcon,
  Metacritic: metaIcon,
};

const MovieDetails = ({ movie }) => {
  const targetProgress = parseFloat(movie.imdbRating) * 10;

  const [progress, setProgress] = useState(0);

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
  }, [targetProgress]);
  return (
    <>
      <DetailContainer>
        <MovieTitle>
          {movie.Title} ({movie.Year})
        </MovieTitle>
        <SubTitle>
          {movie.Genre} | {movie.Runtime} | {movie.Language}
        </SubTitle>

        <RatingRow>
          {movie.Ratings &&
            movie.Ratings.map((rating, index) => (
              <RatingPair key={index}>
                <LogoImage
                  src={ratingSources[rating.Source]}
                  alt={rating.Source}
                />
                <RatingText>{rating.Value}</RatingText>
              </RatingPair>
            ))}

          <div
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
                root: {},
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
          </div>
        </RatingRow>
      </DetailContainer>
    </>
  );
};

export default MovieDetails;
