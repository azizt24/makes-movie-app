import { useState, useEffect } from 'react'; 
import { useQuery } from 'react-query';
import {
  PaginationWrapper,
  PaginationButton,
  NumberButton,
  NumberContainer,
  MovieGrid,
} from './Pagination.style';
import MovieCard from '../MovieCard/MovieCard';

import MoviesButtons from '../../components/MoviesButtons/MoviesButtons';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

const [displayLatest, setDisplayLatest] = useState(true);



  useEffect(() => {
    setCurrentPage(1);
  }, [displayLatest]);


const fetchMovies = async (key, page = currentPage) => {
  let apiUrl;
  if (displayLatest) {
    apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=033a7d652a60b8f9fe88c99d78506501&language=en-US&sort_by=vote_average.desc&vote_average.desc&vote_count.gte=1000&include_adult=false&include_video=false&page=${page}`;
  } else {
    apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=033a7d652a60b8f9fe88c99d78506501&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
  }
  const response = await fetch(apiUrl);
  const data = await response.json();
  setMovies(data.results);
  return data;
};



  const { data, isLoading, isError } = useQuery(
    ['movies', currentPage, displayLatest],
    fetchMovies
  );

   
  const totalPages = data ? 205 : 1;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handleFirstPage = () => {
    if (!isFirstPage) {
      setCurrentPage(1);
    }
  };

  const handlePrevPage = () => {
    if (!isFirstPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    if (!isLastPage) {
      setCurrentPage(205);
    }
  };


  const handleLatestClick = () => {
    setDisplayLatest(true);
  };

  const handleHighestRatedClick = () => {
    setDisplayLatest(false);
  };


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <MoviesButtons
        onLatestMovies={handleLatestClick}
        onHighestRated={handleHighestRatedClick}
      />
      <PaginationWrapper>
        <PaginationButton onClick={handlePrevPage} disabled={isFirstPage}>
          Prev
        </PaginationButton>
        <PaginationButton onClick={handleFirstPage} disabled={isFirstPage}>
          First
        </PaginationButton>

        <NumberContainer>
          {Array.from({ length: 9 }, (_, i) => {
            let offset = Math.floor(9 / 2);
            let pageNumber;

            if (currentPage === totalPages) {
              pageNumber = currentPage - 8 + i;
            } else if (currentPage > totalPages - 5) {
              pageNumber = totalPages - 8 + i;
            } else if (currentPage === 1 || currentPage < 5) {
              pageNumber = 1 + i;
            } else {
              pageNumber = currentPage - offset + i;
            }

            const isCurrentPage = pageNumber === currentPage;

            return (
              <NumberButton
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                disabled={pageNumber <= 0 || pageNumber > totalPages}
                isCurrentPage={isCurrentPage}
              >
                {pageNumber}
              </NumberButton>
            );
          })}
        </NumberContainer>

        <PaginationButton onClick={handleLastPage} disabled={isLastPage}>
          Last
        </PaginationButton>
        <PaginationButton onClick={handleNextPage} disabled={isLastPage}>
          Next
        </PaginationButton>
      </PaginationWrapper>
      <div>
        <MovieGrid>
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </MovieGrid>
      </div>
    </div>
  );
};

export default Pagination;





