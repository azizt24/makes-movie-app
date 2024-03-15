import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './components';
import useAuth from './components/useAuth';

const errorHandler = (error, errorInfo) => {
  console.error('logging', error, errorInfo);
};

function App() {
  const auth = useAuth();
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
