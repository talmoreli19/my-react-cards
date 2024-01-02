import React from 'react';
import { useAuth } from '../context/auth.context';
import { Link, useNavigate } from 'react-router-dom';

function SignOutButton() {
 const { logout } = useAuth();
 const navigate = useNavigate();

 const handleSignOut = async () => {
    await logout();
    navigate('/sign-in');
 };

 return (
    <button onClick={handleSignOut} className="btn btn-danger">
      Sign Out
    </button>
 );
}

export default SignOutButton;