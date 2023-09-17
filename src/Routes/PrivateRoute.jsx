import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const { user, loading } = useContext(AuthContext)

   console.log('location for private route :-',location);

    if (loading) {
        return<div className='w-full min-h-screen flex justify-center items-center'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;