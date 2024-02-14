import { createBrowserRouter } from 'react-router-dom';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
//mock components

const SharedLayout = () => {
  return <MoviesPage />;
};

const Error = () => {
  return <div>Error</div>;
};

const Home = () => {
  return <div>Home</div>;
};

const Movie = () => {
  return <div>Movie</div>;
};

const Movies = () => {
  return <div>Movies</div>;
};

const TvShows = () => {
  return <div>Tv Shows</div>;
};

const MovieListSearch = () => {
  return <div>Movie List Search</div>;
};

const PopularActors = () => {
  return <div>Popular Actors</div>;
};

const ActorMovies = () => {
  return <div>Actor Movies</div>;
};

const AIGeneratedMovies = () => {
  return <div>AI Generated Movies</div>;
};

const AIGeneratedMoviesByCategory = () => {
  return <div>AI Generated Movies By Category</div>;
};

const Watch = () => {
  return <div>Watch</div>;
};

const SavedMovies = () => {
  return <div>Saved Movies</div>;
};

const Settings = () => {
  return <div>Settings</div>;
};

const AdvancedSearch = () => {
  return <div>Advanced Search</div>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'movie/:id',
        element: <Movie />,
      },
      {
        path: 'movies/:category/page/:page',
        element: <Movies />,
      },
      {
        path: 'tv/:category/page/:page',
        element: <TvShows />,
      },
      {
        path: 'search/:type/:query/page/:page',
        element: <MovieListSearch />,
      },
      {
        path: 'popular-actors/page/:page',
        element: <PopularActors />,
      },
      {
        path: 'movies/actors/:name/page/:page',
        element: <ActorMovies />,
      },
      {
        path: 'ai-generated-movies',
        element: <AIGeneratedMovies />,
      },
      {
        path: 'ai-generated-movies/:categoryName',
        element: <AIGeneratedMoviesByCategory />,
      },
      {
        path: 'watch/:id',
        element: <Watch />,
      },
      {
        path: 'savedmovies',
        element: <SavedMovies />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'advanced-search',
        element: <AdvancedSearch />,
      },
    ],
  },
]);

export default router;
