import { AsyncStorage } from 'react-native';
import { setDummyData, DECKS_STORAGE_KEY } from './_FlashCard';

export function fetchDecks() {
  // get all of the items
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(setDummyData);
}

export function submitEntry({ key, entry }) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
}

export function removeEntry(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY) // get everything at this key location
    .then(results => {
      const data = JSON.parse(results);
      data[key] = undefined;
      delete data[key];
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    });
}
