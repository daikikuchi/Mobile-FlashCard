import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { red, orange, blue, lightPurp, pink, white } from './colors'
import { Notifications, Permissions } from 'expo'





export function createId () {
   const id = Math.random().toString(36).substr(-8);
   return  id
}

export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}

export const objectToArray = obj => {
  if (obj) return Object.keys(obj).map(key => obj[key])
  else return []
}



export function getDailyReminderValue () {
  return {
    today: "👋 Don't forget to log your data today!"
  }
}


export function getDeckInfo (title) {
  const deck = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}



  return typeof title === 'undefined'
    ? deck
    : deck[title]
}

// what these objects are going to contain is they are going to container
// any information that is going to help us build the ui for specific form.

// metric = 'run'
// "run"
// typeof metric
// "string"
// metric = undefined
// type of metric
// undefined
