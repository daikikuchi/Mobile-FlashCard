import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { Container, Button } from './common';
import { playCard } from '../actions/index';

class CompleteView extends Component {
  render() {
    const { playCard } = this.props;

    const { navigation } = this.props;
    const { deck, correct, total, title } = navigation.state.params;

    const result = correct / total;

    const { resultContainer, resultText, ButtonContainer } = styles;

    toDetail = title => {
      navigation.dispatch(
        NavigationActions.navigate({
          params: { deckTitle: title },
          routeName: 'DeckDetail'
        })
      );
    };

    return (
      <View style={resultContainer}>
        <Text style={resultText}>
          {`${Math.floor(result * 100)}%`} of your answer is correct!
        </Text>

        <View style={ButtonContainer}>
          <Button
            onPress={() => {
              navigation.goBack();
              deck.questions.map(item =>
                playCard({
                  title: title,
                  question: item.question,
                  result: null
                })
              );
            }}
          >
            Play Again!
          </Button>

          <Button
            onPress={() => {
              navigation.dispatch(
                NavigationActions.navigate({
                  params: { deckTitle: title },
                  routeName: 'DeckDetail'
                })
              );
              deck.questions.map(item =>
                playCard({
                  title: title,
                  question: item.question,
                  result: null
                })
              );
            }}
          >
            Back to Deck
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultText: {
    fontSize: 25,
    marginBottom: 30
  },
  ButtonContainer: {
    marginTop: 80
  }
});

export default connect(null, { playCard })(CompleteView);
