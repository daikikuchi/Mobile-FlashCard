import _ from 'lodash';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { fetchDecks, removeEntry } from '../utils/api';
import { orange, purple, white } from '../utils/colors';
import { connect } from 'react-redux';
import { Container, TextButton } from './common';
import { NoDeck } from './NoDeck';
import { receiveDecks, removeDeck } from '../actions/index';

class DeckList extends Component {
  componentDidMount() {
    fetchDecks().then(decks => this.props.receiveDecks(decks));
  }

  renderItem = ({ item }) => {
    if (item) {
      return (
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('DeckDetail', {
              deckTitle: item.title
            })}
        >
          {item.title &&
            <Container style={{ flexDirection: 'column' }}>
              <Text style={styles.deckText}>
                {item.title}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.cardText}>
                  {item.questions.length} cards
                </Text>
                <TextButton
                  onPress={() => {
                    Alert.alert(
                      'This will delete this deck and all the cards!',
                      null,
                      [
                        { text: 'Cancel' },
                        {
                          text: 'OK',
                          onPress: () =>
                            this.props.removeDeck({ title: item.title })
                        }
                      ],
                      { cancelable: false }
                    );

                    removeEntry(item.title);
                  }}
                >
                  remove
                </TextButton>
              </View>
            </Container>}
        </TouchableOpacity>
      );
    } else {
      <NoDeck />;
    }
  };

  render() {
    // Navigation
    const { navigation } = this.props;

    // Store
    const { arrDecks } = this.props;

    const {
      deckListContainer,
      headerText,
      deckText,
      header,
      cardText
    } = styles;

    return (
      <View style={deckListContainer}>
        <View style={header}>
          <Text style={headerText}>Deck</Text>
        </View>
        <FlatList
          data={arrDecks}
          renderItem={({ item }) => this.renderItem({ item })}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckListContainer: {
    backgroundColor: white,
    padding: 15,
    marginTop: 17,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    borderBottomWidth: 1,
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  header: {
    borderBottomWidth: 5,
    borderColor: '#ddd'
  },
  headerText: {
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  deckText: {
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 100
  },
  cardText: {
    fontSize: 15,
    alignItems: 'flex-start',
    flex: 1
  }
});

function mapStateToProps(decks) {
  const arrDecks = _.map(decks, val => {
    return { ...val };
  });

  return { arrDecks };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveDecks: data => dispatch(receiveDecks(data)),
    removeDeck: data => dispatch(removeDeck(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
