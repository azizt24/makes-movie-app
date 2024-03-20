import Title from './../../components/layout/Title/TItle';
import { useState } from 'react';
import axios from 'axios';
import {
  SearchContainer,
  SearchForm,
  Input,
  SubmitButton,
  ResultsContainer,
  MovieCard,
  MovieImage,
  MovieTitle,
  MovieYear,
} from './AdvancedSearch.styles.jsx';

const AdvancedSearch = () => {
  const [searchParams, setSearchParams] = useState({
    fromYear: '',
    toYear: '',
    minRating: '',
    minVotes: '',
    genres: '',
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/movies/search/advanced', {
        params: searchParams,
      });
      setSearchResults(response.data.movies);
    } catch (error) {
      console.error('Failed to fetch search results', error);
    }
  };

  return (
    <SearchContainer>
      <Title title={'advanced search'} />
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fromYear"
          value={searchParams.fromYear}
          onChange={handleChange}
          placeholder="From Year"
        />
        <Input
          type="text"
          name="toYear"
          value={searchParams.toYear}
          onChange={handleChange}
          placeholder="To Year"
        />
        <Input
          type="text"
          name="minRating"
          value={searchParams.minRating}
          onChange={handleChange}
          placeholder="Minimum Rating"
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </SearchForm>
      <ResultsContainer>
        {searchResults.map(movie => (
          <MovieCard key={movie.id}>
            <MovieImage src={movie.image} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieYear>Year: {movie.year}</MovieYear>
          </MovieCard>
        ))}
      </ResultsContainer>
    </SearchContainer>
  );
};

export default AdvancedSearch;
