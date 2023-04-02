import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

/**
 * Redirects to login page if user is not logged in.
 * @param {*} children - The component with all elements of the page. 
 */
const Protected = ({ children }) => {
    const { user } = UserAuth();
    if (!user) {
        return <Navigate to='/' />;
    }
    return children;
};

export default Protected;