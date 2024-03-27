import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import MovieCard from '../../features/movies/components/MovieCard/MovieCard';
import Pagination from '../../features/movies/components/Pagination/Pagination';
import MoviesTitle from '../../features/movies/components/MoviesTitle/MoviesTitle';
import  { MoviesContainer,  } from '../MoviesPage/MoviesPage.style';
import{MovieGrid } from './SearchResults.styles'

// Function to fetch movies data
const fetchMovies = async (page, searchParams) => {
  const response = await axios.get(`http://localhost:5000/api/v1/movies/search/advanced${searchParams}`);
  return response.data;
};

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page'), 10) || 1);

  // UseQuery to fetch movies data based on current page and search parameters
  const { data: moviesData, isLoading, isError } = useQuery(
    ['searchResults', currentPage, location.search], // Add location.search to query key to ensure re-fetch on parameter change
    () => fetchMovies(currentPage, location.search),
    { keepPreviousData: true }
  );

  // Effect to sync URL with state
  useEffect(() => {
    const urlPage = parseInt(searchParams.get('page'), 10);
    if (urlPage !== currentPage) {
      setCurrentPage(urlPage);
    }
  }, [location.search]);

  // Function to handle page change
  const handlePageChange = (page) => {
    searchParams.set('page', page);
    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    setCurrentPage(page);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !moviesData) return <div>Error loading movies.</div>;
  if (moviesData.results.length === 0) return <div>No movies found.</div>;

  return (
    <MoviesContainer>
      <MoviesTitle title="Search Results" />
      <Pagination
        currentPage={currentPage}
        totalPages={moviesData.total_pages}
        onPageChange={handlePageChange}
      />
      <MovieGrid>
        {moviesData.results.map(movie => (
          <MovieCard key={movie.id} movie={{
            id: movie.id,
            title: movie.title,
            image: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : undefined,
            year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
            rating: movie.vote_average.toFixed(1)
          }} />
        ))}
      </MovieGrid>
    </MoviesContainer>
  );
};

export default SearchResults;
