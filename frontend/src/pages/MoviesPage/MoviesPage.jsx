import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONSTANTS } from '../../features/movies/utils/constants/constants.js';
import { MoviesList, MoviesButtons, MoviesTitle, Pagination } from '../../features/movies';
import { MoviesContainer } from './MoviesPage.style';
import { useFetch } from '../../hooks/useFetch';

const MoviesPage = () => {
  const [displayLatest, setDisplayLatest] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

   
  const {
    data: latestMoviesData,
    isPending: isPendingLatest,
    isError: isErrorLatest,
  } = useFetch(
    `${CONSTANTS.LATEST_MOVIES_URL}${currentPage}`,
    `${CONSTANTS.LATEST_MOVIES_QUERY_KEY}-${currentPage}`,
    [CONSTANTS.QUERY_KEY_TAGS]
  );

   
  const {
    data: highestRatedMoviesData,
    isPending: isPendingHighestRated,
    isError: isErrorHighestRated,
  } = useFetch(
    `${CONSTANTS.HIGHEST_MOVIES_URL}${currentPage}`,
    `${CONSTANTS.HIGHEST_RATED_MOVIES_QUERY_KEY}-${currentPage}`,
    [CONSTANTS.QUERY_KEY_TAGS]
  );
  const maxPages = 205;
  const totalPagesLatest = Math.min(latestMoviesData?.totalPages || 0, maxPages);
   
  const totalPages = displayLatest 
    ? latestMoviesData?.totalPages 
    : highestRatedMoviesData?.total_pages;

   
  const isPending = displayLatest ? isPendingLatest : isPendingHighestRated;
  const isError = displayLatest ? isErrorLatest : isErrorHighestRated;

   
  const moviesData = displayLatest ? latestMoviesData : highestRatedMoviesData;

  useEffect(() => {
    const type = displayLatest ? 'latest' : 'highestrated';
    navigate(`/movies/${type}/page/${currentPage}`, { replace: true });
  }, [currentPage, displayLatest, navigate]);

  const handleTabChange = (isLatest) => {
    if (isLatest !== displayLatest) {
      setDisplayLatest(isLatest);
      setCurrentPage(1);  
    }
  };

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching the movies.</div>;
  if (!moviesData?.movies) return <div>No movies found.</div>;

  return (
    <MoviesContainer>
      <MoviesTitle title={displayLatest ? 'Latest Movies' : 'Highest Rated Movies'} />
      <MoviesButtons onLatestMovies={() => handleTabChange(true)} onHighestRated={() => handleTabChange(false)} />
      <Pagination currentPage={currentPage} totalPages={totalPagesLatest} onPageChange={setCurrentPage} />

      <MoviesList movies={moviesData.movies} />
    </MoviesContainer>
  );
};

export default MoviesPage;
