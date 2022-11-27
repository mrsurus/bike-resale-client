import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Routes/Route/Route';

function App() {
  return <RouterProvider router={router}>

  </RouterProvider>
}

export default App;