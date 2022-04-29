import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init'
export default function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();

    if (loading) {
        return <>
            {toast('Please Be patient')}
            < ToastContainer />
        </>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
}