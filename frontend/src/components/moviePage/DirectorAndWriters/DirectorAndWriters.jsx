import { DirectorWriters } from './DirectorAndWritersStyles';

const DirectorAndWriters = ({ movie }) => {
  return (
    <DirectorWriters>
      <p>Director: {movie.Director}</p>
      <p>Writer: {movie.Writer}</p>
    </DirectorWriters>
  );
};

export default DirectorAndWriters;
