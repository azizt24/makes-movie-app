import { DirectorWriters } from './DirectorAndWritersStyles';

const DirectorAndWriters = ({ movie }) => {
  return (
    <DirectorWriters>
      {movie.director && (<p>Director: {movie.director}</p>)}
     {movie.writer && ( <p>Writer: {movie.writer}</p>)}
    </DirectorWriters>
  );
};

export default DirectorAndWriters;
