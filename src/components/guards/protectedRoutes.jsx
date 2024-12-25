import React from 'react';
import {userData} from '../../constants';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    if (userData) {
        return true
    } else {
        return false
    }
}

const ProtectedRoutes = (props: any) => {

    const auth = useAuth()

    return auth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes;
