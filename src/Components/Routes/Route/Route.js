import Products from "../../Pages/Home/Products/Products";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../../LayOut/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/category/:brand',
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`),
                element:<PrivateRoute><Products></Products></PrivateRoute>
            },
        ]
    }
])
export default router;