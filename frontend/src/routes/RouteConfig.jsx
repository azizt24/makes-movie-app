import { createBrowserRouter } from 'react-router-dom';
import { SharedLayout } from '../components';
import { Error, Home, MoviesPage } from '../pages';
//mock components

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
        path: 'movies',
        children: [
          {
            path: ':id',
            element: <MoviePage />,
          },
          {
            path: ':category/page/:page',
            element: <MoviesPage />,
          },
          {
            path: 'actors/:name/page/:page',
            element: <MoviesPage />,
          },
        ],
      },
      {
        path: 'tv/:category/page/:page',
        element: <TvShows />,
      },
      {
        path: 'popular-actors/page/:page',
        element: <PopularActors />,
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
        path: 'saved-movies',
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
