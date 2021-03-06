import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { submitEntry } from '../utils/api';
import { addDeck } from '../actions';
import { Container, Input, Button } from './common';

class AddDeck extends Component {
  state = {
    deckName: '',
    fieldError: false
  };

  submit = () => {
    const deckName = this.state.deckName.trim();
    // mapDispatchToProps
    const { addDeck } = this.props;

    if (deckName) {
      submitEntry({ key: deckName, entry: { title: deckName, questions: [] } });

      this.toDetail(deckName);

      addDeck({ title: deckName });
      this.setState(() => ({
        deckName: ''
      }));
    } else {
      this.setState({ fieldError: true });
    }
  };

  handleChange = deckName => {
    this.setState({ deckName });
    this.setState({ fieldError: false });
  };

  toDetail = deckName => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        params: { deckTitle: deckName },
        routeName: 'DeckDetail'
      })
    );
  };

  render() {
    const { addDeckContainer, textStyle, errorTextStyle } = styles;

    //  ComponentState
    const { deckName, fieldError } = this.state;

    return (
      <KeyboardAvoidingView style={addDeckContainer} behavior="padding">
        <Text style={textStyle}>Create a New Deck</Text>

        {fieldError &&
          <Text style={errorTextStyle}> Please fill in the form</Text>}

        <Container>
          <Input
            placeholder="Deck Title"
            value={deckName}
            onChangeText={deckName => this.handleChange(deckName)}
          />
        </Container>

        <Button onPress={this.submit}>Create</Button>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  addDeckContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 50,
    marginBottom: 70
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  textStyle: {
    fontSize: 30,
    marginTop: 50
  }
});

function mapDispatchToProps(dispatch) {
  return {
    addDeck: deckName => dispatch(addDeck(deckName))
  };
}

export default connect(null, mapDispatchToProps)(AddDeck);
