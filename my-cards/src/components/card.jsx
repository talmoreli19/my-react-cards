// BusinessCard.jsx
import React from 'react';
import BootstrapCard from 'react-bootstrap/Card';

function BusinessCard({ card }) {
  return (
    <BootstrapCard style={{ width: '18rem', margin: '10px' }}>
      {/* Assuming you have an image for the card */}
      {card.image && (
        <BootstrapCard.Img variant="top" src={card.image.url} alt={card.image.alt} />
      )}
      <BootstrapCard.Body>
        <BootstrapCard.Title>{card.name}</BootstrapCard.Title>
        {/* Add other card details based on your data */}
        <BootstrapCard.Text>
          <strong>Email:</strong> {card.email}
        </BootstrapCard.Text>
        <BootstrapCard.Text>
          <strong>Phone:</strong> {card.phone}
        </BootstrapCard.Text>
        {/* Add more card details as needed */}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default BusinessCard;
