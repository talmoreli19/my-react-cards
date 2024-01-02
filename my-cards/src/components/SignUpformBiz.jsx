// SignUpFormBiz.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/auth.context';

function SignUpFormBiz() {
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // Add other fields specific to business sign-up
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signUp({
        // Pass the required user data for business sign-up
        name: formData.name,
        email: formData.email,
        password: formData.password,
        // Include other fields specific to business sign-up
      });

      // Redirect to the business dashboard or another desired route after successful sign-up
    } catch (error) {
      setError('Error during sign-up. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      {/* Add input fields for business sign-up */}
      <div>
        <label htmlFor="name">Business Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add other input fields for business sign-up */}
      <button type="submit">Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default SignUpFormBiz;
