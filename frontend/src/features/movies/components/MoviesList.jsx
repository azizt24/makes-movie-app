import MovieCard from '../../../components/MovieCard/MovieCard';
import { MovieGrid } from './MoviesList.styles';

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
