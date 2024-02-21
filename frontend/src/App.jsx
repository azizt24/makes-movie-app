import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig'; 
// import { Footer } from './components';

function App() {
  return (
    <div>
      {/* <h1>Movie App</h1> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
