import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig'; 
import { Footer } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <Footer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
