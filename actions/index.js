export const NEW_DECK = 'new_deck';
export const RECEIVE_DECKS = 'receive_decks';
export const REMOVE_DECK = 'remove_deck';
export const NEW_CARD = 'new_card';
export const PLAY_CARD = 'play_card';

export function addDeck({ title }) {
  return { type: NEW_DECK, title };
}

export function receiveDecks(decks) {
  return { type: RECEIVE_DECKS, decks };
}

export function removeDeck({ title }) {
  return { type: REMOVE_DECK, title };
}

// Card action creator.

export function addCard({ title, question, answer }) {
  return { type: NEW_CARD, title, question, answer };
}

export function playCard({ title, question, result }) {
  return { type: PLAY_CARD, title, question, result };
}
