// MyCards.jsx
import React, { useEffect, useState } from 'react';
import BusinessCard from './card';
import cardsService from '../services/cardsService'; // Add this line

function MyCards() {
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    // Fetch user cards from your API or service
    // Example: cardsService.getMyCards()
    // Make sure to replace the following line with the actual API call
    const fetchUserCards = async () => {
      try {
        // Replace with the actual API call
        const response = await cardsService.getMyCards();
        setUserCards(response.data); // Assuming the API response contains an array of cards
      } catch (error) {
        console.error('Error fetching user cards:', error);
      }
    };

    fetchUserCards();
  }, []);

  return (
    <div>
      <h2>My Business Cards</h2>
      {userCards.length === 0 ? (
        <p>No business cards found.</p>
      ) : (
        <div>
          {userCards.map((card) => (
            <BusinessCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCards;
