// cardsService.js
import httpService from './httpService';

const CARDS_API_BASE_URL = '/cards'; // Replace with your actual API endpoint

export async function getAllCards() {
  return httpService.get(CARDS_API_BASE_URL);
}

export async function getCardById(cardId) {
  return httpService.get(`${CARDS_API_BASE_URL}/${cardId}`);
}

export async function createCard(cardData) {
  return httpService.post(CARDS_API_BASE_URL, cardData);
}

export async function updateCard(cardId, cardData) {
  return httpService.put(`${CARDS_API_BASE_URL}/${cardId}`, cardData);
}

export async function deleteCard(cardId) {
  return httpService.delete(`${CARDS_API_BASE_URL}/${cardId}`);
}

const cardsService = {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
};

export default cardsService;
