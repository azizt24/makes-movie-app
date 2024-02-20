import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig'; 
 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div>
      <h1>Movie App</h1>
      <Footer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
