import { Navbar } from './components';
import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
