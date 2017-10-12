import React, {Component} from 'react'
import { View, Text,ScrollView,StyleSheet,Dimensions} from 'react-native'
import { connect } from 'react-redux'
import FlipCard from 'react-native-flip-card'
import Swiper from 'react-native-deck-swiper'
import { TextButton,Button } from './common';

import { setLocalNotification, clearLocalNotification } from '../utils/notification'
import { orange,purple,white,red, gray } from '../utils/colors'
const { width, height } = Dimensions.get('window')
import { playCard } from '../actions/index'


class QuizView extends Component {
  state = {
    total: '',
    flashCards: [],
  }

  componentDidMount() {
    const { deck } = this.props
    const selectedQuestions = deck.questions.filter(question => question.result === null)
    console.log(selectedQuestions)

    this.setState({
      flashCards: selectedQuestions,
      total: selectedQuestions.length,
    })
  }

  renderCard = (card) => {
    if (card) {
      return (
        <ScrollView>
          <FlipCard
            style={styles.flipCard}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
          >
            <View style={styles.flipSide}>
              <Text style={styles.flipFace}>{card.question}</Text>
            </View>
            <View style={styles.flipSide}>
              <Text style={styles.flipBack}>{card.answer}</Text>
            </View>
          </FlipCard>
        </ScrollView>
      )
    }
  }


  render() {
    console.log(this.props)
    // state
    const { flashCards, total } = this.state
    console.log(flashCards)

    // from Connect(Store)
    const { deck, playCard} = this.props
    console.log(deck)

    // navigation
    const { navigation } = this.props

    const { title, key } = navigation.state.params
    console.log(title)


    // to  keep records of number of cards, and results
    const questions = deck.questions
    console.log(questions)
    const allQuestions = questions.length
    const unanswered = questions.filter(question => question.result === null ).length
    const correct = questions.filter(question => question.result === 'correct').length
    console.log(correct)



    return(
      <View style={styles.quizContainer}>


        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          cards={flashCards}
          renderCard={this.renderCard}
          onSwipedLeft={index => {
            console.log(flashCards[index].question)
            playCard({ title: title, question: flashCards[0].question, result: 'incorrect' })

            // clearLocalNotification()
            //   .then(setLocalNotification)
          }}
          onSwipedRight={index => {
            playCard({ title: title, question: flashCards[index].question, result: 'correct' })

            // clearLocalNotification()
            //   .then(setLocalNotification)
          }}
          onSwipedAll={() => {
            this.props.navigation.navigate(
              'CompleteView',
              { deck, correct, total: allQuestions,title }
            )
          }}
          // overlayLabels={{
          //     left: {
          //       title: 'NOT YET',
          //       swipeColor: red,
          //       backgroundOpacity: '0.75',
          //       fontColor: white
          //     },
          //     right: {
          //       title: 'GOT IT',
          //       swipeColor: orange,
          //       backgroundOpacity: '0.75',
          //       fontColor: white
          //     },
          //   }}
            animateOverlayLabelsOpacity
            animateCardOpacity
            backgroundColor={white}
            verticalSwipe={true}
            cardVerticalMargin={0}
            cardHorizontalMargin={0}
            marginTop={140}

          >


          </Swiper>

       <View>
        {total !== 0
          ? <View>
              <Text style={styles.cardNumber}>{(total - unanswered) < total ? total - unanswered + 1 : total} of {total}</Text>
            </View>
          : <View>
              <Text style={styles.cardNumber}></Text>
            </View>}


          {/* <View style={styles.buttonContainer}>
            <Button onPress={() => {
              questions.map(item =>
              playCard({ title: deck.title, question: item.question, result: 'correct' })
            )}}>Correct</Button>
            <Button>Incorrect</Button>
          </View> */}

          <Text style={styles.textExplanation}>
            If your guess is correct, swipe right, otherwise swipe left.
          </Text>
          <Text style={styles.textExplanation}>
            To check the answer, Click the card.
          </Text>


          <TextButton onPress={() => {
            navigation.goBack()
            questions.map(item => playCard({ title: deck.title, question: item.question, result: null }))
          }}>Reset

          </TextButton>



        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    alignItems: 'center',
  },
cardNumber: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textExplanation: {
    marginTop:5,
    marginBottom: 10,
    marginLeft:3,
    marginRight:3,
    textAlign:'center',
    fontSize:16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:5,
    marginBottom:5
  },
  flipCard: {
    backgroundColor: white,
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    width: width - 20,
    height: height - 200,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0,
  },
  flipSide: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipFace: {
    fontSize: 25,
    textAlign: 'center',
    width: width - 40,
    color: orange,
  },
  flipBack: {
    fontSize: 25,
    textAlign: 'center',
    width: width - 40,
    color: purple,
  },
})

function mapStateToProps (decks, { navigation }) {
  const { title } = navigation.state.params

  return {
    deck: decks[title]
  }
}


export default connect(
  mapStateToProps,
  { playCard },
)(QuizView)
