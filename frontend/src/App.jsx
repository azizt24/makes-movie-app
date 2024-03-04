import { RouterProvider } from 'react-router-dom';
<<<<<<< HEAD
import router from './routes/RouteConfig';
<<<<<<< HEAD
=======
=======
import router from './routes/RouteConfig'; 
import '../src/styles/global.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
>>>>>>> bb90b1ecba24f5e300258f29b84c2630b2007314
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './components';

const errorHandler = (error, errorInfo) => {
  console.error('logging', error, errorInfo);
};

function App() {
  return <RouterProvider router={router} />;
  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <ToastContainer />
        <RouterProvider router={router} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
