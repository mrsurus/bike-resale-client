import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {user ?
            <>
                <li><Link to="/dashbord">Dashboard</Link></li>
                <li><button onClick={handleLogOut} >Sign out</button></li>
            </> :
            <li><Link to="/login">Login</Link></li>

        }
    </>



    return (
        <div>
            <div className="navbar bg-violet-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className='w-10 ml-10'><img className='w-full' src="https://w7.pngwing.com/pngs/398/945/png-transparent-suzuki-motorcycle-favicon-a-motorcycle-motorcycle-cartoon-motorcycle-vector-motorcycle-helmet.png" alt="" /></div>
                    <Link className="btn btn-ghost normal-case text-3xl font-bold ">RR. Bike</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-bold text-lg ">
                        {menuItems}
                    </ul>
                </div>
                <div className='navbar-end'>
                    <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <p><small className='text-blue-900'>Dashbord</small></p>
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Navbar;