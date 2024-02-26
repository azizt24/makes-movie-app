import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig'; 
import '../src/styles/global.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div>
       
      <div />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
