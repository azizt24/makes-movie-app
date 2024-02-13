import { createBrowserRouter} from 'react-router-dom';

//mock components

 const SharedLayout = () => {
    return <div>Shared Layout</div>;
  };
  
  const Error = () => {
    return <div>Error</div>;
  };
  
  const Home = () => {
    return <div>Home</div>;
  };
  
  const Movies = () => {
    return <div>Movies</div>;
  };
  
  const Movie = () => {
    return <div>Movie</div>;
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
      // CR - remove this item
      {
        path: 'movie',
        element: <Movies />,
      },
      {
        path: 'movie/:id',
        element: <Movie />,
      },
      /* CR - add these routes:
            'movies/:category/page/:page' - element - Movies
            'tv/:category/page/:page' - element - TvShows
            'search/:type/:query/page/:page' - element - MovieListSearch
            'popular-actors/page/:page' - element - PopularActors
            'movies/actors/:name/page/:page' - element - ActorMovies
            'ai-generated-movies' - element - AIGeneratedMovies
            'ai-generated-movies/:categoryName' - element - AIGeneratedMoviesByCategory
            'watch/:id' - element - Watch
            'savedmovies' - element - SavedMovies
            */
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
 