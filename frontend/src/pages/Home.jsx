import { useFetch } from '../features/movies/hooks/useFetch.js';
const Home = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const HIGHEST_RATED_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=`;

  const {
    data: movies,
    isPending,
    isError,
    error,
  } = useFetch(HIGHEST_RATED_MOVIES);

  if (isPending) return <div>Pending...</div>;
  if (isError) return <div>Error fetching movies: {error.message}</div>;

  return (
    <div>
      <h2>Popular Movies:</h2>
      <ul>
        {movies &&
          movies.results.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </div>
  );
};
export default Home;
