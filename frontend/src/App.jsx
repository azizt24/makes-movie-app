import { RouterProvider } from 'react-router-dom';
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
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <ToastContainer />
        <RouterProvider router={router} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
