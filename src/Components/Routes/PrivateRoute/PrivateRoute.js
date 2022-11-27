import React, { useContext } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    if(!user){
       return navigate('/login')
        
    }

    if(loading){
        return <div>loading...</div>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;