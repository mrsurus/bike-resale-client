
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Routes/Route/Route';
import{ Toaster } from 'react-hot-toast';

function App() {
  return <RouterProvider router={router}>
    <Toaster></Toaster>

  </RouterProvider>
}


export default App;
