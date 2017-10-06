import { NEW_DECK , RECEIVE_DECKS, REMOVE_DECK, NEW_CARD} from '../actions'
import { submitEntry  } from '../utils/api'

export default function decks (state = {}, action) {
const { title, question, answer } = action

  switch (action.type) {
  // deck case
    case RECEIVE_DECKS:
    console.log(state)
      return {
        ...state,
        ...action.decks,
      }
    case NEW_DECK:
    return {
      ...state,
    [title]:{
      title,
      questions: [],
      }
    }

    case REMOVE_DECK: {
    return {
      ...state,
      [title]: {
        title: null,
      }
    }
  }
  // card case
  case NEW_CARD:  {

      submitEntry({ key: title, entry: { title, questions: [{ result: null, question, answer }, ...state[title].questions] } })
      return {
        ...state,
        [title]: {
          title,
          questions: [{ result: null, question, answer }, ...state[title].questions]
        }
      }
    }




    default :
    return  {
      state
    }
  }
}
