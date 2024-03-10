import { useState, useEffect } from 'react';
import { CONSTANTS } from '../../features/movies/utils/constants/constants.js';
import { useFetch } from '../../hooks/useFetch.js';
import '../../styles/global.css';

import {
  PageContainer,
  MovieContainer,
  OverlayContainer,
} from './MoviePageStyles';

import { useParams } from 'react-router-dom';
import {
  DirectorAndWriters,
  MovieCastCarouel,
  MovieDetails,
  Reviews,
  TagLineAndPlot,
  TrailerWidget,
} from '../../features/movies';
const MoviePage = () => {
  const params = useParams();
  const id = params.id;

  const { data: Movie, isPending: isPendingMovie } = useFetch(
    CONSTANTS.MOVIE_URL + id,
    CONSTANTS.MOVIE_QUERY_KEY,
    CONSTANTS.QUERY_KEY_TAGS
  );
  if (isPendingMovie) {
    return <div>Pending...</div>;
  }
  return (
    <PageContainer>
      <TrailerWidget movie={Movie} />
      <MovieContainer>
        <OverlayContainer poster={Movie.backdrop}>
          <MovieDetails movie={Movie} />
        </OverlayContainer>

        <TagLineAndPlot movie={Movie} />

        <Reviews id={id} />
        <DirectorAndWriters movie={Movie} />

        <MovieCastCarouel movie={Movie} />
      </MovieContainer>
    </PageContainer>
  );
};

export default MoviePage;
