import { DirectorWriters } from './DirectorAndWritersStyles';

const DirectorAndWriters = ({ movie }) => {
  return (
    <DirectorWriters>
      <p>Director: {movie.director}</p>
      <p>Writer: {movie.writer}</p>
    </DirectorWriters>
  );
};

export default DirectorAndWriters;
