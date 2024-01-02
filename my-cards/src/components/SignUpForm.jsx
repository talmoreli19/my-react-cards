import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth.context';
import { Form, Button } from 'react-bootstrap';

function SignUpForm() {
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    phone: '',
    state: '',
    city: '',
    street: '',
    house_number: '',
    zip: '',
    country: '',
    image_url: '',
    image_alt: '',
    isBusiness: false,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
      // Call the onSubmit method with the form data
      await onSubmit(formData);
      // Redirect to the home page or another desired route after successful sign-up
      navigate('/');
    } catch (error) {
      setError('Error during sign-up. Please try again.');
    }
  };

  const onSubmit = async (values) => {
    console.log(values);
    // Construct the serverBody object based on the provided values
    const serverBody = {
      name: {
        first: values.first_name,
        middle: values.middle_name,
        last: values.last_name,
      },
      email: values.email,
      phone: values.phone,
      password: values.password,
      address: {
        state: values.state,
        city: values.city,
        street: values.street,
        houseNumber: values.house_number,
        zip: values.zip,
        country: values.country,
      },
      image: {
        url: values.image_url,
        alt: values.image_alt,
      },
      isBusiness: values.isBusiness,
    };    

    // Call the signUp method with the serverBody object
    await signUp(serverBody);
  };

  return (
    <Form onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMiddleName">
        <Form.Label>Middle Name:</Form.Label>
        <Form.Control
          type="text"
          name="middle_name"
          value={formData.middle_name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone:</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formState">
        <Form.Label>State:</Form.Label>
        <Form.Control
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCity">
        <Form.Label>City:</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formStreet">
        <Form.Label>Street:</Form.Label>
        <Form.Control
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formHouseNumber">
        <Form.Label>House Number:</Form.Label>
        <Form.Control
          type="text"
          name="house_number"
          value={formData.house_number}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formZip">
        <Form.Label>Zip:</Form.Label>
        <Form.Control
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCountry">
        <Form.Label>Country:</Form.Label>
        <Form.Control
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImageUrl">
        <Form.Label>Image URL:</Form.Label>
        <Form.Control
          type="url"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImageAlt">
        <Form.Label>Image Alt:</Form.Label>
        <Form.Control
          type="text"
          name="image_alt"
          value={formData.image_alt}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formIsBusiness">
        <Form.Check
          type="checkbox"
          label="Is Business"
          name="isBusiness"
          checked={formData.isBusiness}
          onChange={(e) => setFormData({ ...formData, isBusiness: e.target.checked })}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p className="mt-3">
        Already have an account? <Link to="/sign-in">Sign In here</Link>
      </p>
    </Form>
  );
}

export default SignUpForm;
