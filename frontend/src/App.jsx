import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';
import { Footer } from './components';
import router from './routes/RouteConfig';
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
