import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';

function App() {
  return <RouterProvider router={router} />;
  return (
    <div>
      <h1>Movie App</h1>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
