// cardDelete.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cardsService from '../services/cardsService'; // Add this import statement

function CardDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const fetchedCard = await cardsService.getCardById(id);
        setCard(fetchedCard);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching card:', error);
        setLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  const handleDelete = async () => {
    try {
      await cardsService.deleteCard(id);
      navigate('/my-cards');
    } catch (error) {
      console.error('Error deleting card:', error);
      // Handle the error, show a message, or redirect to an error page
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Add a loading indicator here
  }

  return (
    <div>
      <h2>Delete Card</h2>
      {card ? (
        <div>
          <p>Are you sure you want to delete the card with ID: {id}?</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <p>Card not found.</p>
      )}
    </div>
  );
}

export default CardDelete;
