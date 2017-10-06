import React, {Component} from 'react'
import { View, Text,StyleSheet } from 'react-native'

class NoDeck extends Component {
  render() {
    return(
      <View style={styles.TextStyle}>
        <Text>Please Create a Deck</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  TextStyle: {
   justifyContent: 'center',
   alignSelf: 'center',
   fontSize: 20,
  },
})


export default NoDeck
