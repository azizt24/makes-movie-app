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
        path : '/',
        element :  <SharedLayout /> , 
        errorElement : <Error /> , 
        children : [ 
            {
                index : true, 
                element : <Home />, 
            },
            {
                path : 'movie', 
                element : <Movies />, 
            }, 
            {
                path : 'movie/:id', 
                element : <Movie /> 
            }, 
            {
                path : 'settings', 
                element : <Settings />
            }, 
            {
                path : 'advanced-search', 
                element : <AdvancedSearch /> 
            }

        ]
    }
]); 
export default router; 
 