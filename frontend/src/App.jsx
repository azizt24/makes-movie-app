import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';
import { Footer } from './components';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './components/ErrorBoundary/Fallback';
import logger from '../../backend/config/logger';

const errorHandler = (error, errorInfo) => {
logger.info('logging' , error , errorInfo);
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
