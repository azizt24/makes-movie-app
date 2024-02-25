import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';
import { Footer } from './components';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './components';

const errorHandler = (error, errorInfo) => {
  console.error('logging', error, errorInfo);
};

function App() {
  return (
    <div>
      <h1>Movie App</h1>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Footer />
        <RouterProvider router={router} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
