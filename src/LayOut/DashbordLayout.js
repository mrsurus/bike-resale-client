import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { AuthContext } from "../contexts/AuthProvider";
import useSeller from "../hooks/useSeller";


const DashbordLayout = () => {
    const { user} = useContext(AuthContext)
    const [isSeller,isSellerLoading] =useSeller(user?.email)
    console.log(isSeller);

    if(isSellerLoading){
        return <div>loading...</div>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content bg-green-500">
                        
                        { !isSeller && <li className="bg-white rounded my-3 hover:bg-gray-300" ><Link to='/dashbord/myorders ' >My Orders</Link ></li>}
                        { isSeller &&  <li className="bg-white rounded my-3 hover:bg-gray-300"><Link to='/dashbord/myproducts'> My Products </Link> </li>}
                        { isSeller &&  <li className="bg-white rounded my-3 hover:bg-gray-300"><Link to='/dashbord/addproducts'> Add Products</Link> </li>}
                        { isSeller &&  <li className="bg-white rounded my-3 hover:bg-gray-300"><Link to='/dashbord/allbuyer'> All Buyer</Link> </li>}
                        { isSeller &&  <li className="bg-white rounded my-3 hover:bg-gray-300"><Link to='/dashbord/allseller'> All Seller</Link> </li>}
                         
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;