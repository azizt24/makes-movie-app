import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';
import { Footer } from './components';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Movie App</h1>
        <Footer />
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
