import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardsService from '../services/cardsService';

const CardsCreate = () => {
 const [name, setName] = useState('');
 const [desc, setDesc] = useState('');
 const [url, setUrl] = useState('');
 const [category, setCategory] = useState('');
 const [tags, setTags] = useState('');

 const navigate = useNavigate();

 const handleChange = async (e) => {
    e.preventDefault();
    try {
      await cardsService.createCard({ name, desc, url, category, tags });
      navigate('/my-cards');
    } catch (error) {
      console.error('Error:', error);
    }
 };

 return (
    <div>
      <h1>Create Card</h1>
      <form onSubmit={handleChange}>
        {/* your form fields */}
        <button type="submit">Create Card</button>
      </form>
    </div>
 );
};

export default CardsCreate;