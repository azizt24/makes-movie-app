import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';
import '../src/styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './components';
import { useSelector } from 'react-redux';



const errorHandler = (error, errorInfo) => {
  console.error('logging', error, errorInfo);
};

function App() {

  const theme = useSelector((state) => state.ui.theme); 
  document.documentElement.setAttribute('data-theme', theme);

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
