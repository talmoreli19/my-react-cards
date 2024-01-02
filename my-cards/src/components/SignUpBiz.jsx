// SignUpBiz.jsx
import React from 'react';
import SignUpFormBiz from './SignUpformBiz';// Assuming you have a SignUpFormBiz component
import { Link } from 'react-router-dom';

function SignUpBiz() {
  return (
    <div>
      <h2>Sign Up for Business</h2>
      <SignUpFormBiz />

      <p className="mt-3">
        Already have an account?{' '}
        <Link to="/sign-in">Sign In here</Link>
      </p>
    </div>
  );
}

export default SignUpBiz;
