// cardsedit.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cardsService from '../services/cardsService';

function CardsEdit() {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const [cardData, setCardData] = useState({
    name: '',
    // Add other fields as needed
  });

  useEffect(() => {
    // Fetch card data by ID and update state
    const fetchCardData = async () => {
      try {
        const response = await cardsService.getCardById(cardId);
        setCardData(response.data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardData();
  }, [cardId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update card data
      await cardsService.updateCard(cardId, cardData);
      // Redirect to My Cards page after successful update
      navigate('/my-cards');
    } catch (error) {
      console.error('Error updating card:', error);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <h2>Edit Business Card</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for editing card */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={cardData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other form fields as needed */}

        <button type="submit" className="btn btn-primary">
          Update Card
        </button>
      </form>
    </div>
  );
}

export default CardsEdit;
