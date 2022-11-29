import DashbordLayout from "../../../LayOut/DashbordLayout";
import AddProducts from "../../Dashbord/AddProducts/AddProducts";
import AllBuyer from "../../Dashbord/AllBuyer/AllBuyer";
import AllSeller from "../../Dashbord/AllSeller/AllSeller";
import Dashbord from "../../Dashbord/Dashbord/Dashbord";
import MyOrders from "../../Dashbord/MyOrders/MyOrders";
import MyProducts from "../../Dashbord/MyProducts/MyProducts";
import Blog from "../../Pages/Blog/Blog";
import Products from "../../Pages/Home/Products/Products";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/category/:brand',
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`),
                element:<PrivateRoute><Products></Products></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashbord',
        element: <PrivateRoute><DashbordLayout></DashbordLayout></PrivateRoute>,
        children: [
            {
                path: '/dashbord',
                element: <Dashbord></Dashbord>
            },
            {
                path: '/dashbord/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashbord/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashbord/addproducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashbord/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashbord/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            
        ]
    }
])
export default router;