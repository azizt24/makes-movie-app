import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';
import { Footer, Navbar } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Movie App</h1>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
