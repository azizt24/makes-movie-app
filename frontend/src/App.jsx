import { RouterProvider } from 'react-router-dom';
<<<<<<< HEAD
import router from './routes/RouteConfig';
import { Footer } from './components';
import router from './routes/RouteConfig';
=======
import router from './routes/RouteConfig'; 
import '../src/styles/global.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
>>>>>>> fad0ea345c3f2be87bcc249dd1486f3215979375
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './components';

const errorHandler = (error, errorInfo) => {
  console.error('logging', error, errorInfo);
};

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
