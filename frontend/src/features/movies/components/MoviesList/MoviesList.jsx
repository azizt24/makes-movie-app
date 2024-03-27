import { MovieGrid } from './MoviesList.styles';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = ({ movies }) => {
 
  if (!Array.isArray(movies) || movies.length === 0) {
    return <div>No movies to display.</div>;
  }

  return (
    <MovieGrid>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieGrid>
  );
};

export default MoviesList;
