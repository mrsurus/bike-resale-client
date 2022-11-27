import React, { useContext } from 'react';
import {  Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(user){
       return children
        
    }

    if(loading){
        return <div>loading...</div>
    }
    return (
        <div>
            
            <Navigate to='/login' state={{from:location}} replace></Navigate>
        </div>
    );
};

export default PrivateRoute;