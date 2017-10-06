import { AsyncStorage } from 'react-native'
import { createId,timeToString } from "./helpers"
import { setDummyData, DECKS_STORAGE_KEY } from './_FlashCard'



export function fetchDecks () {
  // get all of the items
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(setDummyData)
    }


export function submitEntry ({ key, entry }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}



export function removeEntry (key) {
   return AsyncStorage.getItem(DECKS_STORAGE_KEY) // get everything at this key location
   .then((results) => {
     console.log(results) // return {"2017-09-23":{"run":0,"bike":1,"swim":100,"eat":4,"sleep":10}}
     const data = JSON.parse(results)
     console.log(data[key]) // {run: 0, bike: 1, swim: 100, eat: 0, sleep: 0}
     data[key] = undefined
     console.log(data[key]) // undefiend
     delete data[key]
     console.log(data[key]) // undefined
     AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))


   })
}

// here, I want to remove the item at this key from our AsyncStorage
// CALENDAR_STORAGE_KEY or all these stuff at calendar_storage_key
// is going be all of our data after I removed the item at the specific day
// and we have stringified it.

// var myObj = { name:"John", age:31, city:"New York" };
// myObj["name"] = undefined
// myObj
// {name: undefined, age: 31, city: "New York"}

// data[key] = undefined
//[key]: entry,
// => key: undefined
