import { MovieGrid } from './MoviesList.styles';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = ({ movies }) => {
  return (
    <MovieGrid>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MovieGrid>
  );
};
export default MoviesList;
