
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/RouteConfig';
import { Footer, Navbar } from './components';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <Navbar isToggled={isToggled} setIsToggled={setIsToggled} />
      <h1>Movie App</h1>
      <RouterProvider router={router} />
      <Footer isToggled={isToggled} /> 
    </div>
  );
}

export default App;