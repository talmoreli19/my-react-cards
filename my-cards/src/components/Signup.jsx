// SignUp.jsx
import React from 'react';
import SignUpForm from './SignUpForm'; // Adjust the path based on your actual directory structure

import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <SignUpForm />

      <p className="mt-3">
        Already have an account? <Link to="/sign-in">Sign In here</Link>
      </p>
    </div>
  );
}

export default SignUp;
