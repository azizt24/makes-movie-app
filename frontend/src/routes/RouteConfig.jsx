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
          path: 'movie',
          children: [
            {
              path: ':id',
              element: <Movie />,
            },
          ],
        },
        {
          path: 'movies/:category/page/:page',
          children: [
            {
              path: ':category/page',
              children: [
                {
                      path: ':page',
                      element: <Movies />,
                },
              ],
            },
          ],
        },
        {
          path: 'tv',
          children: [
            {
              path: ':category/page',
              children: [
                    {
                      path: ':page',
                      element: <TvShows />,
                    },
                  ],
            },
          ],
        },
        {
          path: 'search',
          children: [
            {
              path: ':type',
              children: [
                {
                  path: ':query/page',
                  children: [
                        {
                          path: ':page',
                          element: <MovieListSearch />,
                        },
                  ],
                },
              ],
            },
          ],
        },
        {
          path: 'popular-actors/page',
          children: [
                {
                  path: ':page',
                  element: <PopularActors />,
                },
          ],
        },
        {
          path: 'movies/actors',
          children: [
            {
              path: ':name/page',
              children: [
                    {
                      path: ':page',
                      element: <ActorMovies />,
                    },
              ],
            },
          ],
        },
        {
          path: 'ai-generated-movies',
          children: [
            {
              path: ':categoryName',
              element: <AIGeneratedMoviesByCategory />,
            },
          ],
        },
        {
          path: 'watch',
          children: [
            {
              path: ':id',
              element: <Watch />,
            },
          ],
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
