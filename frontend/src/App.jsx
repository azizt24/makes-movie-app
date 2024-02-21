
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';
import { Footer, Navbar } from './components';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;