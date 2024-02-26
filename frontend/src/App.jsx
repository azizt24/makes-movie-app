
import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';
<<<<<<< HEAD
=======
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> f8b6c607ef4c77276e435f2cb8d8de4272e45ce8

function App() {
  return <RouterProvider router={router} />;
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;