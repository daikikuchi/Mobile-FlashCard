import React, {Component} from 'react'
import { View, Text,StyleSheet,Alert } from 'react-native'
import { connect } from 'react-redux';
import { Container, Button } from './common'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
      const { deckTitle } = navigation.state.params


      return {
         title: deckTitle
      }
  }

  render() {
    console.log(this.props)
    // Navigation
    const { navigation } = this.props
    const {title, questions } = this.props.deck
    const { deckText,cardText,detailContainer } = styles

    return(
      <View style={detailContainer}>
        <Container style={{flexDirection:'column'}}>
            <Text style={deckText}>{title}</Text>
             <View style={{flexDirection: 'row'}}>
                <Text style={cardText}>{questions.length} cards</Text>
              </View>
        </Container>
        <View>
          <Button onPress={() => navigation.navigate(
              'AddCard',
              {title}
            )}
          >
          Add Card
        </Button>
        <Button onPress={() => {
       if(questions.length ===　0 ) {
         Alert.alert　(
                    'Please add a card',
                    null,
                    [{text: 'OK'}],
                    { cancelable: false }
                  )
       } else {
         navigation.navigate(
          'QuizView',
          {title}
        )
      }
    }}
    >Start Quiz</Button>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
   deckText: {
    fontSize: 25,
    justifyContent:'center',
    alignItems: 'center',
    width:350,
    height:100
  },
  detailContainer: {
    flex:1,
  　justifyContent:'space-around',
　　flexDirection: 'column',
  },
  cardText: {
     fontSize: 15,
     flex:1
  },
})


function mapStateToProps(decks,{ navigation }) {

  console.log(decks)
  const { deckTitle } = navigation.state.params
  // const deck = decks[deckTitle]
  // console.log(deck)
  // const {deckTitle} = navigation.state.params)
  console.log(deckTitle)
  // console.log(decks)

   return { deck: decks[deckTitle] };

};


export default connect(mapStateToProps,
null,
)(DeckDetail)
