import React, {Component} from 'react'
import { View, Text,StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux';
import { submitEntry  } from '../utils/api'
import { Container, Input, Button } from './common'
import { addCard } from '../actions/index'

class AddCard extends Component {

  state = {
    question: '',
    answer: '',
  }

  submit = () => {
   const trimedQuestion = this.state.question.trim()
   const trimedAnswer = this.state.answer.trim()

   const { addCard,navigation } = this.props
   // Navigation
    const { title } = navigation.state.params

   if(trimedQuestion === ''|| trimedAnswer === '') {
     Alert.alert(
                'Please fill in both question and answer',
                null,
                [{text: 'OK'}],
                { cancelable: false }
              )
              return
            }
            console.log(trimedQuestion)

            // submitEntry({ key: title,
            //   entry: { title, questions: [{ result: null, trimedQuestion, trimedAnswer },
            //      ...state[title].questions] } })
            navigation.goBack()

　　　　　　　addCard({ title, question: trimedQuestion, answer: trimedAnswer })



            this.setState(() => ({
              question:"",
              answer:""
            }))


   }




  render() {
   // styles
   const {addCardContainer,addStyleToContainer} = styles

   // state
   const { question, answer } = this.state
   console.log(this.props)


    return(
      <View style={addCardContainer}>

        <Container style={addStyleToContainer}>

          <Input
            placeholder="What is a question?"
            value={question}
            onChangeText={(question) => {this.setState({question})}}
          />
        </Container>
        <Container style={addStyleToContainer}>

          <Input
            placeholder="Answer for the question"
            value={answer}
            onChangeText={(answer) => {this.setState({answer})}}
            multiline = {true}
          />
        </Container>

        <Button onPress={this.submit}>
            Create
        </Button>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  addCardContainer:{
  flex: 1,
  justifyContent: 'center',
  marginRight: 30,
  marginLeft: 30,
  },
  addStyleToContainer: {
    marginTop: 10,
    marginBottom: 20
  }
})

function mapDispatchToProps (dispatch) {
  return {
    addCard: (data) => dispatch(addCard(data)),
  }
}


export default connect(
  null,
  mapDispatchToProps,
)(AddCard)
