export const NEW_DECK = "new_deck"
export const RECEIVE_DECKS = "receive_decks"
export const REMOVE_DECK = 'remove_deck'
export const NEW_CARD = 'new_card'

export function addDeck({title}) {
  console.log(title)
  return {
    type: NEW_DECK,
    title,
  }
}

export function receiveDecks(decks) {
  console.log(decks)
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function removeDeck({ title }) {
  console.log(title)
  return {
    type: REMOVE_DECK,
    title,
  }
}

// Card action creator.

export function addCard({ title, question, answer }) {
  console.log(question)
  return {
    type: NEW_CARD,
    title,
    question,
    answer,
  }
}
