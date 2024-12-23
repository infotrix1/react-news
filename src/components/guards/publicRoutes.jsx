import React from 'react';
import data from '../constants';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    if (data.applicant) {
        return true
    } else {
        return false
    }
}

const PublicRoutes = (props: any) => {

    const auth = useAuth()

    return auth ? <Navigate to="/applicationportal/dashboard" /> : <Outlet />
}

export default PublicRoutes;
