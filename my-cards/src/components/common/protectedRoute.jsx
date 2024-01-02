// ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/auth.context';

function ProtectedRoute({ onlyBiz, ...props }) {
  const { isAuthenticated, isBusinessUser } = useAuth(); // Change here

  if (onlyBiz && (!isAuthenticated || !isBusinessUser)) {
    // Redirect to the home page if the user is not a business user
    return <Navigate to="/" />;
  }

  if (!isAuthenticated) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/sign-in" />;
  }

  // Render the route if the user is authenticated and meets the criteria
  return <Route {...props} />;
}

export default ProtectedRoute;
