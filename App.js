import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { View, StatusBar,Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import reducer from './reducers'
import { Constants } from 'expo'
import { FontAwesome, Ionicons,Foundation } from '@expo/vector-icons'
import { orange,purple,white } from './utils/colors'
import AddDeck from './components/AddDeck'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NoDeck from './components/NoDeck'
import AddCard from './components/AddCard'
import QuizView from './components/QuizView'

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck',
      tabBarIcon: ({ tintColor }) => <Foundation name='page-multiple' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
 },{
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? orange : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : orange,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}
)

const MainNavigator = StackNavigator({
   Home: {
     screen: Tabs,
   },
   DeckDetail: {
     screen: DeckDetail,
     navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange,

      }
    }
     },
   NoDeck: {
     screen: NoDeck,
   },
   AddCard: {
     screen: AddCard,
     navigationOptions: {
      title: 'AddCard',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange,
      }
    }
   },
   QuizView: {
     screen: QuizView,
     navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange,
      }
    }
   },
})

function FlashCardBar({ backgroundColor, ...props }) {
 return (
   <View style={{backgroundColor, height: Constants.statusBarHeight}}>
     <StatusBar translucent backgroundColor={backgroundColor} {...props} />
   </View>
 )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
        <FlashCardBar backgroundColor={orange} barStyle='light-content' />
        <MainNavigator  />
      </View>
    </Provider>
    );
  }
}
