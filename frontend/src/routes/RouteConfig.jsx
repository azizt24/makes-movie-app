import { createBrowserRouter } from 'react-router-dom';
import { SharedLayout } from '../components';
import {
  Error,
  Home,
  MoviesPage,
  MoviePage,
  AdvancedSearch,
  SearchResults,
  Settings,
} from '../pages'; 

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
      // {
      //   path: 'popular-actors/page/:page',
      //   element: <PopularActors />,
      // },
      // {
      //   path: 'saved-movies',
      //   element: <SavedMovies />,
      // },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'advanced-search',
        element: <AdvancedSearch />,
      },
      {
        path: '/search/results',
        element: <SearchResults />,
      },
    ],
  },
]); 

export default router;
