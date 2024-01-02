// UserInfoPage.jsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth.context';
import { Form, Button } from 'react-bootstrap';

function UserInfoPage() {
  const { getUser, updateUserInfo } = useAuth();
  const [userData, setUserData] = useState({});
  const [editing, setEditing] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({});

  useEffect(() => {
    const fetchUserInfo = async () => {
      const user = await getUser();
      setUserData(user);
    };

    fetchUserInfo();
  }, [getUser]);

  const handleEdit = () => {
    setEditing(true);
    setUpdatedInfo({ ...userData });
  };

  const handleSave = async () => {
    try {
      await updateUserInfo(userData._id, updatedInfo);
      setEditing(false);
    } catch (error) {
      // Handle error
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Information</h2>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" name="email" value={userData.email} readOnly />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={userData.address || ''}
            readOnly={!editing}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone:</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={userData.phone || ''}
            readOnly={!editing}
            onChange={handleChange}
          />
        </Form.Group>

        {editing && (
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        )}

        {!editing && (
          <Button variant="secondary" onClick={handleEdit}>
            Edit Information
          </Button>
        )}
      </Form>
    </div>
  );
}

export default UserInfoPage;
