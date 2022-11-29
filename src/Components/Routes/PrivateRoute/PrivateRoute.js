import React, { useContext } from 'react';
import {  Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(user){
       return children
        
    }

    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            
            <Navigate to='/login' state={{from:location}} replace></Navigate>
        </div>
    );
};

export default PrivateRoute;