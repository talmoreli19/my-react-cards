// SignInForm.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/auth.context';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignInForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const userData = await login({
        email: formData.email,
        password: formData.password,
      });

      // Redirect to the previous page or home
      const redirectLocation = location.state?.from || '/';
      navigate(redirectLocation);

      // Display welcome toast
      toast.success(`Welcome, ${userData.name.first}!`);
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRememberMe">
          <Form.Check
            type="checkbox"
            label="Remember Me"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </Button>
      </Form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p className="mt-3">
        Don't have an account? <Link to="/sign-up">Sign Up here</Link>
      </p>

      <p className="mt-3">
        <Link to="/password-reset">Forgot your password? Reset it here</Link>
      </p>

      {/* ToastContainer for displaying notifications */}
      <ToastContainer />
    </div>
  );
}

export default SignInForm;
