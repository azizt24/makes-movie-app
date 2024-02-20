import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig'; 
import { Footer } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <h1>Movie App</h1>
      <Footer />
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
