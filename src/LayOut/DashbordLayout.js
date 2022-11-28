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
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        { !isSeller && <li><Link to='/dashbord/myorders' >My Orders</Link ></li>}
                        { isSeller &&  <li><Link to='/dashbord/myproducts'> My Products </Link> </li>}
                        { isSeller &&  <li><Link to='/dashbord/addproducts'> Add Products</Link> </li>}
                         
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;