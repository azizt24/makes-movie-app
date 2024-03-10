import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { CONSTANTS } from '../../features/movies/utils/constants/constants.js';
import { MoviesList, MoviesButtons, MoviesTitle, Pagination } from '../../features/movies';
import { MoviesContainer } from './MoviesPage.style';

const MoviesPage = () => {
  const [displayLatest, setDisplayLatest] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesData, setMoviesData] = useState({ movies: [], totalPages: 0 });
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  

  useEffect(() => {
    const moviesUrl = displayLatest ? CONSTANTS.LATEST_MOVIES_URL : CONSTANTS.HIGHEST_MOVIES_URL;
    const fetchMovies = async () => {
      setIsPending(true);
      try {
        const response = await fetch(`${moviesUrl}${currentPage}`);
        if (!response.ok) throw new Error('Could not fetch the data for that resource');
        const data = await response.json();
        setMoviesData({ movies: data.movies, totalPages: data.totalPages });
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsPending(false);
      }
    };

    fetchMovies();
  }, [currentPage, displayLatest]);

  useEffect(() => {
    const type = displayLatest ? 'latest' : 'highestrated';
    navigate(`/movies/${type}/page/${currentPage}`, { replace: true }); // Use navigate to update the URL
  }, [currentPage, displayLatest, navigate]);

  const handleLatestClick = () => {
    setDisplayLatest(true);
    setCurrentPage(1);
  };

  const handleHighestRatedClick = () => {
    setDisplayLatest(false);
    setCurrentPage(1);
  };

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!moviesData.movies) return <div>No movies found.</div>;

  return (
    <MoviesContainer>
      <MoviesTitle title={displayLatest ? 'Latest Movies' : 'Highest Rated Movies'} />
      <MoviesButtons onLatestMovies={handleLatestClick} onHighestRated={handleHighestRatedClick} />
      <Pagination currentPage={currentPage} totalPages={moviesData.totalPages} onPageChange={setCurrentPage} />
      <MoviesList movies={moviesData.movies} />
    </MoviesContainer>
  );
};

export default MoviesPage;
